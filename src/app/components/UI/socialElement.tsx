'use client';

import styled from 'styled-components';
import SideElement from './SideElementLine';
import { socialMedia } from '@/config';
import Icon from './IconComponent';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background-color: white;
  }

  li {
    :last-of-type {
      margin-bottom: 5px;
    }

    a {
      padding: 10px;
      display: inline-block;

      :hover,
      :focus {
        transition: all 0.2s ease-in-out;
        transform: translateY(-3px);
      }

      div {
        display: block;
      }

      svg {
        width: 20px;
        height: 20px;
        display: block;
        pointer-events: none;
      }
    }
  }
`;

const Social = () => (
  <SideElement orientation='left'>
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target='_blank' rel='noreferrer'>
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </SideElement>
);

export default Social;
