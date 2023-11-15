import React, {useState} from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { Route, Routes } from 'react-router-dom';
import CartPage from "./components/CartPage";

const App = () => {

  const [getId, setGetId] = useState([]);

  return (
    <div>
      <Navbar data = {getId} />
        <Routes>
          <Route path="/" element={<HomePage getId={setGetId} />} />
          <Route path="cart" element={<CartPage getId={getId} />} />
        </Routes>
    </div>
  )
}

export default App;