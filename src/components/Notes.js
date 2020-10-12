import React from "react"
import {TransitionGroup, CSSTransition} from "react-transition-group"


const Notes = ({notes, onRemove}) => {
  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition
          classNames={`note`}
          timeout={800}
          key={note.id}
        >
          <li className="note list-group-item">
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
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}


export default Notes
