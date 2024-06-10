import { SanityDocument } from "@sanity/types";

export interface ISanityImage {
  asset: {
    _ref: string;
    _type: "reference";
    url: "string";
  };
}

export interface IStaticPage extends SanityDocument {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  keywords: string;
  excerpt: string;
  mainImage: ISanityImage;
  publishedAt: string;
  content?: any;
}

/* 
{
    publishedAt: '2023-07-04T21:15:26.932Z',
    _id: 'eb0cb39f-1d0a-4285-a3af-7357968bb1d6',
    title: 'DarkMode Context API',
    slug: { current: 'darkmode-context-api', _type: 'slug' },
    excerpt: 'It enables to add dark mode switch.',
    language: { name: 'React', image: [Object] }
  }


*/
