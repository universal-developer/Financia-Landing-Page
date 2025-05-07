import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/Pill";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[var(--ui-dark-700)] min-h-screen flex items-center">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
        {/* Left column */}
        <div className="order-1 md:order-1 flex flex-col gap-8">
          <Pill className="bg-[var(--ui-dark-300)]">Join the future</Pill>
          <h1 className="text-h1 text-white">
            Evolving
            <br />
            Finance for the
            <br />
            Digital Era
          </h1>
          <p className="text-[var(--ui-light-600)] text-body-xl">
            Discover the Future of Finance: Seamless Transactions, Innovative
            Solutions, and a User-Friendly Interface.
          </p>

          <Button variant="secondary" size="lg">
            Let's get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Button>
        </div>

        {/* Right column */}
        <div className="order-2 md:order-2">
          <p className="text-white text-2xl">Second col</p>
        </div>
      </div>
    </section>
  );
}
