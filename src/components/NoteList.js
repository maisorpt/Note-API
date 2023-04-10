import React from "react";
import NoteItem from './NoteItem';
import PropTypes from "prop-types";

function NoteList({notes}) {
    return(
        <div className="note-list">
            {
                notes.map((note) =>(
                    <NoteItem className="note-item__content" key={note.id} id={note.id} title={note.title} body={note.body} createdAt={note.createdAt}/>
                ))
            }
        </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    })).isRequired,
};


export default NoteList;