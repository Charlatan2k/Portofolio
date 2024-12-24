import Image from 'next/image';
import CircularProgressBar from '../UI/CircleProgressBar';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div
      id='about'
      className='flex xl:mt-[30%] 2xl:mt-[18%] lg:mt-[40%] md:mt-[45%] w-full flex-col justify-center items-center'
    >
      <section
        id='#about'
        className='border-[5px] flex flex-col items-center rounded-xl border-[var(--primary-gray)] 2xl:w-[80%] xl:w-[85%] lg:w-[90%] w-[70%] h-[10%] 3xl:h-[70rem] lg:pb-12 xl:pb-36'
      >
        <header className='titles-div justify-center items-center flex gap-6 w-full mt-44'>
          <hr className='border-[2px] border-[var(--primary-gray)] w-[50%] xl:w-[8%]' />
          <h1 className='font-bold sm:text-3xl xl:text-center text-center  lg:text-5xl'>
            {t('about_title')}
          </h1>
          <hr className='border-[2px] border-[var(--primary-gray)] w-[50%] xl:w-[55%]' />
        </header>
        <article className='content-container flex flex-col w-full xl:mt-24 mt-10'>
          <div className='content-duo 2xl:gap-[20%] gap-[20%]  flex'>
            <section className=' items-center flex flex-col lg:flex-row w-full justify-center lg:gap-14 xl:gap-24 2xl:gap-64 3xl:gap-64 '>
              <section className='text-container lg:w-[70%] flex lg:ml-5 xl:ml-24 flex-col items-center 2xl:w-[40%] xl:w-[70%] relative'>
                <h2 className='xl:text-3xl 3xl:text-3xl lg:text-2xl self-start  font-medium '>
                  {t('about_second_title')}
                </h2>
                <article className='flex flex-col p-8 border-l-4 border-t-4 border-[var(--primary-blue)] rounded-md'>
                  <p className='font-light lg:text-base 3xl:text-2xl xl:text-xl'>
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
              <figure className='flex items-center justify-center '>
                <Image
                  src={'beach_foto_full.png'}
                  width={400}
                  height={400}
                  alt='About me Photo'
                  className=' lg:mr-10 3xl:w-[520px] xl:mr-20 3xl:mr-36'
                />
              </figure>
            </section>
          </div>
          <section className=' flex items-end p-8 mt-12 justify-between 3xl:justify-evenly 3xl:gap-96 xl:mb-[-7%] h-44 2xl:h-32 3xl:h-44 w-full '>
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
