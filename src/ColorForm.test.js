import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ColorForm from "./ColorForm";
import { MemoryRouter } from "react-router-dom";
import App2 from "./App2";

it("renders without crashing", function () {
    <MemoryRouter initialEntries={['/']}>
        <ColorForm />
    </MemoryRouter>
});

it("matches snapshot", function () {
    const container = render(
        <MemoryRouter initialEntries={['/colors/new']}>
            <ColorForm />
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});