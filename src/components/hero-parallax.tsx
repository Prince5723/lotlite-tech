"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail:
      "https://venturebeat.com/wp-content/uploads/2024/12/776246284_03.jpg",
  },
  {
    title: "Cursor",
    link: "#",
    thumbnail:
      "https://res.cloudinary.com/dyg1rahpk/image/upload/v1740426812/adobe_nxhf07.jpg",
  },
  {
    title: "Rogue",
    link: "#",
    thumbnail:
      "https://imcinstitute.ae/public/uploads/images/image_lg/game-development-with-unity-3d.png",
  },
  {
    title: "Editorially",
    link: "#",
    thumbnail:
      "https://d3mxt5v3yxgcsr.cloudfront.net/courses/19907/course_19907_image.png",
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CQ-s-zZl9EArsGN8fbIixvcs8Moj1J3oDQ&s",
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail:
      "https://res.cloudinary.com/dyg1rahpk/image/upload/v1740428600/ckbvxm4xfp0ac0mqjvzx.jpg",
  },
  {
    title: "Algochurn",
    link: "#",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/27.jpg",
  },
  {
    title: "Aceternity UI",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1592898741922-5dd6de5f698c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlvc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Tailwind Master Kit",
    link: "#",
    thumbnail:
      "https://lotlitetechnology.com/media/course_images/google-certs.png",
  }
];
