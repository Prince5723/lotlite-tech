"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/moving-border";

interface MovingBorderDemoProps {
  title?: string;
  url?: string;
}

export function MovingBorderDemo({ 
  title = "Get A Quote", 
  url 
}: MovingBorderDemoProps) {
  const router = useRouter();

  const handleClick = () => {
    if (url) {
      router.push(url);
    }
  };

  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-slate-900 text-white border-slate-800"
        onClick={handleClick}
      >
        {title}
      </Button>
    </div>
  );
}