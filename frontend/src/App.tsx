import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Homepage from "./pages/Home";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Contact from "./pages/ContactMe";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;