import { useEffect } from "react";

const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

function Analytics() {
  useEffect(() => {
    if (!PLAUSIBLE_DOMAIN) {
      return undefined;
    }

    const existing = document.querySelector(
      `script[data-domain="${PLAUSIBLE_DOMAIN}"]`,
    );

    if (existing) {
      return undefined;
    }

    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = PLAUSIBLE_DOMAIN;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}

export default Analytics;
