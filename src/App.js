import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Moscow" />
        <footer>
          This project was built by Rebecca and is hosted on{" "}
          <a
            href="https://how-is-the-weather-today.netlify.app/"
            target_blank
            rel="noopener noreferrer"
          >
            Netlify
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/RebeccaNiem/weather-react-App"
            target_blank
            rel="noopener noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
