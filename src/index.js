import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from "./routes"
import reportWebVitals from './reportWebVitals';

import ModeContext from "./context/ModeContext"

import {
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModeContext>
    <RouterProvider router={router} />
    </ModeContext>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
