import { BrowserRouter, Routes, Route } from "react-router-dom";
import AreaView from "../views/AreaView";
import CategoryView from "../views/CategoryView";
import IngredientView from "../views/IngredientView";
import MealDetails from "../views/MealDetails";
import MealsByArea from "../views/MealsByArea";
import MealsByCategory from "../views/MealsByCategory";
import SearchView from "../views/SearchView";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/area" element={<AreaView />} />
        <Route path="/category" element={<CategoryView />} />
        <Route path="/ingredient" element={<IngredientView />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/area/:name" element={<MealsByArea />} />
        <Route path="/category/:category" element={<MealsByCategory />} />
        <Route path="/search" element={<SearchView />} />
      </Routes>
    </>
  );
}
