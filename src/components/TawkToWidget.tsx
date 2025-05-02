import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/68149cbbaf5560190d0d507e/1iq888fcu"; // ✅ replace with your actual script link
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null;
};

export default TawkToWidget;
