import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

const BlogPostTemplate = ({ data, children }) => {
  const { t } = useTranslation();
  return data.mdx ? (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>
        {t("modified")}: {data.mdx.frontmatter.date}
      </p>
       {children}
    </Layout>
  ) : (
    <p>nothing!</p>
  );
};

export const query = graphql`
  query ($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      body
      frontmatter {
        date
        title
        slug
      }
    }
  }
`;

export default BlogPostTemplate;
