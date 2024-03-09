import BlogCard from "../../components/blog/blog-card";
import Layout from "../../components/layout";
import Section from "../../internal/components/section";
import { getAllBlogPostCards, IBlogPostCardData } from "../../contentful/queries";
import { HeadingBlock } from "../../components/content-blocks/heading-block";

interface IBlogPageProps {
  posts: IBlogPostCardData[];
}

const BlogPage: React.FC<IBlogPageProps> = ({ posts }) => (
  <Layout title="Blog Posts">
    {/* <BlogBanner /> */}
    <HeadingBlock heading="Recent Blog Posts" tag="h1" />
    <Section bgColor="white">
      <Section.GridContainer columns={3}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            key={post.title}
            tags={post.tags}
            lastUpdated={post.lastUpdated}
            slug={post.slug}
            thumbnail={post.thumbnail}
            readingTime={post.readingTime}
          >
            {post.excerpt}
          </BlogCard>
        ))}
      </Section.GridContainer>
    </Section>
  </Layout>
);

export async function getStaticProps() {
  const posts = await getAllBlogPostCards();

  return {
    props: { posts },
  };
}

export default BlogPage;
