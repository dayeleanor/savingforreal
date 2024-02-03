import readingTime from "reading-time";

const fetchGraphQL = async <T>(query: string): Promise<T> => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID || "";
  const token = process.env.CONTENTFUL_ACCESS_TOKEN || "";

  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json() as Promise<{ data: T }>);

  return result.data;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (inputStr: string) => {
  const dateObj = new Date(inputStr);
  const monthName = monthNames[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const outputStr = `${monthName} ${day}, ${year}`;
  return outputStr;
};

export interface IBlogPostThumbnail {
  title: string;
  url: string;
  width: number;
  height: number;
}

export interface IBlogPostCardData {
  lastUpdated: string;
  tags: string[];
  slug: string;
  excerpt: string;
  title: string;
  introduction: string;
  readingTime: string;
  body: string;
  thumbnail: IBlogPostThumbnail;
}

interface IBlogPostCollectionResponse<T> {
  blogPostCollection: {
    items: T[];
  };
}

export interface IBlogPostData {
  lastUpdated: string;
  excerpt: string;
  title: string;
  introduction: string;
  body: string;
  publishedAt: string;
}

export const getBlogPostBySlug = async (slug: string): Promise<IBlogPostData> => {
  const query = `#graphql    
    query {
      blogPostCollection(where: { slug: "${slug}"}) {
        items {
          lastUpdated
          excerpt
          title
          introduction
          body
          sys {
            publishedAt
          }
        }
      }
    }
  `;

  const response = await fetchGraphQL<IBlogPostCollectionResponse<IBlogPostData>>(query);
  const blogPost = response.blogPostCollection.items[0];

  blogPost.lastUpdated = formatDate(blogPost.lastUpdated);

  const contentfulPost = blogPost as unknown as { sys: { publishedAt: string } };
  blogPost.publishedAt = formatDate(contentfulPost.sys.publishedAt);

  return blogPost;
};

export const getAllBlogPostCards = async (
  limit?: number,
): Promise<IBlogPostCardData[]> => {
  const query = `#graphql    
    query {
      blogPostCollection${limit ? `(limit: ${limit})` : ""} {
        items {
          lastUpdated
          tags
          slug
          excerpt
          title
          introduction
          body
          thumbnail {
            title
            url
            width
            height
          }
        }
      }
    }
  `;

  const response = await fetchGraphQL<IBlogPostCollectionResponse<IBlogPostCardData>>(
    query,
  );
  const blogPosts = response.blogPostCollection.items;

  blogPosts.forEach((post) => {
    const stats = readingTime(post.body);
    post.readingTime = stats.text;
    post.lastUpdated = formatDate(post.lastUpdated);
  });

  return blogPosts;
};

export const getBlogPostSlugs = async (): Promise<string[]> => {
  const query = `#graphql    
    query {
      blogPostCollection {
        items {
          slug      
        }
      }
    }
  `;

  const response = await fetchGraphQL<IBlogPostCollectionResponse<{ slug: string }>>(
    query,
  );
  const blogPosts = response.blogPostCollection.items;
  const slugs = blogPosts.map((p) => p.slug);

  return slugs;
};
