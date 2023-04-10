import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import NoteItemAction from "./NoteItemAction";

function NoteDetail({ notes, onArchive, onDelete }) {
  return (
    <div className="note-item__content-detail">
      <NoteItem
        className="note-item__detail"
        id={notes.id}
        title={notes.title}
        createdAt={notes.createdAt}
        body={notes.body}
      />
      <NoteItemAction
        id={notes.id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={notes.archived}
      />
    </div>
  );
}

NoteDetail.propTypes = {
  notes: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    body: PropTypes.string,
    archived: PropTypes.bool,
  }).isRequired,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
};

export default NoteDetail;
