import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function SiteSkin() {
  const torns = useLocation().pathname.includes("torns");

  useEffect(() => {
    document.documentElement.dataset.skin = torns ? "torns" : "lirn";
    return () => {
      delete document.documentElement.dataset.skin;
    };
  }, [torns]);

  return null;
}
