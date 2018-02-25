import React from 'react';

export default ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark;
  return (
    <div>
      <h1>Pages</h1>
      <p>Number of pages: {totalCount}</p>
      {edges.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.fields.slug}</p>
          {node.frontmatter.date && <p>{node.frontmatter.date}</p>}
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query indexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
          html
        }
      }
    }
  }
`;
