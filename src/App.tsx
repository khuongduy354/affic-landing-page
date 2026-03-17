import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChatWidget from "./components/ChatWidget";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Documentation from "./pages/Documentation";
import ApiReference from "./pages/ApiReference";
import IntegrationGuide from "./pages/IntegrationGuide";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<About />} />
    <Route path="/case-studies" element={<CaseStudies />} />
    <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/documentation" element={<Documentation />} />
    <Route path="/api-reference" element={<ApiReference />} />
    <Route path="/integration-guide" element={<IntegrationGuide />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/cookie-policy" element={<CookiePolicy />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export const AppShell = ({ router }: { router: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {router}
          <ChatWidget />
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

const App = () => (
  <AppShell
    router={
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    }
  />
);

export default App;
