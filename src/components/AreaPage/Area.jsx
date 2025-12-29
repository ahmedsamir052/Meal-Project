import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAreas } from "../../services/api.js";

export default function Area() {
  const [areas, setAreas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAreas = async () => {
      const data = await getAreas();
      setAreas(data.meals);
    };

    fetchAreas();
  }, []);

  const goToArea = (area) => {
    navigate(`/area/${area}`);
  };

  return (
    <>
      <div className="cards w-11/12 m-auto mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {areas.map((area) => (
          <div
            key={area.strArea}
            className="country group py-5 text-amber-400 rounded-xl text-center
        bg-black/60 backdrop-blur-sm hover:text-black hover:bg-amber-400
        transition-colors duration-[500ms] ease-in-out"
            onClick={() => goToArea(area.strArea)}
          >
            <i className="fa-solid fa-globe pb-2 text-3xl"></i>
            <h1 className="xl:text-2xl">{area.strArea}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
