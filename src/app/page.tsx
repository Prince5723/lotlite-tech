import Image from "next/image";
import { CoverDemo } from '@/components/hero-cover'
import { HeroParallaxDemo } from '@/components/hero-parallax'
import { FocusCardsDemo } from '@/components/focus-card'
import { FeaturesSectionDemo } from '@/components/services-home'
import { AnimatedTestimonialsDemo } from '@/components/testimonials'
import { NavContainerDemo } from '@/components/nav-container'

export default function Home() {
  return (
    <>
    <NavContainerDemo/>
      <HeroParallaxDemo />
      <FocusCardsDemo/>
      <FeaturesSectionDemo/>
      <AnimatedTestimonialsDemo/>
    </>
  );
}
