import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from './DeleteButton';
import PropTypes from "prop-types";

function NoteItemAction({id, onDelete, onArchive, archived}){
    return(
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete}/>
            <ArchiveButton id={id} onArchive={onArchive} archived={archived}/>
        </div>
    )
}

NoteItemAction.propTypes = {
    id: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    archived: PropTypes.bool,
  };

export default NoteItemAction;