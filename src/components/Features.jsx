"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function Features() {
  return (
    <div className="grid bg-transparent grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-6">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-slate-800 min-h-[500px] lg:min-h-[300px] relative overflow-hidden"
        className="w-full h-full"
      >
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-left text-balance text-xl md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
              Revolutionizing Learning and Productivity with AI
            </h2>
            <p className="mt-4 text-left text-md text-neutral-200">
              At Snap Notes, we are committed to transforming the way you engage with your documents. Whether it's simplifying 
              complex material, extracting insights, or turning your PDFs into dynamic and digestible notes, our platform ensures 
              every user gets the most out of their resources. 
            </p>
            
          </div>
          <div className="w-full md:w-1/2 relative h-[250px]">
            {/* Added fixed height */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Added wrapper with overflow */}
              <Image
                src="/demo1.png"
                fill
                alt="Snap Notes in action"
                className="object-contain w-full h-full" /* Changed to object-cover */
              />
            </div>
          </div>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 bg-slate-800 min-h-[300px]">
        <div className="p-6">
          <h2 className="max-w-80 text-left text-balance text-xl md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
          Join the Revolution with Snap Notes
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-md text-neutral-200">
          With thousands of users already benefiting from our platform, Snap Notes is quickly becoming the go-to solution 
              for AI-assisted document processing. Whether you're a researcher, student, or professional, our innovative tools 
              are designed to save you time, reduce stress, and help you work smarter.
          </p>
        </div>
      </WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-slate-800 min-h-[500px] lg:min-h-[300px] relative overflow-hidden"
        className="w-full h-full"
      >
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-left text-balance text-xl md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
              A Powerful Platform to Enhance Your Workflow
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-md text-neutral-200">
              Say goodbye to outdated and clunky note-making tools. Snap Notes brings you a modern, feature-rich text editor that 
            allows for bold, italics, headings, and even code blocks. Effortlessly organize your thoughts, create detailed 
            summaries, and customize your notes to fit your unique workflow.
            </p>
            
          </div>
          <div className="w-full md:w-1/2 relative h-[250px]">
            {/* Added fixed height */}
            <div className="relative w-full h-full  overflow-hidden">
              {/* Added wrapper with overflow */}
              <Image
                src="/demo2.png"
                fill
                alt="Snap Notes demo in action"
                className="object-contain w-full h-full" /* Changed to object-cover */
              />
            </div>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
