import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SlugGrid from '../SlugGrid';
import * as articlesUtils from '../../shared/utils/articlesUtils';

import { useRouter } from 'next/router';
import { ERROR_LOADING_ARTICLES, USES_IN_THE_KITCHEN } from '@/constants';
import { getFirstWord } from '@/utils/slugParser/getFirstWord';


jest.mock('@/app/api', () => ({
  getArticles: jest.fn(),
}));

jest.mock('@/components', () => ({
  CustomCard: ({ title }: { title: string }) => <div>{title}</div>,
  ErrorMessage: ({ message }: { message: string }) => <div>{message}</div>,
  Title: ({ titleValue }: { titleValue: string }) => <div>{titleValue}</div>,
  
}));

jest.mock('../../shared/utils/articlesUtils', () => ({
  fetchFilteredArticles: jest.fn(),
    mapArticlesData: jest.fn(),
    filterArticlesBySlug: jest.fn(),
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
jest.mock('next/router', () => ({
    useRouter: jest.fn(), 
}));
  
jest.mock('@/utils/slugParser/getFirstWord', () => ({
  getFirstWord: jest.fn(),
}));


describe('SlugGrid', () => {
    beforeEach(() => {
        
        (articlesUtils.fetchFilteredArticles as jest.Mock).mockResolvedValue(mockFilteredArticlesList);
        (articlesUtils.mapArticlesData as jest.Mock).mockReturnValue(mockMappedArticlesData);
        (articlesUtils.filterArticlesBySlug as jest.Mock).mockReturnValue(mockMappedArticlesData);
        
      (useRouter as jest.Mock).mockReturnValue({ query: { slug: 'leche' } });
      (getFirstWord as jest.Mock).mockReturnValue('Leche');
    });
      


  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render articles and tags correctly', async () => {
    const gridComponent = await SlugGrid({slug:'leche'});
   
    render(
      <React.Suspense fallback={<div>Cargando...</div>}>
        {gridComponent}
      </React.Suspense>
    );

      expect(screen.getByText('Arroz con Leche')).toBeInTheDocument();
      const title = screen.getByText(`Leche ${USES_IN_THE_KITCHEN}`);
      expect(title).toBeInTheDocument()

 
  });
    
  test('should show error message when fetching articles fails', async () => {
    (articlesUtils.fetchFilteredArticles as jest.Mock).mockRejectedValue(new Error(ERROR_LOADING_ARTICLES));
    const gridComponent = await SlugGrid({slug:'leche'});
   
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




