import { useMealStore } from "../../stores/counter";

export default function Results() {
  const { loading, error, searchTerm, meals } = useMealStore();

  return (
    <div className="results mt-4">
      {loading && (
        <p
          className="
      w-fit mx-auto mb-4
      px-6 py-3
      bg-black/60 backdrop-blur-sm
      text-yellow-400
      rounded-full
      text-sm lg:text-base
      animate-pulse
    "
        >
          Searching...
        </p>
      )}

      {error && (
        <p
          className="
      w-fit mx-auto mb-4
      px-6 py-3
      bg-red-500/20 backdrop-blur-sm
      text-red-400
      border border-red-400/40
      rounded-full
      text-sm lg:text-base
    "
        >
          ⚠️ {error}
        </p>
      )}

      {searchTerm && !loading && meals.length === 0 && (
        <p
          className="
      w-fit mx-auto mb-6
      px-6 py-3
      bg-black/60 backdrop-blur-sm
      text-gray-300
      border border-yellow-500/40
      rounded-full
      text-sm lg:text-base
    "
        >
          No matching meals.
        </p>
      )}

      {!loading && meals.length > 0 && (
        <div className="cards w-11/12 mx-auto mb-10  gap-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                <button className="bg-yellow-500 lg:p-3 p-2 rounded-md lg:text-base text-md  text-black border-none cursor-pointer group-hover:bg-black group-hover:text-white">
                  Show details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
