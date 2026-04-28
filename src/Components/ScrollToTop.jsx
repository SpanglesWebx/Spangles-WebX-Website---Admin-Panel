import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () => {
  // Force scroll to absolute top
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Additional fallback for stubborn cases
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 10);
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      // Small delay to ensure the target page is rendered
      const timeout = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      scrollToTop();
      window.dispatchEvent(new Event("resize"));
      const raf = requestAnimationFrame(() => {
        scrollToTop();
        window.dispatchEvent(new Event("resize"));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;