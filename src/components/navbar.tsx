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
                title="Adobe Creative Cloud"
                href="#"
                src="https://res.cloudinary.com/dyg1rahpk/image/upload/v1740426812/adobe_nxhf07.jpg"
                description="Master the art of creativity with Adobe Creative Cloud’s powerful design and editing tools."
              />
              <ProductItem
                title="AWS"
                href="#"
                src="https://venturebeat.com/wp-content/uploads/2024/12/776246284_03.jpg"
                description="Learn AWS cloud computing, networking, storage, security, and deployment with hands-on practice."
              />
              <ProductItem
                title="Project Management"
                href="#"
                src="https://res.cloudinary.com/dyg1rahpk/image/upload/v1740428600/ckbvxm4xfp0ac0mqjvzx.jpg"
                description="Learn project management principles, methodologies, and tools to effectively plan, execute, and deliver projects."
              />
              <ProductItem
                title="Microsoft Azure"
                href="#"
                src="https://d3mxt5v3yxgcsr.cloudfront.net/courses/19907/course_19907_image.png"
                description="Master Microsoft Azure's cloud services, including computing, networking, security, and AI integration."
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