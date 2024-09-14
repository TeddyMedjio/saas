"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

export default function Services() {
  const [hovered, setHovered] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [mouve, setMouve] = React.useState(false);
  return (
    <div className="py-[40px] lg:py-[120px] px-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center max-w-[580px] text-center gap-5">
        <h2 className=" text-[32px] font-dm_sans md:text-h2 text-white font-bold">
          Everything you need
        </h2>
        <p className=" text-base md:text-body_large font-inter text-gray-50">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap mt-20">
        {/* service one */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="max-w-[400px] bg-[#0D0D0D] p-10 border border-[#ffffff33] rounded-[10px] text-center flex flex-col items-center justify-center gap-2 relative overflow-hidden"
        >
          <div className="bg-white rounded-[5px] w-[56px] h-[56px] flex items-center justify-center mb-5  z-20">
            <RectangleGroupIcon className="size-7" />
          </div>
          <p className="text-h5 font-inter text-white font-bold z-20">
            Integration ecosystem
          </p>
          <p className="text-body_medium font-inter text-white z-20">
            Enhance your productivity by connecting with your favorite tools,
            keeping all your essentials in one place.
          </p>
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full w-full absolute inset-1 "
              >
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-[#5D2CA8]"
                  colors={[[125, 211, 252]]}
                  dotSize={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* service two */}
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="max-w-[400px] bg-[#0D0D0D] p-10 border border-[#ffffff33] rounded-[10px] text-center flex flex-col items-center justify-center gap-2 relative overflow-hidden"
        >
          <div className="bg-white rounded-[5px] w-[56px] h-[56px] flex items-center justify-center mb-5  z-20">
            <PresentationChartLineIcon className="size-7" />
          </div>
          <p className="text-h5 font-inter text-white font-bold z-20">
            Goal setting and tracking
          </p>
          <p className="text-body_medium font-inter text-white z-20">
            Define and track your goals, breaking down objectives into
            achievable tasks to keep your targets in sight.
          </p>
          <AnimatePresence>
            {hover && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full w-full absolute inset-1 "
              >
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-[#004b6e]"
                  colors={[[125, 211, 252]]}
                  dotSize={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* service three */}
        <div
          onMouseEnter={() => setMouve(true)}
          onMouseLeave={() => setMouve(false)}
          className="max-w-[400px] bg-[#0D0D0D] p-10 border border-[#ffffff33] rounded-[10px] text-center flex flex-col items-center justify-center gap-2 relative overflow-hidden"
        >
          <div className="bg-white rounded-[5px] w-[56px] h-[56px] flex items-center justify-center mb-5  z-20">
            <ShieldCheckIcon className="size-7" />
          </div>
          <p className="text-h5 font-inter text-white font-bold z-20">
            Secure data encryption
          </p>
          <p className="text-body_medium font-inter text-white z-20">
            With end-to-end encryption, your data is securely stored and
            protected from unauthorized access.
          </p>
          <AnimatePresence>
            {mouve && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full w-full absolute inset-1 "
              >
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-[#006856]"
                  colors={[[125, 211, 252]]}
                  dotSize={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
