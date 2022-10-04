import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    audioSrc: '',
    isPlay: false,
    volume: 50,
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
    },
});
