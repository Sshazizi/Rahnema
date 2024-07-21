import React, { useEffect, useState } from "react";

import "./index.css";

interface inputWords {
  id: number;
  word: string;
  status: "True" | "False" | "Notcheck";
  isTypingTrue: boolean;
}

function App() {
  const [words, setWords] = useState<inputWords[]>([
    { id: 0, word: "pizza", status: "Notcheck", isTypingTrue: true },
    { id: 1, word: "ali", status: "Notcheck", isTypingTrue: true },
    { id: 2, word: "chips", status: "Notcheck", isTypingTrue: true },
    { id: 3, word: "blue", status: "Notcheck", isTypingTrue: true },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [answers, setAnswers] = useState<inputWords[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const [istyping, setIsTyping] = useState<boolean>(true);
  const checkword = (value: string) => {
    // console.log(value);
    setInputValue(value);
    if (value.includes(" ")) {
      const wordIsOk = words[counter].word === value.trimEnd();

      const updatedWords = [...words];

      updatedWords[counter] = {
        ...updatedWords[counter],
        status: wordIsOk ? "True" : "False",
      };
      setWords(updatedWords);
      setCounter(counter + 1);

      console.log(words);
      setInputValue("");
    } else {
      console.log(
        words[counter].word.slice(0, value.trim().length) === value.trim()
      );
      const updatedWords = [...words];

      updatedWords[counter] = {
        ...updatedWords[counter],
        isTypingTrue:
          words[counter].word.slice(0, value.trim().length) === value.trim(),
      };
      setWords(updatedWords);
      // setIsTyping(
      //   words[counter].word.slice(0, value.trim().length) === value.trim()
      // );
      // setIsTyping(words[counter].word.includes(value.trim()));
    }
  };

  useEffect(() => {}, [counter]);

  return (
    <div className="w-full">
      <div className="flex flex-row gap-x-3 w-full">
        {words.map((item, index) => {
          return (
            <p
              className={`${item.id === counter ? "bg-gray-400 p-2" : ""} ${
                item.status === "True"
                  ? "text-green-600"
                  : item.status === "False"
                  ? "text-red-600"
                  : ""
              } ${item.isTypingTrue ? "" : "text-red-600"}
                `}
              key={index}
              id={`${index}`}
            >
              {item.word}{" "}
            </p>
          );
        })}
      </div>
      {/* <div>
        {words.map((item, index) =>
          answers[index] === item ? <p>true</p> : <p>false</p>
        )}
      </div> */}
      <input
        type="text"
        className="border rounded-md mt-4 h-9 px-2 w-1/2"
        placeholder="Start hear type words"
        onChange={(e) => {
          checkword(e.target.value);
        }}
        value={inputValue}
      />
    </div>
  );
}

export default App;
