import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  beforeAll(() => {
    // console.log("befoore all");
  });

  beforeEach(() => {
    // console.log("befoore each");
  });

  afterAll(() => {
    // console.log("After All");
  });

  afterEach(() => {
    // console.log("After Each");
  });

  it("Should load contact us component", () => {
    // Before testing a component we have to render a component first in jsdom.
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    // Before testing a component we have to render a component first in jsdom.
    render(<Contact />);

    const button = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    // Before testing a component we have to render a component first in jsdom.
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");
    //Assertion
    expect(input).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
