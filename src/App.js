import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Episode from "./Pages/Episode/Episode";
import SinglePage from "./Pages/SinglePage/SinglePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/hero/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
