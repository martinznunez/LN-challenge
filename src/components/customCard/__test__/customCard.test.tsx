import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {CustomCard} from '../';  
import { useGridSelection } from '@/contexts';
import userEvent from '@testing-library/user-event';

jest.mock('@/contexts', () => ({
  useGridSelection: jest.fn(),
}));
  

const FAKE_TITLE = 'Sample Title';
const FAKE_DATE = '2024-11-29';
const FAKE_IMAGE_URL = 'https://via.placeholder.com';
const FAKE_LINK = '/sample-link';
const FAKE_CARD_ID = '12345';

describe('CustomCard Component', () => {

  beforeEach(() => {
   
      jest.clearAllMocks();
      
      (useGridSelection as jest.Mock).mockReturnValue({
        setSelectedCard: jest.fn(),
      });
  });

  test('renders card with correct title, date, and image', () => {
    render(
      <CustomCard
        title={FAKE_TITLE}
        date={FAKE_DATE}
        imageUrl={FAKE_IMAGE_URL}
        link={FAKE_LINK}
        cardId={FAKE_CARD_ID}
      />
    );

    expect(screen.getByText(FAKE_TITLE)).toBeInTheDocument();
    expect(screen.getByText(FAKE_DATE)).toBeInTheDocument();
   
    const image = screen.getByRole('img', { name: FAKE_TITLE });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', FAKE_TITLE);
    expect(image).toHaveAttribute('src');


   
  });

  test('calls setSelectedCard on card click',async () => {
    const mockSetSelectedCard = jest.fn();
    (useGridSelection as jest.Mock).mockReturnValue({ setSelectedCard: mockSetSelectedCard });

    render(
      <CustomCard
        title={FAKE_TITLE}
        date={FAKE_DATE}
        imageUrl={FAKE_IMAGE_URL}
        link={FAKE_LINK}
         cardId={FAKE_CARD_ID}
         disableClick={false}
      />
    );

    const image = screen.getByRole('img', { name: FAKE_TITLE });

    await userEvent.click(image);
    
     const link = screen.getByRole('link');
   
    expect(link).toHaveClass('figure custom-card-link');

    expect(mockSetSelectedCard).toHaveBeenCalledWith({
      title: FAKE_TITLE,
      date: FAKE_DATE,
      imageUrl: FAKE_IMAGE_URL,
      link: FAKE_LINK,
      cardId: FAKE_CARD_ID,
      
    });
   
  });

  test('does not call setSelectedCard on card click when disableClick is true',async () => {
    const mockSetSelectedCard = jest.fn();
    (useGridSelection as jest.Mock).mockReturnValue({ setSelectedCard: mockSetSelectedCard });

    render(
      <CustomCard
        title={FAKE_TITLE}
        date={FAKE_DATE}
        imageUrl={FAKE_IMAGE_URL}
        link={FAKE_LINK}
        cardId={FAKE_CARD_ID}
        disableClick={true}
      />
    );

    const link = screen.getByRole('link');
 
    expect(link).toHaveClass('disabled-link');
    const image = screen.getByRole('img', { name: FAKE_TITLE });

    await userEvent.click(image);

    expect(mockSetSelectedCard).not.toHaveBeenCalled();

  
  });


});
