import React from "react";
import {render, screen} from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";
import {BrowserRouter as Router} from "react-router-dom";

test("App is present", () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  const app = screen.getByTestId("App");
  expect(app).toBeInTheDocument();
});
