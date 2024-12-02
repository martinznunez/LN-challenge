
import { Articles, Tags } from '../../domain';
import api from '@/app/api';
import { fetchFilteredArticles, getSortedTags, getTagCount, mapArticlesData } from '../articlesUtils';

jest.mock('@/app/api', () => ({
  getArticles: jest.fn(),
}));

describe('articlesUtils', () => {
  const mockArticles: Articles[] = [
    {
      _id: '1',
      display_date: '2023-01-01T00:00:00.000Z',
      headlines: { basic: 'Test Article' },
      promo_items: { basic: {
          url: 'https://example.com/image.jpg',
          resized_urls: [],
          type: ''
      } },
      subtype: '7',
      taxonomy: {
        tags: [
          { slug: 'tag1', text: 'Tag 1' },
          { slug: 'tag2', text: 'Tag 2' },
        ],
      },
      website_url: '/test-article',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetchFilteredArticles', async () => {
    (api.getArticles as jest.Mock).mockResolvedValue(mockArticles);
    const result = await fetchFilteredArticles(api);
    expect(result).toEqual(mockArticles);
    expect(api.getArticles).toHaveBeenCalledTimes(1);
  });

  test('mapArticlesData', () => {
    const result = mapArticlesData(mockArticles);
    expect(result).toEqual([
      {
        id: '1',
        title: 'Test Article',
        date: '2023-01-01T00:00:00.000Z',
        imageUrl: 'https://example.com/image.jpg',
        link: '/receta/tag1',
        tags: [
          { slug: 'tag1', text: 'Tag 1' },
          { slug: 'tag2', text: 'Tag 2' },
        ],
      },
    ]);
  });

  test('getTagCount', () => {
    const tags: Tags[] = [
      { slug: 'tag1', text: 'Tag 1' },
      { slug: 'tag2', text: 'Tag 2' },
      { slug: 'tag1', text: 'Tag 1' },
    ];
    const result = getTagCount(tags);
    expect(result).toEqual({ tag1: 2, tag2: 1 });
  });

  test('getSortedTags', () => {
    const tagsCount = { tag1: 2, tag2: 1 };
    const allTags: Tags[] = [
      { slug: 'tag1', text: 'Tag 1' },
      { slug: 'tag2', text: 'Tag 2' },
    ];
    const result = getSortedTags(tagsCount, allTags);
    expect(result).toEqual([
      { slug: 'tag1', text: 'Tag 1', count: 2 },
      { slug: 'tag2', text: 'Tag 2', count: 1 },
    ]);
  });
});

