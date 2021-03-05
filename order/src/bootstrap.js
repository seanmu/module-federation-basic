import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./RestaurantApp.jsx";

window.renderRestaurant = (containerId) => {
  render(
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
