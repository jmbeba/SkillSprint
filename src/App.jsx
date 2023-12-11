import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateCourse from "./pages/CreateCourse";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <div className="mx-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-course" element={<CreateCourse />} />
      </Routes>
    </div>
  );
}

export default App;
