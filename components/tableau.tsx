"use client";

import { useEffect, useRef } from "react";

export default function TableauVisual({
  src,
  id,
}: {
  src: string;
  id: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    import("@tableau/embedding-api").then(({ TableauViz, Toolbar }) => {
      if (container && container.childElementCount == 0) {
        const viz = new TableauViz();
        viz.src = src;
        viz.toolbar = Toolbar.Bottom;
        viz.hideTabs = true;
        viz.width = "100%";
        container.appendChild(viz);
      }
    });
  }, [src]);

  return <div id={`viz${id}`} ref={containerRef} />;
}
