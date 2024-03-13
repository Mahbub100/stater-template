import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="footer" element={<Footer />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);