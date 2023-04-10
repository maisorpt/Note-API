import React from "react";
import {showFormattedDate} from "../utils"

function NotemItemContent({ title, createdAt, body }) {

  return (
    <div className="note-item__body">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NotemItemContent.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotemItemContent;
