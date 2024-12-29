import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/about-me/About-me";
import Footer from "./components/layouts/Footer";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Testimonials from "./components/testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Header from "./components/layouts/Header";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
