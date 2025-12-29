import { useEffect, useState } from "react";
import { getCategory } from "../../services/api.js";
export default function Ingredient() {
  const [Ingredient, setIngredient] = useState([]);
  useEffect(() => {
    const fetchIngredient = async () => {
      const data = await getCategory();
      setIngredient(data.categories);
    };
    fetchIngredient();
  }, []);
  return (
    <>
  <div className="cards w-11/12 m-auto mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {Ingredient.map((cat) => (
    <div
      className="card group p-4 bg-black/60 backdrop-blur-sm
      hover:bg-amber-400
      transition-all duration-500 ease-in-out"
      key={cat.idCategory}
    >
      <h2 className="mb-4 lg:text-2xl text-center text-amber-400
        group-hover:text-black
        transition-colors duration-300">
        {cat.strCategory}
      </h2>

      <p className="line-clamp-5 text-white
        group-hover:text-black
        transition-colors duration-300">
        {cat.strCategoryDescription}
      </p>
    </div>
  ))}
</div>

    </>
  );
}
