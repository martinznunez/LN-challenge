import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../'; 
import userEvent from '@testing-library/user-event';

describe('Button Component', () => {
  const FAKE_TEXT = 'Click me';
  const FAKE_ARIA_LABEL = 'button-click';

  test('renders the button with the correct text', () => {
    render(
      <Button 
        textValue={FAKE_TEXT} 
        ariaLabel={FAKE_ARIA_LABEL} 
        type="button" 
      />
    );

    const button = screen.getByText(FAKE_TEXT);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(FAKE_TEXT);
  });

  test('applies the correct aria-label', () => {
    render(
      <Button 
        textValue={FAKE_TEXT} 
        ariaLabel={FAKE_ARIA_LABEL} 
        type="button" 
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', FAKE_ARIA_LABEL);
  });

 

  test('renders the button as disabled when the "disabled" prop is true', () => {
    render(
      <Button 
        textValue={FAKE_TEXT} 
        ariaLabel={FAKE_ARIA_LABEL} 
        type="button" 
        isDisabled={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('renders the button with additional classes', () => {
    render(
      <Button 
        textValue={FAKE_TEXT} 
        ariaLabel={FAKE_ARIA_LABEL} 
        type="button" 
        styled="custom-class" 
       
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  test('calls the onClick handler when clicked',async () => {
    const handleClick = jest.fn();

    render(
      <Button 
        textValue={FAKE_TEXT} 
        ariaLabel={FAKE_ARIA_LABEL} 
        type="button" 
        onClick={handleClick} 
      />
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
