import React from 'react';
import Link from '@docusaurus/Link';
import ecosystemLinks from 'literacy-site-theme/ecosystemLinks';

import styles from './styles.module.css';

export default function EcosystemLinks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Literacy for Kids ecosystem</p>
          <h2 className={styles.title}>Explore the full curriculum network</h2>
          <p className={styles.description}>
            This site is one part of a broader set of open curricula designed to help kids
            understand the world more clearly.
          </p>
        </div>
        <div className={styles.grid}>
          {ecosystemLinks.map((link) => (
            <Link key={link.href} className={styles.card} to={link.href}>
              <span className={styles.cardTitle}>{link.label}</span>
              <span className={styles.cardDescription}>{link.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}