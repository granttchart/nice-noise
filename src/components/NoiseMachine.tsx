import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

import { useNoise } from '../utils/audio';

export default function NoiseMachine() {
  const [state, setState] = useState({
    isPlaying: false,
  });

  const { toggleNoise } = useNoise();
  
  const toggleAudio = () => {
    setState((oldState) => ({ isPlaying: !oldState.isPlaying }));
    toggleNoise();
  }
  
  return (
    <section
      className={`max-w-lg max-h-128 h-screen flex flex-wrap align-center justify-center font-sans border-blue border-solid border-2 px-8 py-8 rounded ${state.isPlaying ? 'playing' : 'inactive'}`}
      >
      <h1 className="text-3xl font-bold text-white opacity-80 mb-3">
        nice noise
      </h1>
      
      <div className="controls w-full p-5">
        <button
          className="transition-all bg-periwinkle hover:scale-95 hover:opacity-80 drop-shadow-md font-bold text-violet py-4 px-10 rounded-full block m-auto"
          type="button"
          onClick={toggleAudio}
        >
          <span className="sr-only">
            {state.isPlaying ? 'Stop' : 'Play'}
          </span>
          <FontAwesomeIcon className="fa-2xl" icon={state.isPlaying ? faStop : faPlay} />
        </button>
      </div>
    </section>
  );
}
