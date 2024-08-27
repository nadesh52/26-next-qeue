import React from "react";

const SearchPage = () => {
  return (
    <section className="rounded-md bg-white p-2 shadow-md">
      <div>
        search
        <input
          type="text"
          className="h-8 rounded-md px-4 outline-none ring-1 ring-slate-500 focus-visible:ring-amber-400"
        />
      </div>
    </section>
  );
};

export default SearchPage;
