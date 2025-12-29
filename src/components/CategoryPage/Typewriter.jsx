import { useEffect, useRef, useState } from "react";

export default function Typewriter() {
   const fullText = "Welcome! Choose a category to discover tasty recipes.";
  const [displayText, setDisplayText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    function typeWriter() {
      if (indexRef.current < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(indexRef.current));
        indexRef.current++;
        setTimeout(typeWriter, 100);
      }
    }

    typeWriter();
  }, []);
  
  return (
    <>
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-yellow-500 font-semibold text-center lg:my-6 sm:my-4">{displayText}</h1>
    </>
  );
}
