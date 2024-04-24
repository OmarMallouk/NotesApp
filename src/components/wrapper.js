import React from "react";
import { useState } from "react";
import { Form1 } from "./form1";
import { EditForm } from "./editForm";
import { v4 as uuidv4 } from "uuid";
import { Notes } from "./notes";
uuidv4();

export const Wrapper = () => {
  const [words, setWords] = useState([]);

  const addNote = (note) => {
    setWords([
      ...words,
      { id: uuidv4(), task: note, completed: false, isEditing: false },
    ]);
    console.log(words);
  };

  const deleteNote = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  const editNote = (id) => {
    setWords(
      words.map((word) =>
        word.id === id ? { ...word, isEditing: !word.isEditing } : word
      )
    );
  };

  const editTask = (task, id) => {
    setWords(
      words.map((word) =>
        word.id === id ? { ...word, task, isEditing: !word.isEditing } : word
      )
    );
  };

  return (
    <div className="NotesWrapper">
      <Form1 addNote={addNote} />
      {words.map((word1, index) =>
        word1.isEditing ? (
          <EditForm editNote={editTask} task={word1} />
        ) : (
          <Notes
            task={word1}
            key={index}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        )
      )}
    </div>
  );
};
