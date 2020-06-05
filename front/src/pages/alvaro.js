import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allStrapiRestaurants {
      distinct(field: id)
    }
  }
  
  `);

  console.log("data", data);
  return <div>hello alf</div>;
};

export default IndexPage;
