import React from "react";
import { Link } from 'react-router-dom';
import {showFormattedDate,} from "../utils"
import PropTypes from "prop-types";

function NoteItem({ id, title, createdAt, body, className}) {

  return (
    <div className={className}>
      <h3 className="note-item__title"><Link to={`/notes/${id}`}>{title}</Link></h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string,
};

export default NoteItem;
