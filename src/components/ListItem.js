import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const ListItem = () => {
  return (
    <div className="list-container">
      <FontAwesomeIcon icon={faTrash} className="remove" />
      <h3 className="name">Anas</h3>
      <p className="condition">I have a rash on my leg and it keeps itching </p>
      <div className="date">Jan 21, 2021 </div>
      <FontAwesomeIcon icon={faEdit} />
    </div>
  );
};

export default ListItem;
