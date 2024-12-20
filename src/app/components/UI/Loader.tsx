'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 200);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center bg-[var(--background)] z-50 transition-opacity duration-300 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image src={'loader.gif'} alt='Loading...' width={150} height={150} />
      </div>
    );
  }

  return null;
};

export default Loader;
