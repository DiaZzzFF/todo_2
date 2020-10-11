import React, {useState, useContext} from "react"
import AlertContext from "../context/alert/alertContext"


const Form = () => {
  const [value, setValue] = useState(``)
  const alert = useContext(AlertContext)

  const submitHandler = (evt) => {
    evt.preventDefault()

    if (value.trim()) {
      //...
      alert.show(`Заметка была создана`, `success`)

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
