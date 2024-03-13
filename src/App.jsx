import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Navbar from "./Component/Nav/NavBar";
import Faq from "./Component/Faq";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
      <Route index element={<Home />} />
          <Route path="footer" element={<Footer />} />
          <Route path="faq" element={<Faq />} />
          
       
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);