export const getFirstWord = (slug: string): string => {
    const [firstWord] = slug.split('-');
    return firstWord || '';
  };
  