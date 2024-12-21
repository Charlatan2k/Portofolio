import Image from 'next/image';
import Button from '../UI/GenericButton';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import React from 'react';
import { Link } from 'react-scroll';

export default function Nav() {
  const { t } = useTranslation();

  return (
    <>
      <header
        style={{ position: 'fixed', zIndex: 9999 }}
        className='border-b-[3px] bg-[#1E1E1E]  justify-between flex border-b-[#2A2A2A] h-36 fixed top-0 left-0 right-0 shadow-[0_4px_10px_rgba(0,0,0,0.25)]'
      >
        <div className='logo-cont'>
          <Image
            src={i18n.language === 'en' ? 'spain-flag.png' : 'english-flag.png'} // Toggle flags based on language
            width={25}
            height={25}
            alt='Spanish Flag Icon'
            className='ml-[0.75rem] mt-[0.9375rem] cursor-pointer'
            onClick={() =>
              i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
            }
          />
          <Image
            className='ml-[2.3125rem] cursor-pointer'
            src={'octavian-logo.png'}
            alt='Logo'
            width={98}
            height={81}
          />
        </div>
        <div className='flex items-center gap-16 text-2xl font-light mr-11'>
          <Link
            to='about'
            smooth={true}
            duration={500}
            className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'
          >
            {t('about')}
          </Link>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'
          >
            {t('skills')}
          </Link>
          <Link
            to='projects'
            smooth={true}
            duration={500}
            className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'
          >
            {t('projects')}
          </Link>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'
          >
            {t('contact')}
          </Link>
          <Button
            href={i18n.language === 'en' ? 'cv_en.pdf' : '/cv_esp.pdf'}
            needsFontAdjustment={true}
            className='font-normal'
          >
            {t('resume')}
          </Button>
        </div>
      </header>
    </>
  );
}
