import React from "react";
import Menu from "./Menu";
//import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import { Container } from "reactstrap";
import "./custom.scss";

const Layout = ({ pageTitle, children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //         author
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Menu />
      <Container>
        <main>
          <h1 style={{ marginTop: 100, marginBottom: 20 }} className="fw-light">
            {pageTitle}
          </h1>
          {children}
        </main>
      </Container>
    </>
  );
};

export default Layout;
