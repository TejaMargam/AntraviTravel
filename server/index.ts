import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Security Headers Middleware
app.use((req, res, next) => {
  // HTTPS and Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Content Security Policy - different for development vs production
  const isDevelopment = process.env.NODE_ENV === 'development';
  
if (isDevelopment) {
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    // Added https://*.freshsales.io here
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://replit.com https://*.myfreshworks.com https://*.fw-cdn.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://*.freshsales.io; " +
    // Added https://*.freshsales.io here (sometimes they load CSS from there too)
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://*.freshsales.io; " +
    "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; " +
    "img-src 'self' data: https: https://images.unsplash.com https://plus.unsplash.com; " +
    "media-src 'self' https://videos.pexels.com; " +
    "connect-src 'self' ws: wss: https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://*.freshsales.io https://facebookleadimportapi.traviyo.com https://ljivhzufmvrrldkzeiwg.supabase.co; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "frame-src 'self' https://*.myfreshworks.com; "
  );    
} else {
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.myfreshworks.com https://*.fw-cdn.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://*.freshsales.io; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://*.freshsales.io; " +
    "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; " +
    "img-src 'self' data: https: https://images.unsplash.com https://plus.unsplash.com; " +
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://*.freshsales.io https://facebookleadimportapi.traviyo.com https://ljivhzufmvrrldkzeiwg.supabase.co; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "frame-src 'self' https://*.myfreshworks.com; " +
    "media-src 'self' https://videos.pexels.com; "
  );
}
  
  // Performance and Caching Headers
  if (req.path.match(/\.(js|css|woff|woff2|png|jpg|jpeg|gif|ico|svg)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year for static assets
  } else {
    // For HTML pages and SPA routes that serve HTML (non-asset requests)
    const acceptsHtml = req.headers.accept && req.headers.accept.includes('text/html');
    const isApiRoute = req.path.startsWith('/api');
    
    if (acceptsHtml && !isApiRoute) {
      res.setHeader('Cache-Control', 'no-cache, must-revalidate'); // Force revalidation for HTML/SPA routes
    }
  }
  
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
