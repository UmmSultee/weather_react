import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <Weather />
      <p>
        This project is hosted on {""}
        <a href="https://init-weather-react.netlify.app/" target="_blank">
          Netlify{""}
        </a>
        {""}
        and is
        <a href="https://github.com/UmmSultee/weather_react" target="_blank">
          {" "}
          open source
        </a>
      </p>
    </div>
  );
}

export default App;
