import React, { useState, useRef } from "react";
import { v4 as uuid_v4 } from "uuid";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./components/ListItem";

const App = () => {
  const messageContainer = useRef();
  //States
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [condition, setCondition] = useState("");
  const [toggle, setToggle] = useState(false);
  const [appointments, setAppointments] = useState([]);

  //Handlers

  const inputHandler = (e) => {
    const target = e.target;
    if (target.name === "name") {
      setName(target.value);
    } else if (target.name === "date") {
      setDate(target.value);
    } else {
      setCondition(target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && date && condition) {
      setAppointments([
        ...appointments,
        { name, date, condition, id: uuid_v4() },
      ]);
      messageContainer.current.textContent = "Appointment added";
      messageContainer.current.style.border = "2px dashed green";
      setTimeout(() => {
        messageContainer.current.textContent = "";
        messageContainer.current.style.border = "";
      }, 1000);
    } else {
      messageContainer.current.textContent = "Please fill all fields";
      messageContainer.current.style.border = "2px dashed red";
    }

    setName("");
    setDate("");
    setCondition("");
  };

  const deleteHandler = (id) => {
    const filteredList = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(filteredList);
  };

  const editHandler = (id) => {};
  return (
    <div className="App">
      <div className="container">
        <header>
          <h2>BlueDoc</h2>
          <p>Your healthy solution</p>
        </header>
        <main>
          <div className="appointment">
            <FontAwesomeIcon
              title="Add Appointment"
              className="add"
              icon={toggle ? faMinus : faPlus}
              onClick={() => setToggle(!toggle)}
            />
            <h3>Book an appointment!</h3>
          </div>
          {toggle && (
            <form onSubmit={submitHandler}>
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={inputHandler}
              />
              <label htmlFor="date" required>
                Date
              </label>
              <input
                value={date}
                type="date"
                id="date"
                name="date"
                onChange={inputHandler}
              />

              <label htmlFor="time" required>
                Condition
              </label>
              <input
                type="text"
                id="condition"
                value={condition}
                name="condition"
                onChange={inputHandler}
              />
              <button className="btn" type="submit">
                Add appointment
              </button>
              <div ref={messageContainer} className="msg"></div>
            </form>
          )}
          {appointments.map((appointment) => {
            const { name, date, condition, id } = appointment;
            return (
              <ListItem
                name={name}
                date={date}
                condition={condition}
                id={id}
                key={id}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default App;
