import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppButton from "./components/WhatsAppButton";
import { Suspense, lazy, useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

// Lazy load non-critical components
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const Resorts = lazy(() => import("@/pages/maldives"));
const NotFound = lazy(() => import("@/pages/not-found"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));
const ThankYou = lazy(() => import("@/pages/thankyou"));
const Bali = lazy(() => import("@/pages/bali"));
const Thailand = lazy(() => import("@/pages/thailand"));

// Loading component for lazy loaded routes
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--warm-cream)' }}>
    <div className="text-center">
      <div style={{ width: '2.5rem', height: '1px', background: 'var(--luxury-gold)', margin: '0 auto 1.5rem' }} />
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mid-gray)' }}>
        Loading your travel experience...
      </p>
    </div>
  </div>
);

// Router must be inside wouter context so useAnalytics (which calls useLocation) works correctly
function Router() {
  useAnalytics();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/destinations/maldives" component={Resorts} />
      <Route path="/destinations/bali" component={Bali} />
      <Route path="/destinations/thailand" component={Thailand} />
      <Route path="/terms" component={TermsAndConditions} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/thankyou" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // initialize GA once
  useEffect(() => {
    initGA();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <main id="main-content">
            <Suspense fallback={<LoadingFallback />}>
              <Router />
            </Suspense>
          </main>
          <WhatsAppButton />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
