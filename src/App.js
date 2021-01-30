import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NasaPhoto from "./components/NasaPhoto";
import Home from "./components/Home";
import Mars from "./components/Mars";
import Map from './components/Map';



function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" exact />
        <Route component={Mars} path="/marsweather" exact />
        <Route component={Map} path="/map" exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
