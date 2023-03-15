/* 
 * Noise utilities
 */

const playWhiteNoise = (audioCtx: AudioContext) => {
  audioCtx.audioWorklet.addModule("js/audio/white-noise.js").then((module) => {
    let node = new AudioWorkletNode(audioCtx, "white-noise-processor");
    node.connect(audioCtx.destination)
  });
};

const state = {
  audioCtx: new (window.AudioContext || (window as any).webkitAudioContext)(),
  get isPlaying() {
    return this.audioCtx?.state === "running";
  },
} as {
  audioCtx: AudioContext;
  isPlaying: Boolean,
};

export const useNoise = () => ({
  toggleNoise: () => {
    if (state.isPlaying) {
      state.audioCtx.suspend();
    } else {
      playWhiteNoise(state.audioCtx);
      state.audioCtx.resume();
    }
  },
});