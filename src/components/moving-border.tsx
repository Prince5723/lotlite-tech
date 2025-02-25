"use client";
import React from "react";
import { Button } from "./ui/moving-border";

interface MovingBorderDemoProps {
  title?: string;
}

export function MovingBorderDemo({ title = "Get A Quote" }: MovingBorderDemoProps) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-slate-900 text-white border-slate-800"
      >
        {title}
      </Button>
    </div>
  );
}