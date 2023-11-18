import React from "react";
import {render, screen} from "@testing-library/react";
import Footer from "../../../Components/Footer";

test("Footer component renders", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("Footer");
  expect(footerElement).toBeInTheDocument();
});
