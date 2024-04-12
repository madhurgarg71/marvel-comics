import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "../Header/Search";

describe("Search component", () => {
  it("should render the input with the provided value", () => {
    const mockValue = "Search term";
    const { getByPlaceholderText } = render(
      <Search value={mockValue} onSearch={() => {}} />
    );

    const input = getByPlaceholderText(/Search for comics.../i);
    expect(input).toHaveValue(mockValue);
  });

  it("should call the onSearch prop when the input value changes", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <Search value="" onSearch={mockOnSearch} />
    );

    const input = getByPlaceholderText(/Search for comics.../i);
    const searchTerm = "new search term";
    fireEvent.change(input, { target: { value: searchTerm } });

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith(searchTerm);
  });
});
