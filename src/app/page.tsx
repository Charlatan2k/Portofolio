// src/app/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // Make sure the path is correct
import Nav from './components/Sections/Nav';
import Head from './components/Sections/Head';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Social from './components/UI/socialElement';
import Loader from './components/UI/Loader';
import Email from './components/UI/EmailElement';
import styled from 'styled-components';
import { scroller } from 'react-scroll';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [disableSnapScroll, setDisableSnapScroll] = useState(false);
  const sections = ['head', 'about', 'skills', 'projects', 'contact'];
  let currentSectionIndex = 0;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    i18n.init(); // Ensures i18n is properly initialized

    const detectTouchpad = (event: WheelEvent) => {
      const isTouchpad = Math.abs(event.deltaY) < 50 && event.deltaMode === 0;
      if (isTouchpad) {
        setDisableSnapScroll(true);
      }
    };

    const handleScroll = (event: WheelEvent) => {
      if (disableSnapScroll) return; // Disable snapping for touchpads

      if (event.deltaY > 0) {
        currentSectionIndex = Math.min(
          currentSectionIndex + 1,
          sections.length - 1
        );
      } else {
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
      }

      scroller.scrollTo(sections[currentSectionIndex], {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
    };

    window.addEventListener('wheel', detectTouchpad, { once: true });
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', detectTouchpad);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [sections, disableSnapScroll]);

  return (
    <I18nextProvider i18n={i18n}>
      <Nav
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div
        className={`relative ${
          isMobileMenuOpen ? 'opacity-5 pointer-events-none' : ''
        }`}
      >
        <StyledContent>
          <Loader />
          <Head />
          <Social />
          <Email />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </StyledContent>
      </div>
    </I18nextProvider>
  );
}
