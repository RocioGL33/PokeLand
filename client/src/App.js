import "./App.css";
import "normalize.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/landingPage";
import Home from "./Components/Home/home";
import Detail from "./Components/Detail/detail";
import PokeCreated from "./Components/PokeCreated/pokeCreated";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemons/:id" element={<Detail />}></Route>
        <Route path="/create" element={<PokeCreated />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
