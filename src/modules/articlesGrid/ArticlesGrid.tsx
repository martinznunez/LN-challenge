

import React from 'react';
import { ArticlesData, Tags } from '../shared/domain';
import { formatDate } from '@/utils/date/formatDate';
import api from '@/app/api';
import { fetchFilteredArticles, getSortedTags, getTagCount, mapArticlesData } from '../shared/utils/articlesUtils';

import { ERROR_LOADING_ARTICLES } from '@/constants';
import { CustomCard, ErrorMessage, TagsList } from '@/components';

export default async function ArticlesGrid() {
  try {
    const filteredArticlesList = await fetchFilteredArticles(api);

    const mappedArticlesData: ArticlesData[] = mapArticlesData(filteredArticlesList);

    const allArticleTags: Tags[] = mappedArticlesData.flatMap((article) => article.tags);

    const tagsCount = getTagCount(allArticleTags);
   
    const tagsSortedByFrequency = getSortedTags(tagsCount, allArticleTags);
    
    const topFrequentTags = tagsSortedByFrequency.slice(0, 10);


    
    return (
      <div>
        <TagsList tags={topFrequentTags} />
        <section  className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
          {mappedArticlesData.map((article) => (
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
