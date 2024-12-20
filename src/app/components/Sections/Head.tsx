import { Link } from 'react-scroll';
import Button from '../UI/GenericButton';
import { useTranslation } from 'react-i18next';

export default function Head() {
  const { t } = useTranslation();

  return (
    <div className=' flex mt-32 3xl:mt-64 flex-col items-center'>
      <section className='home-section  items-center h-full w-full flex-col flex'>
        <div className='home-text mt-40  flex flex-col items-center'>
          <h6 className='font-sf-mono font-medium mb-12 text-3xl text-[var(--primary-blue)]'>
            {t('welcome')}
          </h6>
          <div className='flex flex-col items-center'>
            <h1 className='text-5xl font-bold'>Octavian Mihai Calin</h1>
            <h2 className='text-4xl font-bold opacity-75'>{t('title')}</h2>
          </div>
          <p className='text-xl font-bold opacity-75 w-[863px] text-center mt-7'>
            {t('bio')}
          </p>
          <Link to='about' smooth={true} duration={500}>
            <Button className='mt-12' size='big'>
              {t('explore_btn')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
