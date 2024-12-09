import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageText from './homepage-text.mdx';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <Heading as="h1" style={{fontSize: '1000%'}}>
          <span style={{opacity: '0.25'}}>&lt;</span>&nbsp;
          x
          <strong>dlc</strong>
          .ai
          &nbsp;
          <span style={{opacity: '0.25'}}>/&gt;</span>
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
        <HomepageText />
      </main>
    </Layout>
  );
}
