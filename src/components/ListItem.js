import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ name, condition, date, id, deleteHandler }) => {
  return (
    <div className="list-container">
      <FontAwesomeIcon
        icon={faTrash}
        className="remove"
        onClick={() => deleteHandler(id)}
      />
      <h3 className="name">{name}</h3>
      <p className="condition">{condition}</p>
      <div className="date">{date} </div>
      <FontAwesomeIcon icon={faEdit} />
    </div>
  );
};

export default ListItem;
