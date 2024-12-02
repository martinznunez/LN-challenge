export interface Article {
    _id: string;
    display_date: string;
    headlines: Headlines;
    promo_items: Promoitems;
    subtype: string;
    taxonomy: Taxonomy;
    website_url: string;
  }
  
  export interface RootObject {
    articles: Article[];
  }
  
  export interface Taxonomy {
    tags: Tag[];
  }
  
  export interface Tag {
    slug: string;
    text: string;
  }
  
  export interface Promoitems {
    basic: Basic;
  }
  
  export interface Basic {
    resized_urls: Resizedurl[];
    subtitle?: string;
    type: string;
    url: string;
  }
  
  export interface Resizedurl {
    option: Option;
    resizedUrl: string[];
  }
  
  export interface Option {
    media: string;
  }
  
  export interface Headlines {
    basic: string;
  }
  