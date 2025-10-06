import React, { createContext, useState, useEffect, useCallback } from "react";

// key to store entries in localStorage
const STORAGE_KEY = "myLilDiary";

// utility functions
const loadEntries = () => {
  // ... (loadEntries function remains the same)
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      // Use mock data for first-time load if necessary, or just return an empty array // REFAC: mock data for first-time load / remove, refac
      // Returning empty array for pure local storage implementation
      return [];
    }
    // Parse the JSON string into an array.
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return [];
  }
};

const saveEntries = (entries) => {
  // ... (saveEntries function remains the same)
  try {
    const serializedState = JSON.stringify(entries);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};

export const EntriesContext = createContext({
  entries: [],
  addEntry: () => {}, // Placeholder function
  updateEntry: () => {}, // NEW Placeholder function
});

export const EntriesProvider = ({ children }) => {
  // Initialize state from localStorage
  const [entries, setEntries] = useState(() => loadEntries());

  // Effect to save entries to localStorage whenever the 'entries' state changes
  useEffect(() => {
    saveEntries(entries);
  }, [entries]);

  // Function to add a new entry (passed to NewEntry.jsx)
  const addEntry = useCallback((newEntryData) => {
    // ... (addEntry function remains the same)
    setEntries((prevEntries) => {
      const newEntry = {
        ...newEntryData,
        id: Date.now() + Math.random(), // Simple unique ID / REFAC
        date: new Date().toISOString().split("T")[0], // YYYY-MM-DD format
      };

      return [newEntry, ...prevEntries];
    });
  }, []);

  // NEW FUNCTION: To update an existing entry
  const updateEntry = useCallback((id, updatedData) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, ...updatedData } : entry
      )
    );
  }, []);

  // Pass state and functions through the context value
  const contextValue = {
    entries,
    addEntry,
    updateEntry, // Include the new function
  };

  return (
    <EntriesContext.Provider value={contextValue}>
      {children}
    </EntriesContext.Provider>
  );
};
