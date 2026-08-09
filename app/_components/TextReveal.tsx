"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLSpanElement>(".word");

      gsap.set(words, {
        color: "#e9ecef",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.to(words, {
        color: "#000",
        stagger: 0.08,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <p
      ref={containerRef}
      className={`text-4xl leading-relaxed font-medium ${className}`}
    >
      {text.split(" ").map((word, index) => (
        <span key={index} className="word inline-block mr-2 transition-colors">
          {word}
        </span>
      ))}
    </p>
  );
}
