import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ data, children }) => {
  const title = data.site.siteMetadata.title;
  return (
    <div>
      <Helmet title={title} meta={[{ name: 'description', content: title }]} />
      <Header title={title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '2rem',
        }}
      >
        {children()}
      </div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
