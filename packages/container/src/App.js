import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <MarketingApp />
    </div>
  </BrowserRouter>
);
