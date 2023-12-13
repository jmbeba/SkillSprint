import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateCourse from "./pages/CreateCourse";
import Navbar from "./sections/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="mx-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-course" element={<CreateCourse />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
