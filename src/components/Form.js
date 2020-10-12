import React, {useState, useContext} from "react"
import AlertContext from "../context/alert/alertContext"
import FirebaseContext from "../context/firebase/firebaseContext"


const Form = () => {
  const [value, setValue] = useState(``)
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = (evt) => {
    evt.preventDefault()

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show(`Заметка была создана`, `success`)
      }).catch(() => {
        alert.show(`Что-то пошло не так`, `danger`)
      })

      setValue(``)

    } else {
      alert.show(`Введите название заметки`)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Введите название заметки"
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
      </div>
    </form>
  )
}


export default Form
