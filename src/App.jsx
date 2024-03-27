import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [curst, setCurst] = useState("");
  const [delivery, setDeivery] = useState("");
  const [toppings, setToppings] = useState([]);
  const [instruction, setInstruction] = useState("");
  const [formData, setFormData] = useState(false);

  const toppingsHandler = (event) => {
    let value = event.target.value;
    if (event.target.value) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((topping) => topping !== value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (curst && delivery && toppings) {
      setFormData(true);
    }
  };
  return (
    <main>
      <h1>Pizza Order Form</h1>

      <form onSubmit={formHandler}>
        <label htmlFor="customersName">Customers Name: </label>
        <br />
        <input
          required
          id="customersName"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <label>Choose Pizza Size: </label>
        <select
          required
          onChange={(event) => setSize(event.target.value)}
          value={size}
        >
          <option value="">Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <br />
        <br />
        <label>Choose Toppings: </label>
        <br />
        <input
          type="checkbox"
          value="Pepporoni"
          onChange={toppingsHandler}
        />{" "}
        Pepporoni <br />
        <input
          type="checkbox"
          value="Mushrooms"
          onChange={toppingsHandler}
        />{" "}
        Mushrooms <br />
        <input type="checkbox" value="Olives" onChange={toppingsHandler} />{" "}
        Olives <br />
        <br />
        <label>Choose Curst Type: </label>
        <br />
        <input
          type="radio"
          name="curst"
          value="Thin"
          onChange={(event) => setCurst(event.target.value)}
        />{" "}
        Thin
        <input
          type="radio"
          name="curst"
          value="Thick"
          onChange={(event) => setCurst(event.target.value)}
        />{" "}
        Thick
        <br />
        <br />
        <label>Choose Delivery Option</label>
        <br />
        <input
          type="radio"
          name="delivery"
          value="Pickup"
          onChange={(event) => setDeivery(event.target.value)}
        />{" "}
        PickUp <br />
        <input
          type="radio"
          name="delivery"
          value="Delivery"
          onChange={(event) => setDeivery(event.target.value)}
        />{" "}
        Delivery
        <br />
        <br />
        <label>Special Instructions: (if any)</label>
        <br />
        <textarea
          rows="4"
          onChange={(event) => setInstruction(event.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Place Order</button>
      </form>

      {formData && (
        <div>
          <p>Customer Name: {name}</p>
          <p>Pizza Size: {size}</p>
          <p>Toppings: {toppings}</p>
          <p>Curst: {curst}</p>
          <p>Delivery Option: {delivery}</p>
          <p>
            special Instruction: {instruction === "" ? "none" : instruction}
          </p>
        </div>
      )}
    </main>
  );
}
