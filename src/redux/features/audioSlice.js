import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    audioSrc: '',
    isPlay: false,
    volume: 0.5,
    inforSongPlaying: {
        title: 'Tên bài hát',
        artistsNames: 'artistsNames',
        thumbnailM: '',
    },
};
export const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        setIsPlay: (state, action) => {
            state.isPlay = action.payload;
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
        },
        setInforSongPlaying: (state, action) => {
            state.inforSongPlaying = action.payload;
        },
    },
});
