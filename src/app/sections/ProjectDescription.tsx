
"use client";

import { useState } from "react";

type ProjectDescriptionProps = {
  description: string;
};

export default function ProjectDescription({
  description,
}: ProjectDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-sm leading-6 text-gray-400 sm:text-base">
      <p
        className={
          expanded
            ? "line-clamp-none"
            : "line-clamp-3 sm:line-clamp-none"
        }
      >
        {description}
      </p>

      <div className="flex justify-end sm:hidden">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 font-medium text-primary transition-colors hover:opacity-80"
          aria-expanded={expanded}
        >
          {expanded ? "Réduire −" : "Lire la suite +"}
        </button>
      </div>
    </div>
  );
}
