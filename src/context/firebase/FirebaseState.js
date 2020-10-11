import React, {useReducer} from "react"
import axios from "axios"

import FirebaseContext from "../firebase/firebaseContext"
import {firebaseReducer} from "../firebase/firebaseReducer"
import {SHOW_LOADER, REMOVE_NOTE} from "../types"


const url = process.env.REACT_APP_DB_URL

const FirebaseState = ({children}) => {
  const initialState = {
    notes: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({type: SHOW_LOADER})

  const fetchNotes = async () => {
    showLoader()

    const res = await axios.get(`${url}/notes.json`)

    console.log(`fetchNotes`, res.data)
  }
   
  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON()
    }

    const res = await axios.post(`${url}/notes.json`, note)
    
    console.log(`addNote`, res.data)
  }

  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`)

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    })
  }

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}


export default FirebaseState
