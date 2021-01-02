import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({
  name,
  condition,
  date,
  id,
  deleteHandler,
  editHandler,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newCondition, setNewCondition] = useState("");
  const changeHandler = (e) => {
    const target = e.target;
    if (target.name === "name") {
      setNewName(target.value);
    } else if (target.name === "date") {
      setNewDate(target.value);
    } else {
      setNewCondition(target.value);
    }
  };

  const submitHandler = () => {
    editHandler(id, newName, newDate, newCondition);
    setNewName("");
    setNewDate("");
    setNewCondition("");
    setIsEditing(false);
  };

  const msgContainer = useRef();
  //View templates

  const editingView = (
    <form className="edit-container" onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="input">New name</label>
        <input
          onChange={changeHandler}
          id={id}
          type="text"
          value={newName}
          name="name"
          required
        />
        <label htmlFor="input">New date</label>
        <input
          onChange={changeHandler}
          id={id}
          type="date"
          value={newDate}
          name="date"
          required
        />
        <label htmlFor="input">New condition</label>
        <input
          onChange={changeHandler}
          id={id}
          type="text"
          value={newCondition}
          name="condition"
          required
        />
      </div>
      <div className="cta">
        <button className="btn cancel" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
        <button className="btn" type="submit">
          Save
        </button>
        <div ref={msgContainer} className="msg"></div>
      </div>
    </form>
  );
  const normalView = (
    <>
      <FontAwesomeIcon
        icon={faTrash}
        className="remove"
        onClick={() => deleteHandler(id)}
      />
      <h3 className="name">{name}</h3>
      <p className="condition">{condition}</p>
      <div className="date">{date} </div>
      <FontAwesomeIcon
        icon={faEdit}
        onClick={() => {
          setIsEditing(true);
        }}
      />
    </>
  );
  return (
    <li className="list-container">{isEditing ? editingView : normalView}</li>
  );
};

export default ListItem;
