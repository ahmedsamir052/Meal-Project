import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMealsByArea } from "../services/api";

export default function MealsByArea() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    async function fetchMeals() {
      const data = await getMealsByArea(name);
      setMeals(data.meals || []);
    }

    fetchMeals();
  }, [name]);

  return (
    <div className="cards mt-8 w-11/12 mx-auto mb-10  gap-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="card card group
             bg-black/60 backdrop-blur-sm
             transition-colors duration-[500ms] ease-in-out
             hover:bg-yellow-500"
        >
          <div className="img w-full">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full rounded-md"
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

      {meals.length === 0 && (
        <p className="col-span-full text-center text-gray-400">
          No meals found for this area
        </p>
      )}
    </div>
  );
}