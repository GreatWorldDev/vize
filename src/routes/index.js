import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Honor from "pages/Honor";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Honor} />
    </BrowserRouter>
  );
}

export default Routes;
