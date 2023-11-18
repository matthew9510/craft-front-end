import React from "react";
import {render, screen} from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("App is present", () => {
  render(<App />);
  const app = screen.getByTestId("App");
  expect(app).toBeInTheDocument();
});
