'use client';

import styled from 'styled-components';
import { email } from '@/config';
import SideElement from './SideElementLine';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--foreground);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transition: all 0.1s ease-in-out;
      transform: translateY(-3px);
    }
  }
`;

const Email = () => (
  <SideElement orientation='right'>
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </SideElement>
);

export default Email;
