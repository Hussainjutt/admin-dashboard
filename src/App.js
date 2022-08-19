import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashBoard/index";
import Test from "./components/footer/index";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
