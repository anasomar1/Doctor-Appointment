import React, { useState } from "react";
import { v4 as uuid_v4 } from "uuid";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./components/ListItem";

const App = () => {
  //States
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [condition, setCondition] = useState("");
  const [isToggled, setIsToggle] = useState(false);
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

  const editHandler = (id, newName, newDate, newCondition) => {
    const editedAppointments = appointments.map((appointment) => {
      if (appointment.id === id) {
        return {
          ...appointment,
          name: newName,
          date: newDate,
          condition: newCondition,
        };
      }
      return appointment;
    });
    setAppointments(editedAppointments);
  };
  return (
    <div className="App">
      <header>
        <h2>BlueDoc</h2>
      </header>
      <div className="container">
        <main>
          <div className="appointment">
            <FontAwesomeIcon
              title="Add Appointment"
              className="add"
              icon={isToggled ? faMinus : faPlus}
              onClick={() => setIsToggle(!isToggled)}
            />
            <h3>Book an appointment!</h3>
          </div>
          {isToggled && (
            <form onSubmit={submitHandler}>
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={inputHandler}
                required
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
                required
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
                required
              />
              <button className="btn" type="submit">
                Add appointment
              </button>
            </form>
          )}
          <ul>
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
                  editHandler={editHandler}
                />
              );
            })}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default App;
