import { Routes, Route } from "react-router-dom"; // ❌ No BrowserRouter here
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import Main from "../Components/Pages/Main";
import Contact from "../Components/Pages/Contact";
import Career from "../Components/Pages/Career";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
