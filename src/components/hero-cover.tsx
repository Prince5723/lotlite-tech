import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto relative z-20 py-6 text-white">
        Accelerate Your IT <br/> Career at <Cover>warp speed</Cover>
      </h1>
      <h6 className="text-2xl md:text-2xl lg:text-3xl font-medium max-w-7xl mx-auto relative z-20 py-4 text-white italic">
        With Lotlite Technologies, gain industry-leading skills <br/> and certifications to stay ahead in tech.
      </h6>
    </div>
  );
}

export default CoverDemo;