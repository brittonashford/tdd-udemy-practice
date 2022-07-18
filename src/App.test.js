import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

//always use roles when possible for accesibility
//look up matcher syntax on jest-dom documentation
//look up roles on W3C

test('button has correct initial color', () => {
    render(<App />);

    //find an element with a role of button and atext of 'Change to MidnightBlue'
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

    //expect the background clor to be MediumVioletRed
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

    //click button
    fireEvent.click(colorButton);

    //expect the background to be MidnightBlue
    expect(colorButton).toHaveStyle({ backgroundColor: 'Midnight Blue' });

    //expect the button text to change to 'Change to MediumVioletRed'
    expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
    render(<App />);

    //check button starts out enabled
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
    expect(colorButton).toBeEnabled();

    const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
    expect(checkBox).not.toBeChecked();

    //check that checkbox starts out unchecked
})

test('checkbox disables/enables button', () => {
    render(<App />);

    const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
});

test('Disabled button is gray, reverts to MediumVioletRed', () => {
    render(<App />);
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
    const colorButton = screen.getByRole('button', {
        name: 'Change to Midnight Blue',
    });

    // disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: gray');

    // re-enable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: MediumVioletRed');
});

test('Disabled button is gray, reverts to MidnightBlue', () => {
    render(<App />);
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' },);
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' },);


    // change button to MidnightBlue
    fireEvent.click(colorButton);

    // disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: gray');

    // re-enable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: MidnightBlue');
});

//function test (describe is used to group tests)
describe('spaces before camel-case capital letters', () => {
    test('Works for no inner capital letters', () =>{
        expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });
    test('Works for one inner capital letter', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });
    test('Works for multiple inner capital letters', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });
})
