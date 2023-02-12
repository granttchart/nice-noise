import React, { useState } from 'react';

export default function NoiseMachine() {
  const [state, setState] = useState({
    isPlaying: false,
  });
  
  const toggleAudio = () => {
    const isPlaying = !state.isPlaying;
    setState({
      isPlaying: isPlaying,
    });
    console.log('audio is', isPlaying ? 'playing' : 'stopped');
  }
  
  return (
		<section className="noise-machine h-full flex align-center justify-center">
      <h1 className="text-3xl font-bold underline text-white">Hello world</h1>
      
      <div className="controls p-5">
        <button className="bg-periwinkle p-3" type="button" onClick={toggleAudio}>
          { state.isPlaying ? 'Stop' : 'Play'}
        </button>
      </div>
    </section>
  );
}
