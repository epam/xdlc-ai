import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <pre className="hero__title" style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
          {`
     ______ _     _____        _ 
     |  _  \\ |   /  __ \\      (_)
__  _| | | | |   | /  \\/  __ _ _ 
\\ \\/ / | | | |   | |     / _\` | |
 >  <| |/ /| |___| \\__/\\| (_| | |
/_/\\_\\___/ \\_____/\\____(_)__,_|_|
          `}
        </pre>
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
