import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./Components/Footer";
import Projects from "./pages/project/Projects";
import ProjectDetails from "./pages/project/ProjectDetails";
import Cart from "./pages/project/Cart";
import Checkout from "./pages/project/Checkout";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signup";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
