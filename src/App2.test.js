import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Color from "./Color";
import { MemoryRouter } from "react-router-dom";
import App2 from "./App2";

// const colors = ['red', 'blue', 'green'];
// global.CSS = { supports: jest.fn() };
// clears error but test still fails

it("renders without crashing", function () {
    <MemoryRouter initialEntries={['/']}>
        <App2 />
    </MemoryRouter>
});

it("matches snapshot", function () {
    const container = render(
        <MemoryRouter initialEntries={['/']}>
            <App2 />
        </MemoryRouter>
    );
    expect(container.asFragment()).toMatchSnapshot();
});

test('renders App homepage', function () {
    const { getByText } = render((
        <MemoryRouter initialEntries={['/']}>
            <App2 />
        </MemoryRouter>
    ))

    const text = getByText('Please Select A color');
    expect(text).toBeInTheDocument();
});

test('Allows us to create colors', function () {
    const app2 = render((
        <MemoryRouter initialEntries={['/']}>
            <App2 />
        </MemoryRouter>
    ))

    const text = app2.getByText('Please Select A color');
    expect(text).toBeInTheDocument();

    const link = app2.getByText('Create a new Color')
    fireEvent.click(link)

    const colorInput = app2.getByLabelText('New Color')
    const btn = app2.queryByText('Add color')
    // console.log('btn', btn)

    fireEvent.change(colorInput, { target: { value: 'pink' } })
    fireEvent.click(btn)

    // go back to homepage
    const homepageText = app2.getByText('Create a new Color');
    expect(homepageText).toBeInTheDocument();

    // color was added
    const colorText = app2.getByText('pink');
    expect(colorText).toBeInTheDocument();
});

test('Clicking on color makes correct colored div appear', function () {
    const app2 = render((
        <MemoryRouter initialEntries={['/']}>
            <App2 />
        </MemoryRouter>
    ))

    const text = app2.getByText('Please Select A color');
    expect(text).toBeInTheDocument();

    const colorText = app2.getByText('blue')
    fireEvent.click(colorText);

    const coloredDiv = app2.queryByTestId("blue-div");
    expect(coloredDiv).toBeInTheDocument();
    
});