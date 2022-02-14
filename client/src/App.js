import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/landingPage";
import Home from "./Components/home";
import Detail from "./Components/detail";
import PokeCreated from "./Components/pokeCreated";

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
