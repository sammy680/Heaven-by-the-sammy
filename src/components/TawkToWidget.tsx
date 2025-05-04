// src/components/TawkToWidget.tsx
import { useEffect } from "react";

/**
 * Adds the Tawk.to live chat widget to the website
 * by dynamically injecting the Tawk.to script.
 */
const TawkToWidget = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");

    // Replace with your actual Tawk.to script URL
    script.src = "https://embed.tawk.to/68149cbbaf5560190d0d507e/1iq888fcu"; // ✅ replace with your actual script link

    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Append the script to the body to load the widget
    document.body.appendChild(script);
  }, []);

  return null;
};

export default TawkToWidget;
