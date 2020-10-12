import React, {Fragment, useContext, useEffect} from "react"

import Form from "../components/Form"
import Notes from "../components/Notes"
import Loader from "../components/Loader"
import firebaseContext from "../context/firebase/firebaseContext"


const Home = () => {
  const {loading, notes, fetchNotes, removeNote} = useContext(firebaseContext)

  useEffect(() => {
    fetchNotes()
  // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Form />

      <hr/>

      {loading 
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote} />
      }
    </Fragment>
  )
}


export default Home
