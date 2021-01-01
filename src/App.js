import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./components/ListItem";

const App = () => {
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
              icon={faPlus}
            />
            <h3>Book an appointment!</h3>
          </div>
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
              Condition
            </label>
            <input type="text" id="condition" name="condition" required />
          </form>
          <ListItem />
        </main>
      </div>
    </div>
  );
};

export default App;
