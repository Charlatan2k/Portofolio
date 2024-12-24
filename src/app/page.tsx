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
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  // const sections = ['head', 'about', 'skills', 'projects', 'contact'];
  // let currentSectionIndex = 0;

  // useEffect(() => {
  //   i18n.init(); // Ensures i18n is properly initialized

  //   // Scroll snapping logic
  //   const handleScroll = (event: WheelEvent) => {
  //     if (event.deltaY > 0) {
  //       // Scroll down
  //       currentSectionIndex = Math.min(
  //         currentSectionIndex + 1,
  //         sections.length - 1
  //       );
  //     } else {
  //       // Scroll up
  //       currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
  //     }

  //     scroller.scrollTo(sections[currentSectionIndex], {
  //       duration: 800,
  //       smooth: 'easeInOutQuart',
  //     });
  //   };

  //   window.addEventListener('wheel', handleScroll);

  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, [sections]);

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
