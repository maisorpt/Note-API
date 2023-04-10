import React from "react";
import NoteInput from "../components/NoteInput";
import { useNavigate } from 'react-router-dom';
import { addNote } from "../utils/api";

function AddingPage(){
  const navigate = useNavigate();

function onSubmitHandler({title, body}) {
  addNote({title, body});
  navigate("/");
}

return(
        <>
        <NoteInput onSubmit={onSubmitHandler} />
      </>
)
}

export default AddingPage;
