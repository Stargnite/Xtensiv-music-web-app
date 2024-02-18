import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MusicState {
  isPlaying: boolean;
  currentMusicIndex: number | null;
  playlist: string[];
}

const initialState: MusicState = {
  isPlaying: false,
  currentMusicIndex: null,
  playlist: [],
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    togglePlay: (state, action: PayloadAction<HTMLAudioElement | null>) => {
      const audioElement = action.payload;
      console.log(audioElement);

      if (audioElement) {
        if (audioElement.paused) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
        state.isPlaying = !state.isPlaying;
      }
    },
  },
});

export const { togglePlay } = musicSlice.actions;

export default musicSlice.reducer;
