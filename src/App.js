import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// Import all your page components into an array
var pages = Array.from({ length: 10 }, (_, i) => `page${i + 1}`);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {pages.map((page, index) => (
            <Route key={index} path={`/${index === 0 ? "" : index + 1}`} element={React.createElement(require(`./components/${page}`).default)} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
