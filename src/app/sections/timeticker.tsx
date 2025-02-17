"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

// SegmentedDisplay Component
function SegmentedDisplay({ value }: { value: string }) {
  const valueRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (valueRef.current) {
      gsap.fromTo(
        valueRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "bounce.out" }
      );
    }
  }, [value]);

  const handleHover = () => {
    gsap.to(valueRef.current, {
      scale: 1.3,
      color: "#22d3ee",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleHoverOut = () => {
    gsap.to(valueRef.current, {
      scale: 1,
      color: "#FFFFF",
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      // Removed extra background styling
      className="rounded-lg p-4 w-20 h-24 flex items-center justify-center cursor-pointer"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <span ref={valueRef} className="text-4xl font-mono text-white">
        {value.padStart(2, "0")}
      </span>
    </div>
  );
}

// Countdown/Time Component with GSAP Marquee (Left to Right) Repeating Infinitely
export default function Time() {
  const [timeLeft, setTimeLeft] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  // Ref for the marquee container
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use the environment variable if available; otherwise, use a default value.
    const launchDate =
      process.env.NEXT_PUBLIC_LAUNCH_DATE || "2025-04-01T23:59:59";
    const targetDate = new Date(launchDate);

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
          minutes: Math.floor((difference / (1000 * 60)) % 60).toString(),
          seconds: Math.floor((difference / 1000) % 60).toString(),
        });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (marqueeRef.current) {
      const elementWidth = marqueeRef.current.offsetWidth;

      // Animate the container from offscreen left to offscreen right,
      // then repeat infinitely.
      gsap.fromTo(
        marqueeRef.current,
        { x: -elementWidth },
        {
          x: window.innerWidth,
          duration: 20, // Adjust duration for desired speed
          ease: "none",
          repeat: -1, // Infinite repeat
        }
      );
    }
  }, []);

  return (
    // Container with overflow-hidden to clip the marquee animation
    <div className="w-full overflow-hidden ">
      <div ref={marqueeRef} className="flex items-center gap-4">

        <span className="text-3xl font-semibold text-white  ">
          Launching Soon
        </span>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <SegmentedDisplay value={timeLeft.days} />
            <span className="text-white/80 text-sm mt-2">DAYS</span>
          </div>
          <div className="flex flex-col items-center">
            <SegmentedDisplay value={timeLeft.hours} />
            <span className="text-white/80 text-sm mt-2">HOURS</span>
          </div>
          <div className="flex flex-col items-center">
            <SegmentedDisplay value={timeLeft.minutes} />
            <span className="text-white/80 text-sm mt-2">MINUTES</span>
          </div>
          <div className="flex flex-col items-center">
            <SegmentedDisplay value={timeLeft.seconds} />
            <span className="text-white/80 text-sm mt-2">SECONDS</span>
          </div>

        </div>
      </div>

    </div>

  );
}  