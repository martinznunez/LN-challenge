import React from 'react';
import { render, screen } from '@testing-library/react';
import { GridSelectionProvider, useGridSelection } from '..'; 
import { getSessionStorage } from '@/utils/sessionStorage';


jest.mock('@/utils/sessionStorage', () => ({
  getSessionStorage: jest.fn(),
  saveSessionStorage: jest.fn(),
}));

describe('SelectedCardProvider', () => {
  const FAKE_CARD = {
    title: 'Test Card',
    date: '2024-11-30',
    imageUrl: 'https://example.com/image.jpg',
    link: '/test-card',
    cardId: 'card123',
  };

  test('should initialize context with null when no card is stored in sessionStorage', () => {
   
    (getSessionStorage as jest.Mock).mockReturnValueOnce(null);

    render(
      <GridSelectionProvider>
        <TestComponent />
      </GridSelectionProvider>
    );

    expect(screen.getByText('No card selected')).toBeInTheDocument();
 
  });

  test('should load selected card from sessionStorage', () => {
   
    (getSessionStorage as jest.Mock).mockReturnValueOnce(FAKE_CARD);

    render(
      <GridSelectionProvider>
        <TestComponent />
      </GridSelectionProvider>
    );

    expect(screen.getByText(FAKE_CARD.title)).toBeInTheDocument();
    expect(screen.getByText(FAKE_CARD.date)).toBeInTheDocument();
 
  });

});


const TestComponent = () => {
  const { selectedCard } = useGridSelection();
  
  return (
    <div>
      {selectedCard ? (
        <>
          <h1>{selectedCard.title}</h1>
          <h2>{selectedCard.date}</h2>
        </>
      ) : (
        <span>No card selected</span>
      )}
    </div>
  );
};
