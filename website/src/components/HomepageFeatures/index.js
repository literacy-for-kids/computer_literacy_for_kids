import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Internet Safety First',
    emoji: '🛡️',
    description: (
      <>
        Start with essential digital citizenship and internet safety skills.
        Learn how to navigate the digital world responsibly and securely.
      </>
    ),
  },
  {
    title: 'Hands-On Creative Learning',
    emoji: '🛠️',
    description: (
      <>
        Move from writing, drawing, and search skills into Scratch coding,
        debugging, final projects, and optional 3D design extensions.
      </>
    ),
  },
  {
    title: 'Future-Ready Skills',
    emoji: '🚀',
    description: (
      <>
        Build lasting confidence with AI literacy, systems thinking, digital problem
        solving, and project-based creation that goes beyond passive screen time.
      </>
    ),
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji} role="img">{emoji}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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