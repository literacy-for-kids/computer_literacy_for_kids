import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const features = [
  {
    title: 'Computers Respond to Inputs',
    description:
      'Students learn that computers follow instructions and respond to commands in predictable ways.',
  },
  {
    title: 'Digital Work Persists',
    description:
      'Students see how files and folders store work so it can be saved, organized, and revisited later.',
  },
  {
    title: 'The Internet Is Made of People',
    description:
      'Students connect online communication to real people and practice digital citizenship as they learn.',
  },
  {
    title: 'Algorithms Influence What We See',
    description:
      'Students explore how search engines and recommendation systems shape what they find online.',
  },
  {
    title: 'Creation Over Consumption',
    description:
      'Students use computers as tools for building, writing, drawing, coding, and making things of their own.',
  },
];

const roadmapSections = [
  {
    title: 'Digital Foundations',
    weeks: 'Weeks 1-4',
    description:
      'Internet literacy, systems thinking, files, typing',
  },
  {
    title: 'Communication & Media',
    weeks: 'Weeks 5-7',
    description:
      'Text, images, search literacy',
  },
  {
    title: 'Coding & Problem Solving',
    weeks: 'Weeks 8-11',
    description:
      'Planning projects, Scratch programming, debugging',
  },
  {
    title: 'Technology Systems',
    weeks: 'Weeks 12-14',
    description:
      'How digital systems work and introduction to AI',
  },
  {
    title: 'Creative Project',
    weeks: 'Weeks 15-18',
    description:
      'Students build their own digital artifact',
  },
];

function FeatureCard({title, description}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function RoadmapCard({title, weeks, description}) {
  return (
    <article className={styles.roadmapCard}>
      <p className={styles.eyebrow}>{weeks}</p>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Introduction</Heading>
          <p className={styles.sectionLead}>
            Computer Literacy for Kids is designed to help educators and families move beyond
            basic device use and into deeper understanding. Students learn how computers respond,
            how digital work is stored, how online systems shape what they see, and how to use
            technology for creation instead of passive consumption.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Core Concepts</Heading>
          <p className={styles.sectionLead}>
            The curriculum is organized around a set of mental models that help students understand
            computers and the internet in practical, durable ways.
          </p>
          <div className={styles.cardGrid}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Curriculum Roadmap</Heading>
          <p className={styles.sectionLead}>
            The learning progression moves from digital foundations into communication, coding,
            systems thinking, and a final creative project.
          </p>
          <div className={styles.roadmapGrid}>
            {roadmapSections.map((section) => (
              <RoadmapCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <Heading as="h2">Start Teaching Computer Literacy</Heading>
          <p className={styles.sectionLead}>
            Begin with Week 1 and give students a clearer understanding of how computers,
            the internet, and digital tools actually work.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/week1">
              Begin Week 1
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}