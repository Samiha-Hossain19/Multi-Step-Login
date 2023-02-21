import React, { useState } from "react";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";

const App = () => {
  const [isAuth, setIsAuth] = useState({ open: false, form: "login" });
  return (
    <div>
      <Home isAuth={isAuth} setIsAuth={setIsAuth} />
      <Auth isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
  );
};

export default App;
