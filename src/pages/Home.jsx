import { Link } from "react-router";

export default function Home() {
  return (
    // Adopted padding from Entries.jsx
    // **Refinement for Mobile:** Switched to `p-3 sm:p-4` for tighter mobile padding.
    // Use base-content for all text by default
    <div className="p-3 sm:p-4 text-base-content">
      {/* Adopted heading style from Entries.jsx */}
      {/* **Refinement for Mobile:** Reduced heading size on small screens (`text-2xl sm:text-3xl`). */}
      <h2 className="text-2xl sm:text-3xl font-serif text-primary mb-6 sm:mb-8 border-b border-primary/20 pb-2">
        Welcome to ma lil diary
      </h2>
      <p className="text-right text-info text-xs mb-4 sm:mb-6 uppercase font-light">
        start your personal own digital journal
      </p>

      {/* Main content container, adopting min-height convention */}
      <div className="">
        {/* Use bg-base-200/50 for a background that contrasts well with base-100 */}
        {/* **Refinement for Mobile:** Reduced padding on small screens (`p-4 sm:p-6`). */}
        <div className="hero bg-base-200/50 rounded-xl p-4 sm:p-6 shadow-xl border border-base-300">
          <div className="hero-content flex-col w-full">
            {/* Heading should use primary color */}
            {/* **Refinement for Mobile:** Reduced heading size on small screens (`text-4xl sm:text-5xl`). */}
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-transparent bg-gradient-to-br from-primary via-second to-info bg-clip-text">
              ma lil diary
            </h2>

            {/* --- Text Block 1 (Above Image) --- */}
            {/* Text should use base-content for readability */}
            {/* **Refinement for Mobile:** Reduced vertical padding/margins (`py-2 px-0 sm:py-3 sm:px-4`). */}
            <p className="text-sm text-center max-w-xl mx-auto py-2 px-0 sm:py-3 sm:px-4 text-base-content">
              Welcome to ma lil diary, your **personal own digital journal**
              <br /> <br /> This little space, built using React, is designed
              just for you. Think of it as a quiet corner of the internet where
              you can gather your thoughts, track your progress, or just jot
              down the moments of your day without any pressure.
            </p>
            {/* --- Image Section (Centered, Dynamic Effect) --- */}
            {/* **Refinement for Mobile:** Reduced vertical margin (`my-4 sm:my-6`). */}
            <div className="flex justify-center my-4 sm:my-6">
              {/* Added `w-full` and `h-auto` to the container and set a smaller max width for all screens */}
              <div class="container max-w-[250px] transition-all duration-700 hover:scale-[1.03] hover:shadow-primary/50 hover:rotate-1 w-full h-auto">
                <svg
                  // **Refinement for Mobile:** Set `width` and `height` to 100% to fill the max-width container
                  viewBox="0 0 350 400"
                  width="100%"
                  height="100%"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Diary/Journal Graphic</title>

                  <g transform="rotate(-5 175 200)">
                    <rect
                      x="55"
                      y="55"
                      width="230"
                      height="280"
                      rx="10"
                      fill="#FFFFFF"
                    />

                    <rect
                      x="50"
                      y="50"
                      width="20"
                      height="290"
                      rx="5"
                      fill="#4C1D95"
                    />

                    <rect
                      x="50"
                      y="50"
                      width="240"
                      height="290"
                      rx="10"
                      fill="#6D28D9"
                    />

                    <rect
                      x="70"
                      y="70"
                      width="210"
                      height="250"
                      rx="8"
                      fill="#8B5CF6"
                    />

                    <g fill="#D5BBFF">
                      <rect x="85" y="90" width="180" height="6" rx="3" />
                      <rect x="85" y="110" width="160" height="6" rx="3" />
                      <rect x="85" y="130" width="175" height="6" rx="3" />
                      <rect x="85" y="150" width="185" height="6" rx="3" />
                      <rect x="85" y="170" width="150" height="6" rx="3" />
                    </g>

                    <g
                      transform="translate(220, 270) scale(1.5)"
                      fill="#FACC15"
                    >
                      <path d="M9.702 14.397L13 16.5L12.012 12.87L15.012 10.37L11.397 10.053L9.702 6.5L8.007 10.053L4.392 10.37L7.392 12.87L6.404 16.5L9.702 14.397Z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            {/* --- Text Block 2 (Below Image, creating the "flow around" effect) --- */}
            {/* **Refinement for Mobile:** Reduced vertical padding/margins (`py-2 px-0 sm:py-2 sm:px-4`). */}
            <p className="text-sm text-center max-w-xl mx-auto py-2 px-0 sm:py-2 sm:px-4 text-base-content">
              It's simple, private, and ready whenever inspiration strikes.
              <br />
              Take a deep breath, and let's start **documenting your journey**
              with ma lil diary - a safe place to write and share your thoughts.
            </p>

            {/* --- Action Button --- */}
            {/* **Refinement for Mobile:** Reduced top margin (`mt-4 sm:mt-6`). */}
            <div className="mt-4 sm:mt-6 text-center">
              <Link to="/newentry">
                <button className="btn btn-primary shadow-lg max-w-fit">
                  add an entry
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Adopted simplified breadcrumbs style from Entries.jsx */}
      {/* Use base-content/opacity for text that fades */}
      {/* **Refinement for Mobile:** Reduced top margin (`mt-6 sm:mt-8`). */}
      <div className="text-xs text-base-content opacity-50 mt-6 sm:mt-8 text-center">
        Home / Overview
      </div>
    </div>
  );
}
