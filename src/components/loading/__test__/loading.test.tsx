import { render, screen } from '@testing-library/react';
import {Loading} from '..';


  test('renders the loading spinner and text correctly', () => {
    render(<Loading />);
   
    const loadingContainer = screen.getByRole('progress', { name: /cargando/i });
    expect(loadingContainer).toBeInTheDocument();
  
    const spinner = loadingContainer.querySelector('.spinner');
    expect(spinner).toBeInTheDocument();

    const loadingText = screen.getByText(/cargando.../i);
      expect(loadingText).toBeInTheDocument();
      
  });

