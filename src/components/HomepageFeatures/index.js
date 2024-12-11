import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cookbook',
    url: '/docs/Lessons-learned',
    description: (
      <>
        A collection of evidense-based insights and recipies, common pitfals, role-based (Dev, BA, QA, etc.) manuals. We hope that you will find them useful.
      </>
    ),
  },
  {
    title: 'LLM Leaderboard',
    url: '/llms',
    description: (
      <>
        Our LLM evaluation harness focuses on real world tasks. Not solving code competition tasks or creating single file applications (like HumanEval does).
      </>
    ),
  },
  {
    title: 'Coding Assistants',
    url: '/coding-assistants',
    description: (
      <>
        We attempted (and mamanged) to consistently and systematically evaluate AI coding assistants, it's apples-to-apples now.
        <br />
        🍎 🍏
      </>
    ),
  },
];

function Feature({ title, description, url }) {
  return (
    <div className={clsx('col col--4')}>
      <a href={url} className="text--center padding-horiz--md" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
