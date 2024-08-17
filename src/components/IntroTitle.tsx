'use client';

import {useEffect, useState} from 'react';

export default function IntroTitle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <h1
        className={`text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        Git Rank
      </h1>
      <h2
        className={`text-2xl font-semibold text-blue-800 fade-in delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        commit everyday
      </h2>
    </>
  );
}
