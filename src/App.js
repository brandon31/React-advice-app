import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice, id } = response.data.slip;
        setAdvice(advice);
        setId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="wrapper">
      <h1>Random Advice generator</h1>
      <div className="container">
        <p>ADVICE #{id}</p>
        <p>"{advice}"</p>
        <button className="material-symbols-outlined" onClick={fetchAdvice}>
          casino
        </button>
        <p>Press the dice for new Advice</p>
      </div>
    </div>
  );
}

export default App;
