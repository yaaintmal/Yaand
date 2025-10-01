import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="font-inter text-accent">
      {/* Main Content Area */}
      <div className="page-theme container mx-auto p-4 max-w-[1280px]">
        <div className="diary-container bg-base-100 rounded-xl p-6 md:p-10 ">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      {/* Floating Action Button (FAB) for Navigation */}
      <div className="fab fab-flower">
        {/* Main interactive area: uses tabIndex for accessibility */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-lg hover:bg-primary-focus"
        >
          {/* Main Icon (Tux) */}
          <img src="./tux-avatar.png" alt="" width="42px" height="42px" />
        </div>

        {/* Main Action button (hidden, required by DaisyUI fab component structure) */}
        <button className="fab-main-action btn btn-circle btn-lg btn-primary">
          {/* A simple, neutral icon for the main button in expanded state */}
          <img
            src="./tux-avatar.png"
            alt="main menu icon"
            width="42px"
            height="42px"
          />
        </button>

        {/* Navigation buttons that show up when FAB is open */}
        <Link
          to="/newentry"
          className="tooltip tooltip-left"
          data-tip="New Entry"
        >
          <button className="btn btn-circle btn-lg btn-secondary">
            <svg
              aria-label="New Entry"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M18 20H4V4h8l5 5v11zM7 7h3v2H7V7zm8 0h3v2h-3V7zm-8 4h10v2H7v-2zm0 4h7v2H7v-2z" />
            </svg>
          </button>
        </Link>

        <Link
          to="/entries"
          className="tooltip tooltip-left"
          data-tip="All Entries"
        >
          <button className="btn btn-circle btn-lg btn-accent">
            <svg
              aria-label="All Entries"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          </button>
        </Link>

        <Link to="/" className="tooltip tooltip-left" data-tip="Home">
          <button className="btn btn-circle btn-lg btn-primary">
            <svg
              aria-label="Home"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M12 3.75l-9 6h2v10h4v-6h6v6h4V9.75h2l-9-6z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
