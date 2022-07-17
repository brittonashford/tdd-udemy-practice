import { render, screen, fireEvent } from '@testing-library/react';
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

test('button turns blue when clicked', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: 'Change to Blue' });
});
