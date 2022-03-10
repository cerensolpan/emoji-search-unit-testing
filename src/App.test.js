import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event"

import App from "./App";

describe("Tests", () => {
  let header, results, input, filteredEmoji;

  beforeEach(() => {
    render(<App />);
    header = screen.getByText("Emoji Search");
  });

  it("should have header", () => {
    expect(header).toBeInTheDocument();
  });

  it("should be render success emoji list",()=>{
    results = screen.getAllByTestId("item");
    expect(results.length).toBeGreaterThan(0);
  })

  it("should be filter according to search",()=>{
    const emoji="grin"
    input = screen.getByTestId("inputsearch");
    userEvent.type(input,emoji);
    results = screen.getAllByTestId("item");
    expect(results.length).toEqual(3);
  })
});
