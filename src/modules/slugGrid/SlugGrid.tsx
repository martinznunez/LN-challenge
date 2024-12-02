
import React from 'react';
import api from '@/app/api';
import { ERROR_LOADING_ARTICLES, NO_ARTICLES_FOUND, USES_IN_THE_KITCHEN } from '@/constants';
import { CustomCard, ErrorMessage, Title } from '@/components';

import { ArticlesData } from '../shared/domain';
import { formatDate } from '@/utils/date/formatDate';
import { fetchFilteredArticles, filterArticlesBySlug, mapArticlesData } from '../shared/utils/articlesUtils';
import { getFirstWord } from '@/utils/slugParser/getFirstWord';

interface SlugGridProps {
  slug: string;
}

export default async function SlugGrid({ slug }: SlugGridProps) {
  
  try {
    const filteredArticlesList = await fetchFilteredArticles(api);
  
    const mappedArticlesData: ArticlesData[] = mapArticlesData(filteredArticlesList);
         
    const filtersByTags: ArticlesData[] = filterArticlesBySlug(mappedArticlesData, slug);
  
    
    const firstWord = getFirstWord(slug);
   
    const titleText =
      filtersByTags.length === 0
        ? NO_ARTICLES_FOUND
        : `${firstWord} ${USES_IN_THE_KITCHEN}`;
   
    return (
      <div>
        <div>
          <Title level='h5' className="title-custom" titleValue={titleText} />
        </div>       
        <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            {filtersByTags?.map((article) => (
             <CustomCard
               key={article.id}
               title={article.title}
               date={formatDate(article.date)}
               imageUrl={article.imageUrl}
               link={article.link} 
               cardId={article.id}
             />
           ))} 
         </section>
      </div>
    );
  } catch (error) {
    return (
      <div className="error-message-container">
         <span className="error-icon">😞</span>
          <ErrorMessage  message={error instanceof Error ? error.message : ERROR_LOADING_ARTICLES} />
        </div>
      );
  }
}


