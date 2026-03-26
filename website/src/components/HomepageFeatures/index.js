import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import {literacyCurricula, literacyHub} from '@site/src/data/literacyLinks';
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
    weeks: 'Weeks 5-8',
    description:
      'Text, images, search strategy, Wikipedia, and source awareness',
  },
  {
    title: 'Coding & Problem Solving',
    weeks: 'Weeks 9-11',
    description:
      'Algorithms, Scratch programming, debugging',
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
  const roadmapImageUrl = useBaseUrl('/img/roadmap.png');

  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Introduction</Heading>
          <p className={styles.sectionLead}>
            Computer Literacy for Kids is designed to help educators, families, and facilitators move beyond
            basic device use and into deeper understanding. Built for ages 8–12, this 18-week curriculum
            works in classrooms, homeschool settings, libraries, and after-school programs. Students learn
            how computers respond, how digital work is stored, how online systems shape what they see,
            and how to use technology for creation instead of passive consumption.
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
            The learning progression moves from digital foundations into communication and
            information literacy, coding, systems thinking, and a final creative project.
          </p>
          <div className={styles.roadmapVisual}>
            <img
              className={styles.roadmapImage}
              src={roadmapImageUrl}
              alt="Visual roadmap showing the Computer Literacy for Kids curriculum sequence"
            />
          </div>
          <div className={styles.roadmapGrid}>
            {roadmapSections.map((section) => (
              <RoadmapCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Part of the Literacy for Kids Project</Heading>
          <p className={styles.sectionLead}>
            This curriculum is part of Literacy for Kids, a collection of open-source
            curricula designed to help children ages 8–12 understand the systems that
            shape the modern world.
          </p>
          <p className={styles.sectionLead}>
            Each curriculum focuses on a different foundational life skill. You can
            explore the full curriculum collection here:
          </p>
          <p className={styles.hubLink}>
            <Link to={literacyHub.href}>
              ➡ Literacy for Kids Hub
            </Link>
          </p>
          <Heading as="h3">Explore the Other Literacies</Heading>
          <div className={styles.cardGrid}>
            {literacyCurricula.map((literacy) => (
              <article key={literacy.title} className={styles.card}>
                <Heading as="h4">{literacy.title}</Heading>
                <p>{literacy.description}</p>
                <Link className={styles.inlineLink} to={literacy.href}>
                  Visit curriculum
                </Link>
              </article>
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
          <p className={styles.feedbackPrompt}>
            Found a mistake or have a suggestion?{' '}
            <Link to="https://github.com/zcohen-nerd/computer_literacy_for_kids/issues">
              Open an issue on GitHub.
            </Link>
          </p>
          <div className={styles.versionNote}>
            <p className={styles.versionLabel}>Version 2.0</p>
            <p>
              This curriculum is an open project and will continue to improve as
              teachers and families use it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
