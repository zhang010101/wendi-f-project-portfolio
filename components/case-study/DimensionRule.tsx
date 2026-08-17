"use client";

import { useEffect, useRef } from "react";

export default function DimensionRule() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="my-24 md:my-32" aria-hidden="true">
      <div ref={ref} className="dimension-rule" />
    </div>
  );
}
