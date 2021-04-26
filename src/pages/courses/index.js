import React from 'react';
import { graphql, Link } from 'gatsby';
//import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='List of courses'>
      <ul>
        {data.allMdx.nodes.map((node) => {
          return (
            <li key={node.slug}>
              <article>
                <h2>
                  <Link to={node.slug}>{node.frontmatter.title}</Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
              </article>
              <hr />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const queries2 = graphql`
  query BlogPosts {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        slug
      }
    }
  }
`;

// allFile(filter: { dir: { regex: "/blog$/i" } }) {
//     nodes {
//       name
//     }
//   }

export default BlogPage;
