import BlogBanner from "../../components/banners/blog-banner";
import BlogCard from "../../components/blog/blog-card";
import Layout from "../../components/layout";
import Section from "../../components/layout/section";
import { getAllBlogPostCards, IBlogPostCardData } from "../../contentful/queries";

interface IBlogPageProps {
  posts: IBlogPostCardData[];
}

const BlogPage: React.FC<IBlogPageProps> = ({ posts }) => (
  <Layout title="Blog Posts">
    {/* <BlogBanner /> */}

    <Section bgColor="white">
      <Section.Header title="Recent Blog Posts" tag="h3" />
      <Section.Rows columns={3}>
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
      </Section.Rows>
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
