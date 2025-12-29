import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../../services/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategory();
      setCategories(data.categories);
    }
    fetchCategories();
  }, []);

  return (
    <div className="cards w-11/12 mx-auto mb-10  gap-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white">
      {categories.map((cat) => (
        <div
          className="card group p-4
             bg-black/60 backdrop-blur-sm
             transition-colors duration-[500ms] ease-in-out
             hover:bg-yellow-500 hover:text-black"
          key={cat.idCategory}
        >
          <div className="img w-full mb-2 flex justify-center">
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className="lg:w-full sm:w-3/4 md:w-3/4 w-1/2"
            />
          </div>
          <h2 className="mb-4 mt-0 lg:text-2xl text-lg">{cat.strCategory}</h2>
          <Link to={`/category/${cat.strCategory}`}>
            <button className="bg-yellow-500 lg:p-3 p-2 rounded-md lg:text-base text-md  text-black border-none cursor-pointer group-hover:bg-black group-hover:text-white">
              Show this category
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
