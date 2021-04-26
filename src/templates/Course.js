import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
//import { Container } from 'reactstrap';
import Layout from '../components/layout';

const BlogPostTemplate = ({ data }) => {
  return data.mdx ? (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  ) : (
    <p>nothing!</p>
  );
};

export const query = graphql`
  query($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
      }
    }
  }
`;

export default BlogPostTemplate;
