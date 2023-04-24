import type React from 'react';

export const Hero: React.FC = () => (
  <section className='hero'>
    <div className='hero__container'>
      <h1 className='hero__title'>
        Hi, I’m <span className='hero__name'>Adam</span>.
      </h1>
      <p className='hero__description'>
        I’m a software engineer from 🇳🇱 (but originally from 🇬🇧).
      </p>
      <p className='hero__description'>
        I use JavaScript, TypeScript, Go and Rust to make things.
      </p>
      <p className='hero__description'>
        I currently work as a senior software engineer at{' '}
        <span className='hero__name'>???</span>.
      </p>
      <p className='hero__description'>
        Previously I worked at Elastic, DEPT®, AppSignal and several other
        companies.
      </p>
    </div>
  </section>
);
