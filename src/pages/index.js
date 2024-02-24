import React from 'react';
import { graphql, Link } from 'gatsby';
//import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import { useTranslation } from 'react-i18next';

const BlogPage = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Layout pageTitle={t('course-list')}>
      <ul>
        {data.allMdx.nodes.map((node) => {
          return (
            <li key={node.frontmatter.slug} style={{ listStyleType: 'none' }}>
              <article>
                <h2>
                  <Link
                    className='fw-light'
                    to={'courses/' + node.frontmatter.slug}
                  >
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>
                  {t('modified')}: {node.frontmatter.date}
                </p>
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
  query BlogPosts($locale: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          date
          title
          slug
        }
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
