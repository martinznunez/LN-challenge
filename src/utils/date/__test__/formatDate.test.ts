import { formatDate } from '../formatDate'; 

describe('formatDate function', () => {
  
  test('should return formatted date for valid date string', () => {
    const date = '2024-11-30T00:00:00Z';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('30 de noviembre de 2024');
  });

  test('should return formatted date for valid Date object', () => {
    const date = new Date('2024-11-30T00:00:00Z');
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('30 de noviembre de 2024');
  });

  test('should return -- for invalid date string', () => {
    const date = 'invalid-date';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('--');
  });
});
