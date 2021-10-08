import axios from "axios";
import { useState, useEffect } from "react";
import "./feed.css";

export default function Feed() {
  const [advice1, setAdvice] = useState("");

  const adviceGenerator = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");

    const { advice } = response.data.slip;
    setAdvice(advice);
    console.log(advice);
  };
  useEffect(() => {}, [advice1]);

  return (
    <div className="feed">
      <div className="card">
        <h1 className="heading">{advice1}</h1>
        <button className="button" onClick={adviceGenerator}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}
//Pull request by aditya
