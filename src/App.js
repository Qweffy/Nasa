import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NasaPhoto from "./components/NasaPhoto";
import Home from "./components/Home";
import Mars from "./components/Mars";
import Asteroids from "./components/Asteroids";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" exact />
        <Route component={Mars} path="/marsweather" exact />
        <Route component={Asteroids} path="/asteroid" exact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
