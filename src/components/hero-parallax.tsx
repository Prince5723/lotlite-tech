"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/autodesk-revit-courses-scaled.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/27.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/Apple-new-professional-training-hero_big.jpg.slideshow-medium.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/adobe-training.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/1696603940780.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/google-certs.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/901e5084-8011-41b5-9e09-969822338210_5.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/Untitled-design-26.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/Azure-training-IMG.jpg",
  }
];
