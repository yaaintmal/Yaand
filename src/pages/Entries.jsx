import { useState, useMemo } from "react";

// --- Date Utility Functions ---

/**
 * Calculates the start date of the current week (Sunday).
 * @returns {Date} The date object for the start of the week.
 */
const getStartOfWeek = () => {
  const now = new Date();
  const day = now.getDay(); // 0 for Sunday, 6 for Saturday
  const diff = now.getDate() - day; // Adjust date to Sunday
  const start = new Date(now.setDate(diff));
  start.setHours(0, 0, 0, 0); // Set time to start of day
  return start;
};

/**
 * Calculates the start date of the last week (Sunday).
 * @returns {Date} The date object for the start of the last week.
 */
const getStartOfLastWeek = () => {
  const startOfThisWeek = getStartOfWeek();
  // Subtract 7 days (7 * 24 * 60 * 60 * 1000 milliseconds)
  const lastWeekTimestamp = startOfThisWeek.getTime() - 7 * 24 * 60 * 60 * 1000;
  return new Date(lastWeekTimestamp);
};

/**
 * Calculates the start date of the current month.
 * @returns {Date} The date object for the first day of the month.
 */
const getStartOfMonth = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  start.setHours(0, 0, 0, 0); // Set time to start of day
  return start;
};

/**
 * Calculates the start date of the last month.
 * @returns {Date} The date object for the first day of the last month.
 */
const getStartOfLastMonth = () => {
  const now = new Date();
  // Go to the first day of the current month, then subtract one month
  const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  start.setHours(0, 0, 0, 0); // Set time to start of day
  return start;
};

// Mock component for a single diary entry item (NO CHANGES)
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

// **Timeline Icon Component** (NO CHANGES)
const TimelineIcon = ({ isGoodDay }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`h-5 w-5 ${isGoodDay ? "text-error" : "text-primary/80"}`}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Entries() {
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
    {
      id: 7,
      title: "BVB 🖤💛 owned :3 in CL",
      date: "2025-10-01",
      isGoodDay: true,
    },
  ];

  // State is an array to hold multiple active filters (e.g., ['liked', 'lastWeek'])
  const [activeFilters, setActiveFilters] = useState([]);

  // Handler to toggle filters
  const handleFilterClick = (filterName) => {
    setActiveFilters((prevFilters) => {
      // If the filter is 'all', always set the array to empty, effectively selecting 'all'
      if (filterName === "all") {
        return [];
      }
      // If the filter is already present, remove it
      if (prevFilters.includes(filterName)) {
        return prevFilters.filter((f) => f !== filterName);
      }
      // Otherwise, add it
      return [...prevFilters, filterName];
    });
  };

  // Update button styling to check if the filter is present in the array
  const filterButtonClasses = (currentFilter) => {
    // If no filters are active, 'all' is implicitly selected
    const isActive =
      currentFilter === "all"
        ? activeFilters.length === 0
        : activeFilters.includes(currentFilter);

    return `btn btn-sm text-xs md:text-sm shadow-md transition-all duration-300 ${
      isActive
        ? "btn-primary"
        : "btn-ghost border border-base-300 hover:bg-base-300/50 text-base-content/80"
    }`;
  };

  // REFACTORED FILTERING LOGIC
  const filteredEntries = useMemo(() => {
    // If no filters are active, return all entries
    if (activeFilters.length === 0) {
      return mockEntries.map((entry) => ({
        ...entry,
        timestamp: new Date(entry.date).getTime(),
      }));
    }

    const entriesWithTimestamp = mockEntries.map((entry) => ({
      ...entry,
      timestamp: new Date(entry.date).getTime(),
    }));

    // Get time boundaries
    const todayTimestamp = new Date().getTime();

    // Boundaries for "This Week/Month" (end boundary for "Last Week/Month")
    const startOfThisWeekTimestamp = getStartOfWeek().getTime();
    const startOfThisMonthTimestamp = getStartOfMonth().getTime();

    // Boundaries for "Last Week/Month"
    const startOfLastWeekTimestamp = getStartOfLastWeek().getTime();
    const startOfLastMonthTimestamp = getStartOfLastMonth().getTime();

    return entriesWithTimestamp.filter((entry) => {
      // An entry must pass ALL active filters (AND logic)
      return activeFilters.every((filter) => {
        switch (filter) {
          case "liked":
            return entry.isGoodDay;

          case "week":
            // Entries from start of this week up to now
            return (
              entry.timestamp >= startOfThisWeekTimestamp &&
              entry.timestamp <= todayTimestamp
            );

          case "lastWeek":
            // Entries from start of last week up to start of this week (non-inclusive)
            return (
              entry.timestamp >= startOfLastWeekTimestamp &&
              entry.timestamp < startOfThisWeekTimestamp
            );

          case "month":
            // Entries from start of this month up to now
            return (
              entry.timestamp >= startOfThisMonthTimestamp &&
              entry.timestamp <= todayTimestamp
            );

          case "lastMonth":
            // Entries from start of last month up to start of this month (non-inclusive)
            return (
              entry.timestamp >= startOfLastMonthTimestamp &&
              entry.timestamp < startOfThisMonthTimestamp
            );

          default:
            return true;
        }
      });
    });
  }, [activeFilters, mockEntries]);

  // Sort entries by date (ascending) for the timeline visualization
  const timelineEntries = [...filteredEntries].sort(
    (a, b) => a.timestamp - b.timestamp
  );

  // Sort entries for the list (descending)
  const listEntries = [...filteredEntries].sort(
    (a, b) => b.timestamp - a.timestamp
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
      <div className="flex flex-wrap gap-2 justify-center p-4 bg-base-300/60 rounded-2xl shadow-inner mt-4 mb-8">
        <span className="text-sm font-semibold mr-2 self-center text-accent hidden sm:inline">
          Filter by
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
          className={filterButtonClasses("lastWeek")}
          onClick={() => handleFilterClick("lastWeek")}
        >
          Last Week
        </button>
        <button
          className={filterButtonClasses("month")}
          onClick={() => handleFilterClick("month")}
        >
          This Month
        </button>
        <button
          className={filterButtonClasses("lastMonth")}
          onClick={() => handleFilterClick("lastMonth")}
        >
          Last Month
        </button>
        <button
          className={filterButtonClasses("liked")}
          onClick={() => handleFilterClick("liked")}
        >
          Good Days 🎉
        </button>
      </div>
      {/* --- END Filter Section --- */}

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
                    ? "timeline-start timeline-box bg-base-200/70 shadow-md text-sm font-medium p-3 hover:bg-base-300 transition-colors cursor-pointer"
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
                className="h-6 w-6 text-accent animate-pulse"
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
      {/* --- END Dynamic Timeline Section --- */}

      {/* --- Entries List Container --- */}
      <div className="min-h-[50vh] mt-8">
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
                isGoodDay={entry.isGoodDay}
                index={index}
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
