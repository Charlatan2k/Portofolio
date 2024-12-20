import Image from 'next/image';
import CircularProgressBar from '../UI/CircleProgressBar';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div
      id='about'
      className='flex  mt-[357px] w-full flex-col justify-center items-center'
    >
      <section
        id='#about'
        className='border-[5px] flex flex-col items-center rounded-xl border-[var(--primary-gray)] w-[80%] h-[977px] pb-36'
      >
        <header className='titles-div justify-center items-center flex gap-6 mt-44'>
          <hr className='border-[2px] border-[var(--primary-gray)] w-36' />
          <h1 className='font-bold text-5xl'>{t('about_title')}</h1>
          <hr className='border-[2px] border-[var(--primary-gray)] w-[804px]' />
        </header>

        <article className='content-container flex flex-col mt-24'>
          <h2 className='text-3xl font-medium '>{t('about_second_title')}</h2>
          <div className='content-duo gap-52 flex'>
            <section className='text-container flex flex-col items-center  w-[631px] relative'>
              <article className='flex flex-col p-8 border-l-4 border-t-4 border-[var(--primary-blue)] rounded-md'>
                <p className='font-light text-xl'>
                  {t('description1')}{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    JavaScript
                  </span>{' '}
                  {t('description2')}{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    HTML
                  </span>{' '}
                  {t('description3')}{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    CSS
                  </span>
                  {t('description4')}
                  <br />
                  <br />
                  {t('description5')}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    {' '}
                    {t('description6')}
                  </span>{' '}
                  {t('description7')}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    {' '}
                    {t('description8')}
                  </span>{' '}
                  {t('description9')}{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    {t('description10')}
                  </span>
                  {t('description11')}
                </p>
              </article>
            </section>
            <figure className='image-container relative inline-block z-0'>
              <div className='absolute top-[-18px] left-6 w-full h-full border-[5px] border-[var(--primary-blue)] rounded-lg z-[-1]'></div>
              <Image
                src={'beach_foto.jpg'}
                width={400}
                height={400}
                alt='About me Photo'
                className='rounded-lg border-[5px] border-[var(--primary-blue)] z-[9999]'
              />
            </figure>
          </div>
          <section className=' flex items-center justify-between mt-12 h-24 w-full '>
            <CircularProgressBar percentage={85} text={t('progressCircle1')} />
            <CircularProgressBar percentage={75} text='Fitness' />
            <CircularProgressBar percentage={55} text={t('progressCircle3')} />
          </section>
        </article>
      </section>
      <div className='border-[3px] border-[var(--primary-gray)] h-40'></div>
    </div>
  );
}
