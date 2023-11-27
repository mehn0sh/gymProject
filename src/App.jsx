import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-auto ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exerciseDetail/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
