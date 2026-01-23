import { useEffect } from "react";
import { useLocation } from "wouter";

// TODO: Replace with your actual Google Analytics Measurement ID (starts with G-)
// Example: "G-XXXXXXXXXX"
const GA_MEASUREMENT_ID = ""; 

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Initialize GA script if not already present
    if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID);
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location,
    });
  }, [location]);

  return null;
}
