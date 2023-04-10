import React from "react";
import PropTypes from "prop-types";
import NoteList from "./NoteList";

function Note ({ notes}) {
  return (
    <>
      {notes.length > 0 ? (
        <NoteList notes={notes}/>
      ) : (
        <p className="note-list__empty-message">Tidak ada catatan aktif</p>
      )}
    </>
  );
}

Note.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default Note;
