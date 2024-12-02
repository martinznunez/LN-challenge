import { getFirstWord } from '../getFirstWord';

describe('getFirstWord', () => {
  test('should return the first word of a slug when there are multiple words', () => {
    const slug = 'leche-condensada';
    const result = getFirstWord(slug);
    expect(result).toBe('leche');
  });

  test('should return the entire slug when there is no hyphen', () => {
    const slug = 'leche';
    const result = getFirstWord(slug);
    expect(result).toBe('leche');
  });

  test('should return an empty string if the slug is empty', () => {
    const slug = '';
    const result = getFirstWord(slug);
    expect(result).toBe('');
  });


  test('should handle slugs with only hyphens', () => {
    const slug = '---';
    const result = getFirstWord(slug);
    expect(result).toBe('');
  });
});
