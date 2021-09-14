import * as React from 'react';
import Layout from './../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Banff Mountains, Canada"
          src="..\images\banff-canada.jpg"
        />
      </Layout>
    </main>
  );
};

export default IndexPage;
