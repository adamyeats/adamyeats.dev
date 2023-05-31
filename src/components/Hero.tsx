import type React from 'react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => (
  <section className={styles['hero']}>
    <div className={styles['hero__container']}>
      <h1 className={styles['hero__title']}>
        Hi, I’m <span className={styles['hero__name']}>Adam</span>.
      </h1>
      <p className={styles['hero__description']}>
        I’m a software engineer from 🇳🇱 (but originally from 🇬🇧).
      </p>
      <p className={styles['hero__description']}>
        I use JavaScript, TypeScript, Go and Rust to make things.
      </p>
      <p className={styles['hero__description']}>
        I currently work as a senior software engineer at{' '}
        <span className={styles['hero__name']}>Grafana Labs</span>.
      </p>
      <p className={styles['hero__description']}>
        Previously I worked at Elastic, DEPT®, AppSignal and several other
        companies.
      </p>
    </div>
  </section>
);
