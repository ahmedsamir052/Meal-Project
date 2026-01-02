import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMealCategory } from "../services/api";

export default function CategoryMeals() {
  const [meals, setMeals] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    async function fetchMeals() {
      const data = await getMealCategory(category);
      setMeals(data.meals || []);
    }

    fetchMeals();
  }, [category]);

  return (
    <div className="cards w-11/12 mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {meals.map((meal) => (
        <div
          className="card card group
             bg-black/60 backdrop-blur-sm
             transition-colors duration-[500ms] ease-in-out
             hover:bg-yellow-500"
          key={meal.idMeal}
        >
          <div className="img w-full">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full"
            />
          </div>

          <div className="text p-4">
            <h2 className="mb-4 mt-0 lg:text-2xl text-lg text-amber-400 group-hover:text-black">
              {meal.strMeal}
            </h2>

            <Link to={`/meal/${meal.idMeal}`}>
              <button className="bg-yellow-500 lg:p-3 p-2 rounded-md lg:text-base text-md  text-black border-none cursor-pointer group-hover:bg-black group-hover:text-white">
                Show details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}