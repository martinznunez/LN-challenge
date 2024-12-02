import { Articles, ArticlesData, Tags } from "../domain";


export const fetchFilteredArticles = async (api: { getArticles: () => Promise<Articles[]> }) => {
  const allArticlesList = await api.getArticles();
 
  const filteredArticles = allArticlesList.slice(0,30);
  return filteredArticles.filter((article) => article.subtype === '7');
};

export const mapArticlesData = (articles: Articles[]): ArticlesData[] => {
  return articles.map((article) => ({
    id: article._id,
    title: article.headlines.basic,
    date: article.display_date,
    imageUrl: article.promo_items?.basic.url,
    link: `/receta/${article.taxonomy.tags[0]?.slug || ''}`,
    tags: article.taxonomy.tags,
   
  }));
};

export const getTagCount = (allTags: Tags[]): { [key: string]: number } => {
  return allTags.reduce((acc, tag) => {
    acc[tag.slug] = (acc[tag.slug] || 0) + 1;
    
    return acc;
  }, {} as { [key: string]: number });
};

export const getSortedTags = (tagsCount: { [key: string]: number }, allTags: Tags[]): { slug: string, text: string, count: number }[] => {
  return Object.keys(tagsCount)
    .map((slug) => ({
      slug,
      text: allTags.find((tag) => tag.slug === slug)?.text || slug,
      count: tagsCount[slug],
    }))
    .sort((a, b) => b.count - a.count);
};



export const filterArticlesBySlug = (articles: ArticlesData[], slug: string): ArticlesData[] => {
  return articles.filter((article) =>
    article.tags.some((tag) => tag.slug === slug)
  );
};