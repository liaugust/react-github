import React from "react";

import { Navbar } from "./Navbar/Navbar";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container pt-4'>
        <Home />
      </div>
    </>
  )
}

export default App;
