import GlobalStyles from "./globalStyles";
import Navbar from "./Components/Navbar/Navbar"
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Navbar/>   
      </BrowserRouter>
  );
}

export default App;
