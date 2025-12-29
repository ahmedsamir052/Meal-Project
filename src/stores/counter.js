import { create } from "zustand";

export const useMealStore = create((set) => ({
  meals: [],
  loading: false,
  error: null,
  searchTerm: "",

  searchMeals: async (query) => {
    set({
      searchTerm: query,
      loading: true,
      error: null,
    });

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();

      set({
        meals: data.meals || [],
      });
    } catch (err) {
      set({
        error: "An error occurred during the search.",
      });
    } finally {
      set({
        loading: false,
      });
    }
  },

  setMeals: (meals) => set({ meals }),
}));
