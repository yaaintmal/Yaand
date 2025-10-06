import { useState, useContext, useEffect } from "react";
import { EntriesContext } from "../context/EntriesContext";

// helperfunction for slug

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim() // Entferne Leerzeichen am Anfang und Ende
    .replace(/\s+/g, "-") // Ersetze Leerzeichen durch Bindestriche
    .replace(/[^\w\-]+/g, "") // Entferne alle nicht-Wortzeichen außer Bindestriche
    .replace(/\-\-+/g, "-"); // Ersetze mehrfache Bindestriche durch einen einzelnen
};

export default function NewEntry() {
  // Use context to get the function to save new entries
  const { addEntry } = useContext(EntriesContext);

  // State for form fields
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isGoodDay, setIsGoodDay] = useState(true);
  const [impression, setImpression] = useState("");
  const [isSaved, setIsSaved] = useState(false); // To show success message

  useEffect(() => {
    // Generiere den Slug immer neu, wenn sich der Titel ändert
    setSlug(slugify(title));
  }, [title]); // Abhängigkeit: Läuft bei jeder Änderung von 'title'

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      title,
      slug, // 'slug' wird jetzt automatisch aktualisiert
      isGoodDay,
      impression,
    };

    addEntry(newEntry);

    setTitle("");
    setSlug(""); // important for slug generation
    setImpression("");
    setIsGoodDay(true);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-serif text-primary mb-8 border-b border-primary/20 pb-2">
        Write a New Entry
      </h2>

      <div className="min-h-[50vh]">
        <p className="text-right text-info text-xs mb-6 uppercase font-light">
          Got a new thought, idea, or feeling? Write it down right now!
        </p>

        {isSaved && (
          <div
            role="alert"
            className="alert alert-success max-w-2xl mx-auto mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Entry saved successfully!</span>
          </div>
        )}

        {/* Form Container for New Entry */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-base-300 mx-auto max-w-2xl"
        >
          <fieldset className="fieldset text-right">
            <legend className="text-xl font-bold text-primary mb-4">
              Add an Entry
            </legend>
            <label className="label text-left font-medium">Title</label>
            <input
              type="text"
              className="input input-bordered w-full mb-3"
              placeholder="story in a nutshell"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label className="label text-left font-medium">Slug</label>
            <p className="text-xs text-left text-accent opacity-69">{slug}</p>
            {/* <input
              type="text"
              className="input input-xs input-bordered w-full mb-6"
              placeholder="any-awesome-slug"
              value={slug}
              // onChange-Handler removed as it's now read-only
              readOnly
              disabled // our slug is now read-only
            /> */}
          </fieldset>

          <fieldset className="fieldset mt-6">
            <legend className="text-xl font-bold text-primary mb-4">
              Impression of the Day
            </legend>
            <label className="label justify-start space-x-3 cursor-pointer mb-4">
              <input
                type="checkbox"
                checked={isGoodDay}
                onChange={() => setIsGoodDay(!isGoodDay)}
                className="toggle toggle-primary"
              />
              <span className="label-text">It was a good day 🎉</span>
            </label>
            <textarea
              placeholder="share your thoughts"
              className="textarea textarea-bordered textarea-accent w-full h-48"
              value={impression}
              onChange={(e) => setImpression(e.target.value)}
              required
            ></textarea>
          </fieldset>

          <div className="flex justify-end mt-6">
            <button type="submit" className="btn btn-primary btn-lg shadow-lg">
              Save Entry
            </button>
          </div>
        </form>
      </div>

      <div className="text-xs opacity-50 mt-8 text-center">
        Entries / New Entry
      </div>
    </div>
  );
}
