import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import StaffDetail from "./pages/StaffDetail";
import Stylists from "./pages/Stylists";
import Menu from "./pages/Menu";
import News from "./pages/News";
import Recruit from "./pages/Recruit";
import Products from "./pages/Products";
import FAQ from "./pages/FAQ";
import Store from "./pages/Store";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/staff/:id"} component={StaffDetail} />
      <Route path={"/stylists"} component={Stylists} />
      <Route path={"/menu"} component={Menu} />
      <Route path={"/news"} component={News} />
      <Route path={"/ recruit"} component={Recruit} />
      <Route path={"/products"} component={Products} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/store"} component={Store} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;

