import React from "react";
import PropTypes from "prop-types";
import NoteInputForm from "./NoteInputForm";
import LocalContext from "../context/LocalContext";
 
function NoteInput({onSubmit}) {
  const {local} =React.useContext(LocalContext);
  
  return (
    <div className="note-input">
      <h2>{local === 'id' ? 'Buat Catatan Baru' : 'Make New Note'}</h2>
      <NoteInputForm onSubmit={onSubmit} />
    </div>
  );
}
 
NoteInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
 
export default NoteInput;
