import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Homepage from "./pages/Home";
import Projects from "./pages/Projects";
import { Toaster } from "@/components/ui/sonner";
//import AdminLogin from "./pages/AdminLogin";
//import Header from "./components/layout/header";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {" "}
            {/* Layout wraps all pages */}
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/admin" element={<AdminLogin />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
