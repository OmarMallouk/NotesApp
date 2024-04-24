import React from "react";
import { useState } from "react";
export const EditForm = ({ editNote, task }) => {
  const [word, setWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(word, task.id);

    setWord("");
    // console.log(word);
  };
  return (
    <form className="NoteForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="inputs"
        value={word}
        placeholder="Update note"
        onChange={(e) => setWord(e.target.value)}
      />
      <button type="submit" className="submits">
        Update Note
      </button>
    </form>
  );
};
