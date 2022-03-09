import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

describe("Tests", () => {
  let header, results;

  beforeEach(() => {
    render(<App />);
    header = screen.getByText("Emoji Search");
  });

  it("should have header", () => {
    expect(header).toBeInTheDocument();
  });

  it("should be render success emoji list",()=>{
    results= screen.getAllByTestId("item");
    expect(results.length).toBeGreaterThan(0);
  })
});
