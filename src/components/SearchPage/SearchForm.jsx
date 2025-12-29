import { useEffect, useState } from "react";
import { useMealStore } from "../../stores/counter.js";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchMeals, setMeals } = useMealStore();

  useEffect(() => {
    if (searchQuery.trim().length >= 1) {
      searchMeals(searchQuery);
    } else {
      setMeals([]);
    }
  }, [searchQuery, searchMeals, setMeals]);

  return (
    <div
      className="
        flex items-center relative
        w-1/2 mx-auto
        bg-black/60 backdrop-blur-sm
        rounded-full
        mt-12 mb-12

        max-sm:w-11/12 max-sm:mt-10 max-sm:mb-4
        sm:max-md:w-11/12 sm:max-md:mt-6 sm:max-md:mb-4
        md:max-lg:w-3/5
      "
    >
      <input
        type="text"
        placeholder="Search for meal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="
          w-full
          bg-transparent
          text-white
          border-none outline-none

          px-8 py-4 text-[18px]
          max-sm:px-4 max-sm:py-2 max-sm:text-[14px]
          sm:max-md:px-6 sm:max-md:py-3 sm:max-md:text-[16px]
        "
      />
    </div>
  );
}

