import React, { useState } from "react";

// Custom dictionary for corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheckApp = () => {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const corrected = customDictionary[word.toLowerCase()];
      return corrected || word;
    });

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );

    setSuggestedText(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
};

export default SpellCheckApp;
