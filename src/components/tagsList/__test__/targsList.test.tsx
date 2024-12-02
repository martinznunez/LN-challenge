import { render, screen } from '@testing-library/react';
import {TagsList} from '..';

const mockTags = [
  { slug: 'tag-1', text: 'Tag 1',count:0 },
  { slug: 'tag-2', text: 'Tag 2',count:0 },
  { slug: 'tag-3', text: 'Tag 3',count:0 },
];

describe('TagsList Component', () => {

  test('renders the correct number of tags', () => {
    render(<TagsList tags={mockTags} />);
      
      const tags = screen.getAllByRole('link');
      expect(tags).toHaveLength(mockTags.length);
    
      mockTags.forEach((tag) => {
        expect(screen.getByText(tag.text)).toBeInTheDocument();
      });  
  });

  test('renders the correct separators between tags', () => {
    render(<TagsList tags={mockTags} />);
      
      const separators = screen.getAllByText('.', { exact: true });
      expect(separators).toHaveLength(mockTags.length - 1);
      
  });
  test('renders the correct URL in the link for each tag', () => {
   render(<TagsList tags={mockTags} />);
    
      const firstTagLink = screen.getByText(mockTags[0].text);
      
      expect(firstTagLink).toHaveAttribute('href', `/tema/${mockTags[0].slug}`);
  });

});
