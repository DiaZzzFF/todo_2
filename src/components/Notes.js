import React from "react"


const Notes = ({notes, onRemove}) => {
  return (
    <ul className="list-group">
      {notes.map((note) => (
        <li
          className="note list-group-item"
          key={note.id}
        >
          <div>
            <strong className="note__text">
              {note.title}
            </strong>

            <small>{note.date}</small>
          </div>

          <button
            className="btn btn-outline-danger btn-sm"
            type="button"
            onClick={() => onRemove(note.id)}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  )
}


export default Notes
