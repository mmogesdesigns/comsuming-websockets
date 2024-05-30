import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePgae from "./views/Homepage";
import ChatPage from "./views/ChatPage";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePgae />} />
      <Route path={"/chat"} element={<ChatPage />} />
    </Routes>
  );
};

export default App;
