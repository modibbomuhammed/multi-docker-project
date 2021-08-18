import React, { useState, useEffect } from "react";
import axios from "axios";

export const Fib = () => {
  // const [state, setState] = useState({
  //   seenIndexes: [],
  //   values: {},
  //   index: "",
  // });
  const [seenApiIndexes, setSeenApiIndexes] = useState([]);
  const [apiValues, setApiValues] = useState({});
  const [index, setIndex] = useState("");

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    // setState({ ...state, values: { ...state.values, ...values.data } });
    setApiValues({ ...apiValues, ...values.data });
  };

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get("/api/values/all");
    // console.log(state, "before");
    // setState({
    //   ...state,
    //   values: { ...state.values },
    //   seenIndexes: seenIndexes.data,
    // });
    setSeenApiIndexes(seenIndexes.data);
    // console.log(state, "after");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/api/values", {
      // index: state.index,
      index,
    });
    // setState({ ...state, index: "" });
    setIndex("");
    fetchValues();
  };

  const renderSeenIndexes = () => {
    // return state.seenIndexes.map(({ number }) => number).join(", ");
    return seenApiIndexes.map(({ number }) => number).join(", ");
  };

  const renderValues = () => {
    const entries = [];
    // for (let key in state.values) {
    for (let key in apiValues) {
      entries.push(
        <div key={key}>
          {/* For index {key} I Calculated {state.values[key]} */}
          For index {key} I Calculated {apiValues[key]}
        </div>
      );
    }
    return entries;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your Index:</label>
        <input
          // value={state.index}
          value={index}
          onChange={(event) =>
            // setState({ ...state, index: event.target.value })
            setIndex(event.target.value)
          }
        />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen: Again</h3>
      {renderSeenIndexes()}

      <h3>Calculated Values:</h3>
      {renderValues()}
    </div>
  );
};
