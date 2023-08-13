import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BrowserRouter>
         <Provider store={store}>
         <ToastContainer
         theme="light"

position="top-right"
autoClose={3000}

closeOnClick

pauseOnHover = {false}
/>
            <App />
         </Provider>
     </BrowserRouter>
    
  </React.StrictMode>
);
