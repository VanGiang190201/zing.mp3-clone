import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    audioSrc: '',
    isPlay: false,
    volume: 0.5,
    isLoop: false,
    inforSongPlaying: {
        title: 'Tên bài hát',
        artistsNames: 'artistsNames',
        thumbnailM: '',
    },
    songId: 'Z6IAIUFU',
    playlistSong: [],
    currentIndexSong: 0,
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
        setAudioSrc: (state, action) => {
            state.audioSrc = action.payload;
        },
        setSongId: (state, action) => {
            state.songId = action.payload;
        },
        setCurrentIndexSong: (state, action) => {
            state.currentIndexSong = action.payload;
        },
        setPlaylistSong: (state, action) => {
            state.playlistSong = action.payload;
        },
        setIsLoop: (state, action) => {
            state.isLoop = action.payload;
        },
    },
});
