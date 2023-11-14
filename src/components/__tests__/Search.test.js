import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("rescard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchButton);

  // Screen should load 5 cards
  const cardsAfterSearch = screen.getAllByTestId("rescard");
  expect(cardsAfterSearch.length).toBe(5);

  expect(searchButton).toBeInTheDocument();
});

it("Should filter top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("rescard");
  expect(cardsBeforeSearch.length).toBe(20);

  const topRatedResButton = screen.getByRole("button", {
    name: "Top Rated Reataurants",
  });

  fireEvent.click(topRatedResButton);

  const cardsAfterSearch = screen.getAllByTestId("rescard");
  expect(cardsAfterSearch.length).toBe(12);

  expect(topRatedResButton).toBeInTheDocument();
});
