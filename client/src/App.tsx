// import { Switch, Route } from "wouter";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Resorts from "@/pages/resorts";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/resorts" component={Resorts} />
      <Route path="/terms" component={TermsAndConditions} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WouterRouter base={import.meta.env.PROD ? "/AntraviTravel" : ""}>
        <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
