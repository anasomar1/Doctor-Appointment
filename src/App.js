import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faEdit } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h2>BlueDoc</h2>
          <p>Your healthy solution</p>
        </header>
        <main>
          <h3>Book an appointment right now</h3>
          <form>
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
            <label htmlFor="date" required>
              Date
            </label>
            <input type="date" id="date" name="date" />

            <label htmlFor="time" required>
              Time
            </label>
            <input type="time" id="time" name="time" />
            <FontAwesomeIcon
              title="Add Appointment"
              className="add"
              icon={faPlus}
            />
          </form>
        </main>
      </div>
    </div>
  );
};

export default App;
