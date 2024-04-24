import { useState } from "react";
import React from "react";

export const Form1 = ({ addNote }) => {
  const [word, setWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(word);

    setWord("");
    // console.log(word);
  };
  return (
    <form className="NoteForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="inputs"
        value={word}
        placeholder="What's on your mind?"
        onChange={(e) => setWord(e.target.value)}
      />
      <button type="submit" className="submits">
        Add Note
      </button>
    </form>
  );
};
