'use client';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  children: string;
  className?: string;
  size?: 'big';
  onClick?: () => string;
  needsFontAdjustment?: boolean; // New prop to control font size adjustment
}

const GenericButton = styled.button.attrs((props) => ({
  className: props.className,
}))<ButtonProps & { lang: string }>`
  width: ${(props) => {
    switch (props.size) {
      case 'big':
        return '210px';
      default:
        return '146px';
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case 'big':
        return '60px';
      default:
        return '50px';
    }
  }};
  border: 2px solid #5dd2c0;
  border-radius: 5px;
  font-size: ${(props) => {
    if (props.needsFontAdjustment && props.lang === 'es') {
      return props.size === 'big' ? '22px' : '18px';
    }
    return props.size === 'big' ? '25px' : '20px';
  }};
  font-family: 'Montserrat', 'SF Mono', 'Consolas', 'Lucida Console', monospace;
  text-align: center;
  letter-spacing: 3px;
  transition: all 0.12s ease-in-out;

  &:hover {
    background-color: var(--primary-gray);
    color: var(--primary-blue);
    font-weight: bold;
    border: 2px solid var(--primary-blue);
  }
`;

const Button = ({
  children,
  className,
  size,
  onClick,
  needsFontAdjustment,
}: ButtonProps) => {
  const { i18n } = useTranslation(); // Get current language
  const currentLang = i18n.language;

  return (
    <GenericButton
      onClick={onClick}
      className={className}
      size={size}
      lang={currentLang}
      needsFontAdjustment={needsFontAdjustment}
    >
      {children}
    </GenericButton>
  );
};

export default Button;
