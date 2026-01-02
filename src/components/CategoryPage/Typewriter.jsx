import { useEffect, useRef, useState } from "react";

export default function Typewriter() {
  const fullText = "Welcome! Choose a category to discover tasty recipes.";
  const [displayText, setDisplayText] = useState("");
  const indexRef = useRef(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let timeoutId;

    function typeWriter() {
      if (indexRef.current < fullText.length) {
        setDisplayText((prev) => prev + fullText[indexRef.current]);
        indexRef.current++;
        timeoutId = setTimeout(typeWriter, 100);
      }
    }

    typeWriter();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-yellow-500 font-semibold text-center lg:my-6 sm:my-4">
      {displayText}
    </h1>
  );
}
