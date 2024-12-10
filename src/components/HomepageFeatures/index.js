import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cookbook',
    url: '/docs/Lessons-learned',
    description: (
      <>
        We have collected evidense based insights on AI adoption in SDLC, collected a bunch of concrete recipies and common pitfals. We hope that you will find them useful.
      </>
    ),
  },
  {
    title: 'LLM Leaderboard',
    url: '/llms',
    description: (
      <>
        Our LLM evaluation harness focuses on real world relevant tasks, not solving code competition tasks or creating single file applications.
      </>
    ),
  },
  {
    title: 'Coding Assistants',
    url: '/coding-assistants',
    description: (
      <>
        We attempted (and it seems we mamanged) to create systematically evaluate various coding assistants. It's apples-to-apples now when we compare GitHub Copilot and the rest
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
