'use client';

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

// Define interfaces for better type safety
interface Feature {
  title: string;
  description: string;
  skeleton: React.ReactNode;
  className: string;
}

interface FeatureCardProps {
  children?: React.ReactNode;
  className?: string;
}

// Main component
export function FeaturesSectionDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features: Feature[] = [
    {
      title: "Enterprise Solutions & Business Software",
      description:
        "We provide ERP solutions to streamline operations, CRM systems for better customer engagement and sales tracking, and custom web development to enhance business efficiency and growth.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Cybersecurity & Blockchain Solutions",
      description:
        "We offer cybersecurity solutions and training through Mile2 to protect businesses from threats and blockchain solutions with Zedtudium to implement secure, decentralized technologies.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Training & Certification Programs",
      description:
      "We offer tech and business courses for students, corporate training to upskill employees, and digital marketing training to equip individuals with modern marketing strategies.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "EdTech & University Partnerships Across Globe",
      description:
        "We collaborate with universities to provide IT and technology solutions, support a student mobility program for global education opportunities, and establish MoUs with academic institutions to foster strategic partnerships and educational growth.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white dark:text-white">
        One platform. Endless possibilities.
        </h4>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        From enterprise solutions to cutting-edge technology services, we provide <span className="font-semibold italic"> ERP, CRM, cybersecurity, blockchain, web development, IT training, and hardware solutions—all </span> in one place. Whether you're a business, university, or individual, we deliver seamless digital transformation under one roof.
        </p>
      </div>

      <div className="relative">
  <div className="grid grid-cols-1 lg:grid-cols-6 text-justify mt-12 xl:border rounded-md dark:border-neutral-800">
    {features.map((feature) => (
      <FeatureCard key={feature.title} className={feature.className}>
        <FeatureTitle>{feature.title}</FeatureTitle>
        <FeatureDescription>{feature.description}</FeatureDescription>
        <div className="h-full w-full">{feature.skeleton}</div>
      </FeatureCard>
    ))}
  </div>
</div>
    </div>
  );
}

const FeatureCard: React.FC<FeatureCardProps> = ({ children, className }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <p className="text-sm md:text-base max-w-sm mx-0 text-justify text-neutral-500 dark:text-neutral-300 font-normal my-2">
      {children}
    </p>
  );
};

const SkeletonOne: React.FC = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-black dark:bg-neutral-900 shadow-2xl group h-96">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <Image
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

const SkeletonTwo: React.FC = () => {
  const images = [
    "https://media.istockphoto.com/id/2035601113/photo/cybersecurity-innovations-concept-engineer-computer-working-with-laptop-computer-show-pad.webp?a=1&b=1&s=612x612&w=0&k=20&c=pZpBHF933L0NfsjAuQZaRRTQN9-ngYcxRN_IWwZ-NTA=",
    "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1639729275509-1c5dc3748e77?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJsb2NrY2hhaW4lMjBTb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D",

  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={`images-first-${idx}`}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-black dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={`images-second-${idx}`}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-black dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

const SkeletonThree: React.FC = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=-FKQwXtrSSQ"
      target="_blank"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
          <Image
            src="https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

const SkeletonFour: React.FC = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

const Globe: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    let phi = 0;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};