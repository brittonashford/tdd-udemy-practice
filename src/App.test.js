import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import App from './App';

//always use roles when possible for accesibility

test('button has correct initial color', () => {
    render(<App />);

    //find an element with a role of button and atext of 'Change to blue'
    const colorButton = screen.getByRole('button', { name: 'Change to blue'});

    //expect the background clor to be red
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

    //click button
    fireEvent.click(colorButton);

    //expect the background to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

    //expect the button text to change to 'Change to Red'
    expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
    render(<App />);

    //check button starts out enabled
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toBeEnabled();

    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).not.toBeChecked();

    //check that checkbox starts out unchecked
})

test('checkbox disables/enables button', () => {
    render(<App />);

    const checkBox = screen.getByRole('checkbox');
    const colorButton = screen.getByRole('button', {name: 'Change to blue' });

    fireEvent.click(checkBox);  
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
})
