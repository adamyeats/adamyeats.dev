import type React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './Navigation.module.css';

export const Navigation: React.FC = () => (
  <nav role='navigation' aria-label='Navigation' className={styles['navigation']}>
    <ul className={styles['navigation__icons']}>
      <li className={styles['navigation__icon']}>
        <a href='https://github.com/adamyeats'>
          <FontAwesomeIcon
            icon={faGithubSquare}
            size='sm'
            fixedWidth
            listItem
          />
        </a>
      </li>
      <li className={styles['navigation__icon']}>
        <a href='https://www.linkedin.com/in/adam-yeats/'>
          <FontAwesomeIcon icon={faLinkedin} size='sm' fixedWidth listItem />
        </a>
      </li>
    </ul>
  </nav>
);
