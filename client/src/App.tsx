// import { Switch, Route } from "wouter";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Resorts from "@/pages/maldives";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import ThankYou from "@/pages/thankyou";
import Bali from "@/pages/bali";
import Thailand from "@/pages/thailand";

function Router() {
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
  
    // hook to track route changes
    useAnalytics();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
