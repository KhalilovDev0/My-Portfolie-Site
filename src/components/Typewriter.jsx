import { useState, useEffect } from "react";

function Typewriter({ words, speed = 100, delay = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    const timerSpeed = isDeleting ? speed / 2 : speed;

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));

        if (currentText === fullWord) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, timerSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return (
    <span className="text-cyan-400 border-r-2 border-cyan-400 animate-pulse pl-1">
      {currentText}
    </span>
  );
}

export default Typewriter;
