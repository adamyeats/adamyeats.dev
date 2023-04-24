import type React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Navigation: React.FC = () => (
  <nav role='navigation' aria-label='Navigation' className='navigation'>
    <ul className='navigation__icons'>
      <li className='navigation__icon'>
        <a href='https://github.com/adamyeats'>
          <FontAwesomeIcon
            icon={faGithubSquare}
            size='sm'
            fixedWidth
            listItem
          />
        </a>
      </li>
      <li className='navigation__icon'>
        <a href='https://www.linkedin.com/in/adam-yeats/'>
          <FontAwesomeIcon icon={faLinkedin} size='sm' fixedWidth listItem />
        </a>
      </li>
    </ul>
  </nav>
);
