
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Service Pages
import AppDevelopment from "./pages/services/AppDevelopment";
import AIWorkflow from "./pages/services/AIWorkflow";
import Automation from "./pages/services/Automation";
import WebDevelopment from "./pages/services/WebDevelopment";
import CustomSolutions from "./pages/services/CustomSolutions";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/ai-workflow" element={<AIWorkflow />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/custom-solutions" element={<CustomSolutions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
