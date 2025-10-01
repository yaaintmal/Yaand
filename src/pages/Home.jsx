// Conceptual Home.jsx Refactor

import React from "react";
import { Link } from "react-router"; // Assuming you use react-router-dom

// NOTE: You would replace this section with your actual content/image source.
// This is a placeholder for the visual illustration.
const DiaryIllustration = () => (
  <div className="flex justify-center items-center p-6 lg:p-10">
    {/* This div is a placeholder for your 'grafik.png' diary icon */}
    {/* Applying a subtle bounce/pulse effect can make it feel alive */}
    <div className="w-48 h-48 lg:w-64 lg:h-64 bg-primary/20 rounded-2xl shadow-xl border-4 border-primary/50 flex justify-center items-center transform hover:scale-105 transition-transform duration-500 animate-pulse-slow">
      {/* Replace with your actual SVG or Image component */}
      <span className="text-6xl">📑</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="p-4 md:p-12 text-base-content min-h-screen">
      {/* --- Top Header/Nav Accent --- */}
      <div className="flex justify-end mb-8">
        {/* render two div conditionally (a or b) if screensize is less then 420px width */}
        <div className="hidden md:block">
          <span className="badge badge-lg badge-outline badge-primary font-light tracking-widest uppercase">
            your personal own digital journal
          </span>
        </div>
        {/* render a div conditionally if screensize is bigger then 420px width */}
        <div className="md:hidden">
          <span className="badge badge-lg badge-outline badge-primary font-light tracking-widest uppercase">
            your own journal
          </span>
        </div>
      </div>

      {/* --- Main Content Area: Two-Column Layout on Large Screens --- */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
        {/* LEFT COLUMN: Illustration and Branding */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Main Title with stronger branding */}
          <h1 className="text-6xl md:text-8xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
            yet another{" "}
            <div className="text-xl mb-4 mt-4">absolutely !necessary</div> diary
          </h1>

          {/* Sub-Headline */}
          <p className="text-xl md:text-2xl text-base-content/80 mb-6">
            Your private corner of the internet, built just for you.
          </p>

          {/* Animated Illustration */}
          <DiaryIllustration />

          <p className="text-sm mt-4 text-base-content/60 max-w-sm mx-auto lg:mx-0">
            It's simple, private, and ready whenever inspiration strikes. Track
            your progress, or just jot down the moments of your day without any
            pressure.
          </p>
        </div>

        {/* RIGHT COLUMN: Value Proposition and CTA */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-12">
          <div className="card w-full bg-base-100 shadow-2xl p-6 md:p-10 border border-base-300">
            <h2 className="card-title text-3xl text-primary mb-4 self-center lg:self-start mb-8">
              Welcome to ma lil diary
            </h2>
            <div className="space-y-4 mb-8 text-transparent bg-gradient-to-br from-primary via-second to-info bg-clip-text text-justify">
              <p>
                It's simple, private, and ready whenever inspiration strikes.
                Track your progress, or just jot down the moments of your day
                without any pressure.
              </p>
              <div className="text-transparent bg-gradient-to-tl from-primary via-second to-info bg-clip-text">
                <p className="text-lg text-info mt-8 font-light">
                  Take a deep breath, and let's start documenting your journey
                  with ma lil diary - THE safe place to write and share.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="flex justify-center">
              <div className="card-actions lg:justify-start ">
                <Link
                  to="/newentry"
                  className="btn btn-primary btn-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 "
                >
                  ✍️ Add an Entry Now
                </Link>
              </div>
            </div>

            {/* Secondary Feature Highlight */}
            <div className="mt-8 text-sm text-info/80 flex items-center justify-center lg:justify-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <span className="font-medium">
                All data is stored securely in your browser's LocalStorage.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Footer Breadcrumbs --- */}
      <div className="text-xs opacity-50 mt-20 text-center">
        Home / Overview
      </div>
    </div>
  );
}
