import React from "react";
import {render, screen} from "@testing-library/react";
import Footer from "../../../components/footer";

test("Footer component renders", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("Footer");
  expect(footerElement).toBeInTheDocument();
});
