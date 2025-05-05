import React, { useEffect } from "react";

const TawkToWidget: React.FC = () => {
  useEffect(() => {
    // Tawk.to script ko load karne ke liye
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/your_tawk_to_id/default";
    script.async = true;
    script.onload = () => {
      console.log("Tawk.to script loaded");
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // Yeh component kisi bhi visual output ko render nahi karega
};

export default TawkToWidget;
