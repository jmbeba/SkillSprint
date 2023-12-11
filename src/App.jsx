import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateCourse from "./pages/CreateCourse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-course" element={<CreateCourse />} />
      </Routes>
    </>
  );
}

export default App;
