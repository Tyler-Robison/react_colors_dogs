import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Color from "./Color";
import { MemoryRouter } from "react-router-dom";

const colors = ['red', 'blue', 'green'];

it("renders without crashing", function () {
    <MemoryRouter initialEntries={['/colors/red']}>
         <Color colors={colors} />
    </MemoryRouter>
});

it("matches snapshot", function () {
    const container = render(
        <MemoryRouter initialEntries={['/colors/red']}>
          <Color colors={colors} />
        </MemoryRouter>
      );
      expect(container.asFragment()).toMatchSnapshot();
});

