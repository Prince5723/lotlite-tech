"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative">
      
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-40", className)}
      >
        <Menu setActive={setActive}>
          <div className="relative">
            <Link href="/" className="cursor-pointer text-white hover:opacity-[0.9]">
              Home
            </Link>
          </div>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/interface-design">Training & Certification Programs</HoveredLink>
              <HoveredLink href="/seo">Cybersecurity & Blockchain Solutions</HoveredLink>
              <HoveredLink href="/seo">Enterprise Solutions & Business Software</HoveredLink>
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/branding">Consulting Services</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Careers">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Systems Administrator</HoveredLink>
              <HoveredLink href="/individual">Network Engineer</HoveredLink>
              <HoveredLink href="/team">Database Administrator</HoveredLink>
              <HoveredLink href="/enterprise">Cybersecurity Analyst</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}