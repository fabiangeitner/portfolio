import { Button } from "@/components/ui/button";
import React from "react";

function Home() {
  return (
    <>
      <div className="w-full h-[92vh] flex flex-col justify-center items-center gap-8">
        {/* Custom symbols */}
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="rounded-full text-2xl">
            🎨
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-2xl">
            💻
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-2xl">
            🎬
          </Button>
        </div>
        {/* Headline */}
        <div className="py-16 px-32 bg-slate-100">
          <h1 className="text-7xl font-bold text-center">Creative Developer</h1>
        </div>

        {/* Service */}
        <ul className="w-full flex justify-center items-center gap-4 list-none">
          <li className="italic">creative</li>
          <li className="underline">developer</li>
          <li className="font-bold">design</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
