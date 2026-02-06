import { useState, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashIntro from "./components/SplashIntro";
import Index from "./pages/Index";
import RoseDay from "./pages/RoseDay";
import ProposeDay from "./pages/ProposeDay";
import ChocolateDay from "./pages/ChocolateDay";
import TeddyDay from "./pages/TeddyDay";
import PromiseDay from "./pages/PromiseDay";
import HugDay from "./pages/HugDay";
import KissDay from "./pages/KissDay";
import ValentinesDay from "./pages/ValentinesDay";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash && <SplashIntro onComplete={handleSplashComplete} />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rose-day" element={<RoseDay />} />
            <Route path="/propose-day" element={<ProposeDay />} />
            <Route path="/chocolate-day" element={<ChocolateDay />} />
            <Route path="/teddy-day" element={<TeddyDay />} />
            <Route path="/promise-day" element={<PromiseDay />} />
            <Route path="/hug-day" element={<HugDay />} />
            <Route path="/kiss-day" element={<KissDay />} />
            <Route path="/valentines-day" element={<ValentinesDay />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
