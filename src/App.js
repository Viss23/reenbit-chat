import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Provider } from "react-redux";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import { HomePage, LoginPage } from "./pages/";
import { ProtectedRoute } from "./containers";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="/" element={<HomePage />} />
          </Route>
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
