import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import PetListing from "./components/pages/PetListing";
import About from "./components/pages/About";
import Resources from "./components/pages/Resources";
import Contact from "./components/pages/Contact";
import PetDetailss from "./components/pages/PetDetails";
import WishList from "./components/pages/WishList";
import { ToastContainer } from "react-toastify";
import Donate from "./components/pages/Donate";
import "react-toastify/dist/ReactToastify.css"; 
import Adoption from "./components/pages/Adoption";

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
          <Route path="/adopt" element={<Adoption />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
 