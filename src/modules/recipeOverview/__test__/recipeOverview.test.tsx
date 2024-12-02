import { render, screen } from '@testing-library/react';
import {RecipeOverview} from '..'; 
import { useGridSelection } from '@/contexts'; 
import { NO_SELECTED_CARD } from '@/constants'; 

jest.mock('@/contexts', () => ({
  useGridSelection: jest.fn(),
}));

describe('RecipeOverview', () => {
  

  test('should render message when no card is selected', () => {
    (useGridSelection as jest.Mock).mockReturnValue({ selectedCard: null });

    render(<RecipeOverview />);

    expect(screen.getByText(NO_SELECTED_CARD)).toBeInTheDocument();
      
  });
  
  test('should render CustomCard when a card is selected', () => {
    const mockCard = {
      title: 'Test Card',
      date: '2024-11-30',
      imageUrl: 'https://example.com/image.jpg',
      link: '/test-card',
      cardId: 'card123',
    };
    (useGridSelection as jest.Mock).mockReturnValue({ selectedCard: mockCard });

    render(<RecipeOverview />);

      expect(screen.getByText(mockCard.title)).toBeInTheDocument();
      expect(screen.getByText(mockCard.date)).toBeInTheDocument();

      const image = screen.getByAltText(mockCard.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('alt', mockCard.title);
      expect(image).toHaveAttribute('src');
      

  });

});
