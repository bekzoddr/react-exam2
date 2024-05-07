import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/Wishlist";
import Contact from "./pages/contact/Contact";
import SingleRoute from "./pages/single/Single";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single/:id" element={<SingleRoute />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
