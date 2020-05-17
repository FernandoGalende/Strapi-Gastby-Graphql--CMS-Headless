import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const { allStrapiRestaurants } = data;
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {allStrapiRestaurants.edges.map(restaurant => (
        <li key={restaurant.node.id}>
          <h3>{restaurant.node.name}</h3>
          <Img fixed={restaurant.node.image.childImageSharp.fixed}></Img>
        </li>
      ))}

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;

export const PageQuery = graphql`
  query IndexQuery {
    allStrapiRestaurants {
      edges {
        node {
          id
          name
          description
          categories {
            id
            name
          }
          image {
            childImageSharp {
              fixed(width: 400) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
