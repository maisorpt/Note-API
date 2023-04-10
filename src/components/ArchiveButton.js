import React from "react";
import PropTypes from "prop-types";

function ArchiveButton({ id, onArchive, archived }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool,
};

export default ArchiveButton;
