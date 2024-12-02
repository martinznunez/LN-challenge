import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {CustomImage} from '..'; 

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, onError }: { src: string; alt: string; onError: () => void }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} onError={onError} />
  ),
}));

const FAKE_SRC = 'https://example.com.jpg'
const FAKE_ALL_TEXT ='test image'

describe('CustomImage Component', () => {
  test('should load the image with the provided src', () => {
    render(<CustomImage src={FAKE_SRC} alt={FAKE_ALL_TEXT} />);

    const image = screen.getByAltText(FAKE_ALL_TEXT);
    expect(image).toHaveAttribute('src', FAKE_SRC);
  });

  test('should display fallback image on error', async () => {
    render(<CustomImage src={FAKE_SRC} alt={FAKE_ALL_TEXT} />);

    const image = screen.getByAltText(FAKE_ALL_TEXT);

    fireEvent.error(image);
    
    await waitFor( () => { 
      expect(image).toHaveAttribute('src', '/assets/LN.png');
    });

  });
});
