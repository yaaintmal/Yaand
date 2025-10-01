import { Link } from "react-router";

export default function Home() {
  return (
    // Adopted padding from Entries.jsx
    // Use base-content for all text by default
    <div className="p-4 text-base-content">
      {/* Adopted heading style from Entries.jsx */}
      <h2 className="text-3xl font-serif text-primary mb-8 border-b border-primary/20 pb-2">
        Welcome to ma lil diary
      </h2>
      <p className="text-right text-info text-xs mb-6 uppercase font-light">
        start your personal own digital journal
      </p>

      {/* Main content container, adopting min-height convention */}
      <div className="">
        {/* Use bg-base-200/50 for a background that contrasts well with base-100 */}
        <div className="hero bg-base-200/50 rounded-xl p-6 shadow-xl border border-base-300">
          <div className="hero-content flex-col w-full">
            {/* Heading should use primary color */}
            <h2 className="text-5xl font-bold text-center mb-4 text-transparent bg-gradient-to-br from-primary via-second to-info bg-clip-text">
              ma lil diary
            </h2>

            {/* --- Text Block 1 (Above Image) --- */}
            {/* Text should use base-content for readability */}
            <p className="text-sm text-center max-w-xl mx-auto py-3 px-4 text-base-content">
              Welcome to ma lil diary, your **personal own digital journal**
              <br /> <br /> This little space, built using React, is designed
              just for you. Think of it as a quiet corner of the internet where
              you can gather your thoughts, track your progress, or just jot
              down the moments of your day without any pressure.
            </p>
            {/* --- Image Section (Centered, Dynamic Effect) --- */}
            <div className="flex justify-center my-6">
              {/* <img
                // src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                src="./diary.jpg"
                className="max-w-xs md:max-w-sm rounded-lg shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:shadow-primary/50 hover:rotate-1" // Dynamic Effect: Slightly scales up and rotates on hover
                alt="A cozy corner for journaling"
              /> */}
              <div class="container max-w-xs md:max-w-sm   transition-all duration-700 hover:scale-[1.03] hover:shadow-primary/50 hover:rotate-1">
                <svg
                  viewBox="0 0 350 400"
                  width="300"
                  height="343"
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
            <p className="text-sm text-center max-w-xl mx-auto py-2 px-4 text-base-content">
              It's simple, private, and ready whenever inspiration strikes.
              <br />
              Take a deep breath, and let's start **documenting your journey**
              with ma lil diary - a safe place to write and share your thoughts.
            </p>

            {/* --- Action Button --- */}
            <div className="mt-6 text-center">
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
      <div className="text-xs text-base-content opacity-50 mt-8 text-center">
        Home / Overview
      </div>
    </div>
  );
}
