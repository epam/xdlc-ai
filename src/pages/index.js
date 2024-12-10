import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageIntro from './homepage-intro.mdx';
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
        <HomepageIntro />
        <HomepageFeatures />
        <HomepageText />
      </main>
    </Layout>
  );
}
