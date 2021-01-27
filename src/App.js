import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NasaPhoto from "./components/NasaPhoto";
import Home from "./components/Home";
import Mars from "./components/Mars";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={NasaPhoto} path="/" exact />
        <Route component={Mars} path="/marsweather" exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
