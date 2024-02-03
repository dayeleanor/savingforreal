import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";
import BlogPageHeaderInfo from "../../components/blog/blog-page-header-info";
import Layout from "../../components/layout";
import Article from "../../components/layout/article";
import Section from "../../components/layout/section";
import {
  getBlogPostBySlug,
  getBlogPostSlugs,
  IBlogPostData,
} from "../../contentful/queries";

interface IBlogPageProps {
  post: IBlogPostData;
}

const BlogPostPage: React.FC<IBlogPageProps> = ({ post }) => (
  <Layout title={post.title}>
    <Section>
      <Section.Header title={post.title} tag="h1">
        <p>{post.excerpt}</p>
        <BlogPageHeaderInfo post={post} />
      </Section.Header>
    </Section>
    <Section bgColor="white">
      <Section.Rows>
        <Article>
          <Section.Markdown includeToC={false}>{post.introduction}</Section.Markdown>

          {post.introduction && <br />}
          <Section.Markdown includeToC>{post.body}</Section.Markdown>
        </Article>
      </Section.Rows>
    </Section>
  </Layout>
);

// Generates `/blog/[slug]`
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getBlogPostSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  const result: GetStaticPathsResult = {
    paths: paths,
    fallback: false,
  };

  return result;
};

export const getStaticProps: GetStaticProps<IBlogPageProps> = async (context) => {
  const params = context.params as ParsedUrlQuery;
  const post = await getBlogPostBySlug(params.slug as string);

  const result: GetStaticPropsResult<IBlogPageProps> = {
    props: { post },
  };

  return result;
};

export default BlogPostPage;
