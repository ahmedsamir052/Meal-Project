import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../services/api";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchMeal() {
      const data = await getMealById(id);

      if (data.meals && data.meals.length > 0) {
        const mealData = data.meals[0];
        setMeal(mealData);
        const ingArr = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = mealData[`strIngredient${i}`];
          const measure = mealData[`strMeasure${i}`];

          if (ingredient && ingredient.trim() !== "") {
            ingArr.push({
              name: ingredient,
              quantity: measure,
            });
          }
        }
        setIngredients(ingArr);
      }
    }

    fetchMeal();
  }, [id]);

  if (!meal) {
    return (
      <p className="text-center text-yellow-400 mt-10">
        Loading meal details...
      </p>
    );
  }

  return (
    <div
      className="
  details
  w-11/12 mx-auto mt-10
  grid grid-cols-1
  lg:grid-cols-[31%_68%]
  gap-8
  text-white
"
    >
      <div className="lft-sec">
        <div className="img mb-3">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full rounded-lg"
          />
        </div>
        <h1 className="text-3xl bg-black/60 backdrop-blur-sm py-2 text-amber-400">{meal.strMeal}</h1>
      </div>
      <div className="rgh-sec space-y-6">
        <div className="instruct">
          <h1 className="text-4xl text-amber-400 mb-2">Instructions</h1>
          <p className="leading-relaxed">{meal.strInstructions}</p>
        </div>

        <div className="Ar-Cat flex items-center">
          <h2 className="text-xl text-amber-400 pr-3">Area:</h2>
          <p className="text-xl font-medium">{meal.strArea}</p>
        </div>

        <div className="Ar-Cat flex items-center">
          <h2 className="text-xl text-amber-400 pr-3">Category:</h2>
          <p className="text-xl font-medium">{meal.strCategory}</p>
        </div>

        <div className="ingred">
          <h2 className="text-xl mb-2">Recipes:</h2>
          <div className="ingredient grid grid-cols-4 gap-2">
            {ingredients.map((ing, index) => (
              <div key={index} className="ing bg-black/50 p-2 rounded">
                <span className="quantity text-yellow-400 mr-2">
                  {ing.quantity}
                </span>
                {ing.name}
              </div>
            ))}
          </div>
        </div>

        <div className="links flex gap-4">
          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-500 lg:p-3 p-2 rounded-md lg:text-base text-md  text-black border-none cursor-pointer group-hover:bg-black group-hover:text-white"
            >
              Watch on YouTube
            </a>
          )}

          {meal.strSource && (
            <a
              href={meal.strSource}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-500 lg:p-3 p-2 rounded-md lg:text-base text-md  text-black border-none cursor-pointer group-hover:bg-black group-hover:text-white"
            >
              View Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
