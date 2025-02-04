import logo from "./logo.svg";
import "./App.css";
import React, {useState, useEffect} from "react";

function App() {
  const [dateNow, setDateNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current time: {dateNow.toLocaleTimeString()}</p>
        <p>Namaste to my React Lovers ❤️</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
}

export default App;
