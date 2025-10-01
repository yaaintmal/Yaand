import { useState } from "react";

// Mock component for a single diary entry item
const EntryItem = ({ title, date, isGoodDay, index }) => {
  // using us format to display the day item in bigger font / whole app is in english tho'
  const dateFormatted = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  const year = new Date(date).getFullYear();

  // State for internal entry liking (for demo purposes)
  const [liked, setLiked] = useState(isGoodDay);

  // Determine the mood icon and color based on the entry's mood (isGoodDay/liked)
  const moodIcon = liked ? (
    <span className="text-xl text-error transition-transform duration-300 hover:scale-125">
      ❤️
    </span>
  ) : (
    <span className="text-xl text-base-content/60 transition-transform duration-300 hover:scale-125">
      😔
    </span>
  );

  return (
    // Replaced 'bg-white/70' with 'bg-base-100/70' for theme adaptation
    <li className="p-4 bg-base-100/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg blur-[2.5px] hover:blur-none transition-all duration-450 flex items-start justify-between border-l-4 border-primary/50 mb-3">
      {/* Date and Index (Left Side) */}
      {/* Used base-content for text and primary/info for gradients */}
      <div className="flex flex-col items-center justify-center w-16 h-full text-center pr-4 border-r border-base-300 mr-4">
        <div className="text-sm font-semibold uppercase text-transparent tracking-wider bg-gradient-to-b from-base-content/60 to-info bg-clip-text">
          {dateFormatted.split(" ")[0].substring(0, 3)}
        </div>
        <div className="text-3xl font-bold text-primary text-transparent tracking-wider bg-gradient-to-b from-base-content to-primary bg-clip-text">
          {dateFormatted.split(" ")[1]}
        </div>
        <div className="text-xs text-transparent tracking-wider bg-gradient-to-b from-base-content/50 to-base-content/20 bg-clip-text">
          {year}
        </div>
      </div>

      {/* Title and Detail (Center) */}
      <div className="flex-grow">
        {/* Title uses base-content and primary on hover */}
        <div className="text-lg font-bold text-base-content hover:text-primary transition-colors cursor-pointer leading-tight text-transparent tracking-wider bg-gradient-to-tl from-primary to-info bg-clip-text">
          {title}
        </div>
        {/* Detail uses secondary color (subtle contrast) */}
        <div className="text-xs mt-1 text-secondary/70">Entry #{index + 1}</div>
      </div>

      {/* Actions and Mood (Right Side) */}
      <div className="flex flex-col items-end space-y-2 ml-4">
        {/* Mood/Like Toggle - Replicating the 'Was a good day' switch feel */}
        <button
          className="btn btn-ghost btn-circle btn-sm p-0"
          onClick={() => setLiked(!liked)}
          aria-label={liked ? "Mark as bad day" : "Mark as good day"}
        >
          {moodIcon}
        </button>

        {/* Read Button */}
        <button className="btn btn-sm btn-outline btn-primary/70 hover:bg-primary hover:text-primary-content transition-colors text-xs font-medium">
          Read
        </button>
      </div>
    </li>
  );
};

// **Timeline Icon Component** (Reused from DaisyUI example)
const TimelineIcon = ({ isGoodDay }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`h-5 w-5 ${isGoodDay ? "text-error" : "text-primary/80"}`} // Used 80% opacity on primary for less intense color
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Entries() {
  // Use a more descriptive name for 'isLiked' in the mock data
  const mockEntries = [
    {
      id: 1,
      title: "Day 1: back to reset... a new beginning",
      date: "2025-01-01",
      isGoodDay: false,
    },
    {
      id: 2,
      title: "A Great Movie Night with Popcorn and Friends",
      date: "2025-02-01",
      isGoodDay: true,
    },
    {
      id: 3,
      title: "The Weirdest Dream Ever, About Flying Pizzas",
      date: "2025-03-04",
      isGoodDay: true,
    },
    {
      id: 4,
      title: "Finally Finished that Challenging School Project!",
      date: "2025-05-06",
      isGoodDay: true,
    },
    {
      id: 5,
      title: "A Rainy Afternoon and Cozy Reading Time",
      date: "2025-08-09",
      isGoodDay: false,
    },
    {
      id: 6,
      title: "Started to use DaisyUI and React... kinda each day... is fun :3",
      date: "2025-09-28",
      isGoodDay: true,
    },
  ];

  const [filter, setFilter] = useState("all"); // all, month, week, liked

  const handleFilterClick = (filter) => {
    setFilter(filter);
  };

  const filterButtonClasses = (currentFilter) =>
    `btn btn-sm text-xs md:text-sm shadow-md transition-all duration-300 ${
      filter === currentFilter
        ? "btn-primary"
        : "btn-ghost border border-base-300 hover:bg-base-300/50 text-base-content/80" // Changed neutral-content to base-content
    }`;

  // Filter entries
  const filteredEntries = mockEntries.filter((entry) => {
    if (filter === "liked") return entry.isGoodDay;
    // Add more filtering logic here (week, month, etc.)
    return true;
  });

  // Sort entries by date (ascending) for the timeline visualization
  // Create a copy to avoid mutating the original array
  const timelineEntries = [...filteredEntries].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // Sort entries for the list (descending) - Reversing is a quick way to do this
  const listEntries = [...filteredEntries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    // Set default text color to base-content
    <div className="p-4 md:p-8 text-base-content">
      <h2 className="text-3xl font-serif text-primary mb-8 border-b border-primary/20 pb-2">
        my personal timeline
      </h2>
      <p className="text-right text-info text-xs mb-6 uppercase font-light">
        time to remember your thoughts, ideas, and feelings
      </p>

      {/* --- Filter and Sort Section - Clean Capsule Style --- */}
      {/* Changed bg-info/33 to bg-base-300/60 for better neutrality */}
      <div className="flex flex-wrap gap-2 justify-center p-4 bg-base-300/60 rounded-2xl shadow-inner mt-4 mb-8">
        <span className="text-sm font-semibold mr-2 self-center text-accent hidden sm:inline">
          Browse by
        </span>
        <button
          className={filterButtonClasses("all")}
          onClick={() => handleFilterClick("all")}
        >
          All Entries
        </button>
        <button
          className={filterButtonClasses("week")}
          onClick={() => handleFilterClick("week")}
        >
          This Week
        </button>
        <button
          className={filterButtonClasses("month")}
          onClick={() => handleFilterClick("month")}
        >
          This Month
        </button>
        <button
          className={filterButtonClasses("liked")}
          onClick={() => handleFilterClick("liked")}
        >
          Good Days 🎉
        </button>
      </div>

      {/* --- Dynamic Timeline Section --- */}
      <ul className="timeline timeline-vertical">
        {timelineEntries.map((entry, index) => {
          const date = new Date(entry.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
          const isStart = index % 2 === 0; // Alternate between timeline-start and timeline-end

          return (
            <li key={`timeline-${entry.id}`}>
              {/* Only show <hr /> if it's not the first item */}
              {index > 0 && <hr className="bg-base-300" />}

              <div
                className={
                  isStart
                    ? "timeline-start timeline-box bg-base-200/70 shadow-md text-sm font-medium p-3 hover:bg-base-300 transition-colors cursor-pointer" // Used base-200/70 for better contrast against page background (base-100)
                    : "timeline-end timeline-box bg-base-200/70 shadow-md text-sm font-medium p-3 hover:bg-base-300 transition-colors cursor-pointer"
                }
              >
                {/* Text is now base-content by default */}
                <span className="font-bold text-primary mr-1">
                  {date}:
                </span>{" "}
                {entry.title}
              </div>

              <div className="timeline-middle">
                <TimelineIcon isGoodDay={entry.isGoodDay} />
              </div>

              {/* Only show <hr /> if it's not the last item */}
              {index < timelineEntries.length - 1 && (
                <hr className="bg-base-300" />
              )}
            </li>
          );
        })}
        {/* Optional: Add a 'Today' marker at the end if the list is not empty */}
        {timelineEntries.length > 0 && (
          <li>
            <hr className="bg-base-300" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-accent animate-pulse" // Accent is usually high-contrast
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
            <div className="timeline-end text-sm text-accent font-semibold p-3">
              Today
            </div>
          </li>
        )}
      </ul>

      {/* --- Entries List Container --- */}
      <div className="min-h-[50vh] mt-8">
        {/* Text changed from 'text-info/69' to base-content/70 for better contrast */}
        <div className="p-4 pb-2 text-xs uppercase font-bold tracking-wider text-base-content/70 border-b border-base-300 mb-4">
          Showing {listEntries.length} Recorded Memories
        </div>

        <ul className="space-y-4">
          {listEntries.length > 0 ? (
            listEntries.map((entry, index) => (
              <EntryItem
                key={entry.id}
                title={entry.title}
                date={entry.date}
                isGoodDay={entry.isGoodDay} // Passing the mood data
                index={index} // Note: Index here is for display count, not chronological order
              />
            ))
          ) : (
            <div className="text-center text-base-content/70 py-10 bg-base-200/50 rounded-lg">
              No entries match the filter criteria. Time to write one!
            </div>
          )}
        </ul>
      </div>

      {/* Breadcrumbs simplified and styled */}
      <div className="text-xs text-base-content opacity-50 mt-8 text-center">
        Entries / Overview
      </div>
    </div>
  );
}
