import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Notes = ({ task, deleteNote, editNote }) => {
  return (
    <div className="notes">
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editNote(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteNote(task.id)} />
      </div>
    </div>
  );
};
