/* 
 * Noise utilities
 */

const state = {
  audioCtx: new (window.AudioContext || (window as any).webkitAudioContext)(),
  get isPlaying() {
    return this.audioCtx?.state === "running";
  },
} as {
  audioCtx: AudioContext;
  isPlaying: Boolean;
};

const connectWhiteNoise = () => {
  const bufferSize = 2 * state.audioCtx.sampleRate;
  const noiseBuffer = state.audioCtx.createBuffer(
    1,
    bufferSize,
    state.audioCtx.sampleRate
  );
  const output = noiseBuffer.getChannelData(0);
  
  // Fill the buffer with random data
  for (var i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  const whiteNoise = state.audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;
  whiteNoise.start(0);
  whiteNoise.connect(state.audioCtx.destination);
};

export const useNoise = () => ({
  toggleNoise: () => {
    if (state.isPlaying) {
      state.audioCtx.suspend();
    } else {
      connectWhiteNoise();
      state.audioCtx.resume();
    }
  },
});