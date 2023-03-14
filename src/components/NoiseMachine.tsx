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
		<section className="noise-machine flex flex-wrap align-center justify-center font-sans">
      <h1 className="text-3xl font-bold text-periwinkle mb-3">
        nice noise
      </h1>
      
      <div className="controls w-full p-5">
        <button className="bg-periwinkle drop-shadow-md font-bold text-slate-400 hover:text-sky-400 py-3 px-4 rounded-full block m-auto" type="button" onClick={toggleAudio}>
          <span className="sr-only">
            {state.isPlaying ? 'Stop' : 'Play'}
          </span>
          <FontAwesomeIcon className="fa-2xl" icon={state.isPlaying ? faStop : faPlay} />
        </button>
      </div>
    </section>
  );
}
