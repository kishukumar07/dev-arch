import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="red">Heloo</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:product_id" element={<Product />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
