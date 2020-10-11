import React, {useContext} from "react"

import AlertContext from "../context/alert/alertContext"


const Alert = () => {
  const {alert, hide} = useContext(AlertContext)

  if (!alert.visible) {
    return null
  }

  return (
    <div className={`alert alert-${alert.type || `warning`} alert-dismissible`}>
      <strong>Внимание!&nbsp;</strong>

      {alert.text}

      <button
        className="close"
        type="button"
        aria-label="Close"
        onClick={hide}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}


export default Alert
