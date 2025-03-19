import React, { useState } from "react";
import {NavbarDemo} from "./navbar"
import {MovingBorderDemo} from "./moving-border"
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";


export function NavContainerDemo() {
  return (
    <div className="flex justify-evenly items-center">
    <div className="">
        <Link href="/">
          <div className=" bg-slate-300 py-2 px-8 mt-1 rounded-lg shadow-lg transition-all ease-in-out hover:shadow-xl hover:bg-gray-50">
            <img
              src="https://lotlitetechnology.com/static/images/logos/logo.png"
              alt="Company Logo"
              className="h-12 w-auto mx-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>
      </div>

      <NavbarDemo/>
      <MovingBorderDemo title="Request A Call" url="/contact"/>


      </div>
  );
}