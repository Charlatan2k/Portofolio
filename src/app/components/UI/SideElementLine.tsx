'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

interface SideElementProps {
  orientation: 'left' | 'right';
  children: ReactNode;
}
const StyledSideElementLine = styled.div<SideElementProps>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${(props) => (props.orientation === 'left' ? 'auto' : '40px')};
`;

const SideElement = ({ orientation, children }: SideElementProps) => {
  return (
    <StyledSideElementLine orientation={orientation}>
      {children}
    </StyledSideElementLine>
  );
};

export default SideElement;
