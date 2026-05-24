import { Switch, Route, useLocation } from "wouter";
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

const routeSeo: Record<string, { title: string; description: string; robots?: string }> = {
  "/": {
    title: "Antravi - Luxury Travel Experiences | Maldives, Bali & Thailand",
    description: "Plan your dream luxury vacation with Antravi. Explore premium Maldives resorts, Bali luxury holidays, and Thailand private tours.",
  },
  "/about": {
    title: "About Antravi | Luxury Travel Planning",
    description: "Meet Antravi, a boutique luxury travel consultancy designing personalized Maldives, Bali, and Thailand vacations.",
  },
  "/destinations/maldives": {
    title: "Maldives Resorts & Luxury Packages | Antravi",
    description: "Explore handpicked Maldives resorts, overwater villas, private island stays, and luxury honeymoon packages with Antravi.",
  },
  "/destinations/bali": {
    title: "Bali Luxury Holidays | Antravi",
    description: "Discover curated Bali luxury holidays with private stays, beaches, culture, wellness, and seamless travel planning.",
  },
  "/destinations/thailand": {
    title: "Thailand Private Tours | Antravi",
    description: "Plan Thailand private tours with Antravi, including Bangkok, Phuket, Krabi, Pattaya, island stays, and premium travel support.",
  },
  "/contact": {
    title: "Contact Antravi",
    description: "Contact Antravi to plan your custom luxury vacation.",
    robots: "noindex, follow",
  },
  "/privacy": {
    title: "Privacy Policy | Antravi",
    description: "Antravi privacy policy.",
    robots: "noindex, follow",
  },
  "/terms": {
    title: "Terms & Conditions | Antravi",
    description: "Antravi terms and conditions.",
    robots: "noindex, follow",
  }
};

function setMeta(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function setCanonical(path: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", `https://antravi.com${path === "/" ? "" : path}`);
}

function SeoManager() {
  const [location] = useLocation();

  useEffect(() => {
    const seo = routeSeo[location] ?? {
      title: "Antravi - Luxury Travel Experiences",
      description: "Luxury travel experiences and custom vacation planning with Antravi.",
      robots: "noindex, follow",
    };

    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("robots", seo.robots ?? "index, follow");
    setCanonical(location);
  }, [location]);

  return null;
}

// Router must be inside wouter context so useAnalytics (which calls useLocation) works correctly
function Router() {
  useAnalytics();

  return (
    <>
      <SeoManager />
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
    </>
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
