import React from 'react';

import NoiseMachine from './components/NoiseMachine';

function App() {
  return (
    <div className="app flex flex-col h-screen bg-charcoal">
      <div className="container">
        <NoiseMachine />
      </div>
    </div>
  );
}

export default App;
