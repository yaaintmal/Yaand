export default function NewEntry() {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-serif text-primary mb-8 border-b border-primary/20 pb-2">
        Write a New Entry
      </h2>

      <div className="min-h-[50vh]">
        <p className="text-right text-info text-xs mb-6 uppercase font-light">
          Got a new thought, idea, or feeling? Write it down right now!
        </p>

        {/* Form Container for New Entry */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-base-300 mx-auto max-w-2xl">
          <fieldset className="fieldset text-right">
            <legend className="text-xl font-bold text-primary mb-4">
              Add an Entry
            </legend>
            <label className="label text-left font-medium">Title</label>
            <input
              type="text"
              className="input input-bordered w-full mb-3"
              placeholder="story in a nutshell"
            />
            <label className="label text-left font-medium">Slug</label>
            <input
              type="text"
              className="input input-bordered w-full mb-6"
              placeholder="any-awesome-slug"
            />
          </fieldset>

          <fieldset className="fieldset mt-6">
            <legend className="text-xl font-bold text-primary mb-4">
              Impression of the Day
            </legend>
            <label className="label justify-start space-x-3 cursor-pointer mb-4">
              <input
                type="checkbox"
                defaultChecked
                className="toggle toggle-primary"
              />
              <span className="label-text">It was a good day 🎉</span>
            </label>
            <textarea
              placeholder="share your thoughts"
              className="textarea textarea-bordered textarea-accent w-full h-48"
            ></textarea>
          </fieldset>

          <div className="flex justify-end mt-6">
            <button className="btn btn-primary btn-lg shadow-lg">
              Save Entry
            </button>
          </div>
        </div>
      </div>

      <div className="text-xs opacity-50 mt-8 text-center">
        Entries / New Entry
      </div>
    </div>
  );
}
