import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const getTestResponse = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api");
      setMessage(response?.data?.msg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTestResponse();
  }, []);
  return (
    <div className="App">
      <h6>{message ? message : "No response yet"}</h6>
    </div>
  );
}

export default App;
