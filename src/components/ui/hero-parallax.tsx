"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {CoverDemo} from '@/components/hero-cover'
import {MovingBorderDemo} from '@/components/moving-border'

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Track if items have moved below their original position
  const [isBelow, setIsBelow] = useState(false);

  // Monitor scroll position to determine if elements have moved below
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // When scrollYProgress is above a certain threshold, items will have moved below their original position
      // Adjust this threshold as needed based on your animation timing
      setIsBelow(value > 0.1);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden bg-black antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              isClickable={isBelow}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              isClickable={isBelow}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              isClickable={isBelow}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <>
      <div className="max-w-7xl text-white relative mx-auto py-20 md:py-38 px-4 w-full left-0 top-0 z-10">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          <CoverDemo/>
        </h1>
        <div className="flex gap-5">
        <MovingBorderDemo title="Explore Courses" url="/courses"/>
        <MovingBorderDemo title="Request A Call" url="/contact"/>
        </div>
      </div>
    </>
  );
};

export const ProductCard = ({
  product,
  translate,
  isClickable,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  isClickable: boolean;
}) => {
  // Create a ref to track current Y position
  const cardRef = useRef<HTMLDivElement>(null);
  const [canClick, setCanClick] = useState(false);
  
  useEffect(() => {
    if (!isClickable) {
      setCanClick(false);
      return;
    }
    
    // If isClickable is true, we can start checking actual position
    const checkPosition = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        // Check if the element has moved below its original position
        // You might need to adjust this logic based on your layout
        const hasMoved = rect.y > 0; // This is a simplification, adjust as needed
        setCanClick(hasMoved);
      }
    };

    checkPosition();
    window.addEventListener('scroll', checkPosition);
    return () => window.removeEventListener('scroll', checkPosition);
  }, [isClickable]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className={`group/product h-96 w-[30rem] relative flex-shrink-0 ${canClick ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <Link 
        href={product.link} 
        className="block group-hover/product:shadow-2xl"
        onClick={(e) => !canClick && e.preventDefault()}
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};