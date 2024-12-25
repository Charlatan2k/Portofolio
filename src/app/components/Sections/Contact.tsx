import Button from '../UI/GenericButton';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section id='contact' className='flex flex-col h-[80vh] items-center'>
        <div className='border-[3px] border-[var(--primary-gray)] h-44 w-[1px]'></div>
        <div className='flex flex-col justify-center items-center text-center border-[5px] border-[var(--primary-gray)] rounded-xl h-[50%] xl:w-[60%] 2xl:w-[50%]'>
          <h1 className='font-extrabold text-6xl border-b-2 border-[var(--primary-gray)] pb-4 w-[70%]'>
            {t('contactTitle')}
          </h1>
          <p className='font-normal w-[58%] text-l mt-6 mb-8'>
            {t('contactText')}
          </p>
          <Button
            onClick={() =>
              (window.location.href =
                'mailto:octavianmihai.calin@gmail.com?subject=Contact&body=Hi, I would like to get in touch')
            }
            size='big'
          >
            {t('contactButton')}
          </Button>
        </div>
      </section>
      <p className='text-center font-sf-mono'>
        Designed & Built by Octavian Mihai Calin
      </p>
    </>
  );
}
