import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MusicState {
  isPlaying: boolean;
  currentTrack: object;
  playlist: object[];
  currentTrackIndex: number;
  prevTrack: number;
  nextTrack: number;
}

const initialState: MusicState = {
  isPlaying: false,
  currentTrack: {},
  playlist: [],
  currentTrackIndex: 0,
  prevTrack: 0,
  nextTrack: 0,
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
    fillPlaylist: (state, action) => {
      const tracks = action.payload;
      // console.log(tracks)
      return {
        ...state,
        playlist: [...tracks],
      };
    },
    updateCurrentTrack: (state, action) => {
      const currentTrack = action.payload;
      console.log(currentTrack);
      return {
        ...state,
        currentTrack: currentTrack,
      };
    },
    updateCurrentTrackIndex: (state, action) => {
      const currentTrackIndex = action.payload;
      return {
        ...state,
        currentTrackIndex: currentTrackIndex,
      };
    },
    handleNextTrack: (state) => {
      console.log(state.currentTrackIndex)

      return {
        ...state,
        currentTrackIndex:
          state.currentTrackIndex === state.playlist.length
            ? state.currentTrackIndex
            : state.currentTrackIndex + 1,
      };
    },
    handlePrevTrack: (state) => {
      console.log(state.currentTrackIndex)
      return {
        ...state,
        currentTrackIndex:
          state.currentTrackIndex === 0 ? 0 : state.currentTrackIndex - 1,
      };
    },
  },
});

export const {
  togglePlay,
  fillPlaylist,
  updateCurrentTrack,
  updateCurrentTrackIndex,
  handleNextTrack,
  handlePrevTrack,
} = musicSlice.actions;

export default musicSlice.reducer;
