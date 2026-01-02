import { useEffect, useState } from "react";

export default function Typewriter() {
  const fullText =
    "Welcome! Choose a category to discover tasty recipes.";

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= fullText.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-yellow-500 font-semibold text-center lg:my-6 sm:my-4">
      {fullText.slice(0, index)}
    </h1>
  );
}


