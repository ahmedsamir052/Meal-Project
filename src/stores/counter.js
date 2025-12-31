import { create } from "zustand";

interface MealStore {
  meals: any[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  searchMeals: (query: string) => Promise<void>;
  setMeals: (meals: any[]) => void;
}

export const useMealStore = create<MealStore>((set) => ({
  meals: [],
  loading: false,
  error: null,
  searchTerm: "",

  searchMeals: async (query: string) => {
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
    } catch {
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
