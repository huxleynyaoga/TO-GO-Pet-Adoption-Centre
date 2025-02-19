import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import PetListing from "./components/pages/PetListing";
import About from "./components/pages/About";
import Resources from "./components/pages/Resources";
import Contact from "./components/pages/Contact";
import PetDetailss from "./components/pages/PetDetails";
import WishList from "./components/pages/WishList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure you import the CSS

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/wishlist"
            element={<WishList id={""} name={""} age={0} images={""} breed={""} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/petlisting" element={<PetListing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/petdetail/:id" element={<PetDetailss />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
