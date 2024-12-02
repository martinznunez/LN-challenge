import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ArticlesGrid from '../../articlesGrid/ArticlesGrid';
import * as articlesUtils from '../../shared/utils/articlesUtils';
import { ERROR_LOADING_ARTICLES } from '@/constants';
import { Tags } from '../../shared/domain';

jest.mock('@/app/api', () => ({
  getArticles: jest.fn(),
}));

jest.mock('@/components', () => ({
  CustomCard: ({ title }: { title: string }) => <div>{title}</div>,
  ErrorMessage: ({ message }: { message: string }) => <div>{message}</div>,
  TagsList: ({ tags }: { tags: Tags[] }) => <div>{tags.length} tags</div>,
}));

jest.mock('../../shared/utils/articlesUtils', () => ({
  fetchFilteredArticles: jest.fn(),
  mapArticlesData: jest.fn(),
  getTagCount: jest.fn(),
  getSortedTags: jest.fn(),
}));

const mockFilteredArticlesList = [
  {
    display_date: '2019-12-06T17:50:17.735Z',
    headlines: { basic: 'Arroz con Leche' },
    promo_items: { basic: { url: 'https://example.com/image.jpg' } },
    subtype: '7',
    taxonomy: {
      tags: [
        { slug: 'leche-tid47244', text: 'Leche' },
        { slug: 'leche-condensada-tid47751', text: 'Leche condensada' },
      ]
    },
    website_url: '/recetas/postres/arroz-con-leche-nid29102019-6/',
    _id: 'ZNJ67CCHJNAEBE6IUETWOXMNFM'
  }
];

const mockMappedArticlesData = [
  {
    id: 'ZNJ67CCHJNAEBE6IUETWOXMNFM',
    title: 'Arroz con Leche',
    date: '2019-12-06T17:50:17.735Z',
    imageUrl: 'https://example.com/image.jpg',
    link: '/tema/leche-tid47244',
    tags: [
      { slug: 'leche-tid47244', text: 'Leche' },
      { slug: 'leche-condensada-tid47751', text: 'Leche condensada' },
    ]
  }
];



describe('ArticlesGrid', () => {
  beforeEach(() => {
    (articlesUtils.fetchFilteredArticles as jest.Mock).mockResolvedValue(mockFilteredArticlesList);
    (articlesUtils.mapArticlesData as jest.Mock).mockReturnValue(mockMappedArticlesData);
    (articlesUtils.getTagCount as jest.Mock).mockReturnValue({
      'Leche': 1,
      'Leche condensada': 1,
    });
    (articlesUtils.getSortedTags as jest.Mock).mockReturnValue([
      { slug: 'leche-tid47244', text: 'Leche' },
      { slug: 'leche-condensada-tid47751', text: 'Leche condensada' },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render articles and tags correctly', async () => {
   
    const gridComponent = await ArticlesGrid();
  
    render(
      <React.Suspense fallback={<div>Cargando...</div>}>
        {gridComponent}
      </React.Suspense>
    );

    await waitFor(() => {
      expect(screen.getByText('Arroz con Leche')).toBeInTheDocument();
      expect(screen.getByText('2 tags')).toBeInTheDocument();
    });

 
  });

  test('should show error message when fetching articles fails', async () => {
   
    (articlesUtils.fetchFilteredArticles as jest.Mock).mockRejectedValue(new Error(ERROR_LOADING_ARTICLES));
  
    const gridComponent = await ArticlesGrid();
  
    render(
      <React.Suspense fallback={<div>Cargando...</div>}>
        {gridComponent}
      </React.Suspense>
    );
    
    await waitFor(() => {
      expect(screen.getByText(ERROR_LOADING_ARTICLES)).toBeInTheDocument();

    });  
 
  });


});




