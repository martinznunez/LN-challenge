import { render, screen } from '@testing-library/react';
import {ErrorMessage} from '..';



const FAKE_MESSAGE='is an error message'

 test('renders the error message correctly', () => {
      
  render(<ErrorMessage message={FAKE_MESSAGE} />);

  const displayedMessage = screen.getByText(FAKE_MESSAGE);
  expect(displayedMessage).toBeInTheDocument();
    
  });
    

