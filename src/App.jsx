import { useState } from "react";
import "./App.css";
import Fahrenheit from "./Fahrenheit";
import Celsius from "./Celsius";

function App() {
  const [conversionType, setConversionType] = useState("celsius");
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <h1>Temperature Converter</h1>
      <select
        value={conversionType}
        onChange={(e) => {
          setConversionType(e.target.value);
          setIsSelected(true);
          setIsClicked(false);
        }}
      >
        <option value="celsius">C → F</option>
        <option value="fahrenheit">F → C</option>
      </select>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        onClick={() => {
          if (conversionType === "celsius") {
            setOutputValue(Math.round((inputValue * 9) / 5 + 32));
            setInputValue(0);
            setIsClicked(true);
          } else {
            setOutputValue(Math.round(((inputValue - 32) * 5) / 9));
            setInputValue(0);
            setIsClicked(true);
          }
        }}
      >
        Convert
      </button>
      {isClicked ? (
        conversionType === "celsius" ? (
          <Fahrenheit temperature={outputValue} />
        ) : (
          <Celsius temperature={outputValue} />
        )
      ) : null}
    </>
  );
}

export default App;
