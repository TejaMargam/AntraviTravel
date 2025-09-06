import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    // always reset scroll when route changes
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return null;
}
