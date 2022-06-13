import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import UserPanel from "./views/UserPanel";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user_panel" element={<UserPanel/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
