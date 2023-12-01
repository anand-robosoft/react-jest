import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserList from "./pages/UserList.jsx";
import { Userprovider } from "./store/UserContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Userprovider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  </Userprovider>
);
