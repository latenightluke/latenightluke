import { useState, useEffect, useCallback } from "react";

export default function useTypedText(word) {
  const letters = word.split("");
  const [currentLetter, setCurrentLetter] = useState(0);
  const [typedText, setTypedText] = useState(letters[currentLetter]);

  console.log({ letters });
  console.log({ typedText });

  useEffect(() => {
    console.log("current letter");

    setTypedText(`${typedText}${letters[currentLetter + 1]}`);
  }, [setTypedText, currentLetter]);

  useEffect(() => {
    console.log("call me");
    setTimeout(() => setCurrentLetter((x) => x++), 500);
  }, [setCurrentLetter, typedText]);

  // const operate = useCallback(() => {
  //   setCurrentLetter(currentLetter++);
  //   setTypedText(`${typedText}${letters[currentLetter]}`);

  //   setTimeout(operate, 1000);
  // }, [letters, currentLetter, typedText]);

  // useEffect(() => {
  //   if (currentLetter <= letters.length) {
  //     operate();
  //   }
  // }, [currentLetter, letters]);

  return typedText;
}
