import React from "react";
import {render, screen} from "@testing-library/react";
import Footer from "../../../components/footer";
import {BrowserRouter as Router} from "react-router-dom";

test("Footer component renders", () => {
  render(
    <Router>
      <Footer />
    </Router>,
  );
  const footerElement = screen.getByTestId("Footer");
  expect(footerElement).toBeInTheDocument();
});
