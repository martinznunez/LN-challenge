import React from 'react';
import { render, screen } from '@testing-library/react';
import {Title} from '..'; 

const FAKE_TITLE = 'Default Title'

describe('Title Component', () => {
  test('renders the title with the default level and class', () => {
    render(<Title titleValue={FAKE_TITLE} />);

    const titleElement = screen.getByText(FAKE_TITLE);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toBe(FAKE_TITLE);
    expect(titleElement.tagName).toBe('H1'); 
    expect(titleElement).toHaveClass('com-title-section-xl');

  });
    
  test('renders the title with a custom level and class', () => {
    render(<Title titleValue={FAKE_TITLE} level="h3" className="custom-class" />);

      const titleElement = screen.getByText(FAKE_TITLE);
      expect(titleElement.tagName).toBe('H3');
      expect(titleElement).toHaveClass('custom-class'); 
      
  });

});
