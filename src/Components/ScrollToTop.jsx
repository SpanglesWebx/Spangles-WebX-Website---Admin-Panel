import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    console.log("ScrollToTop running for pathname:", pathname);
    scrollToTop();
    window.dispatchEvent(new Event("resize"));
    const raf = requestAnimationFrame(() => {
      scrollToTop();
      window.dispatchEvent(new Event("resize"));
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
};

export default ScrollToTop;