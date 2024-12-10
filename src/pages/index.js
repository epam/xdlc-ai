import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageText from './homepage-text.mdx';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <Heading as="h1">
          <span style={{opacity: '0.25'}}>&lt;&nbsp;</span>
          x
          <strong>dlc</strong>
          .ai
          
          <span style={{opacity: '0.25'}}>&nbsp;/&gt;</span>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main className="container">
        <p>How do you navigate the landscape of AI tools and products? How do you make informed decisions about which tools to use and when? How do you use them effectively? How do you integrate them into your SDLC? What are the best practices and recommendations for using AI in software development?</p>
        <HomepageFeatures />
        <HomepageText />
      </main>
    </Layout>
  );
}
