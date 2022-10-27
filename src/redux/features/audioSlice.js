import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    audioSrc: '',
    radioSrc: '',
    isPlayRadio: false,
    isPlay: false,
    volume: JSON.parse(localStorage.getItem('volume')) || 0.8,
    isLoop: JSON.parse(localStorage.getItem('isLoop')) || false,
    inforSongPlaying: JSON.parse(localStorage.getItem('inforSongPlaying')) || {
        title: 'Tên bài hát',
        artistsNames: 'artistsNames',
        thumbnailM: '',
    },
    songId: localStorage.getItem('songId') || '',
    playlistSong: JSON.parse(localStorage.getItem('playlistSong')) || [],
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
            localStorage.setItem('volume', JSON.stringify(action.payload));
        },
        setInforSongPlaying: (state, action) => {
            state.inforSongPlaying = action.payload;
            localStorage.setItem('inforSongPlaying', JSON.stringify(action.payload));
        },
        setAudioSrc: (state, action) => {
            state.audioSrc = action.payload;
        },
        setSongId: (state, action) => {
            state.songId = action.payload;
            localStorage.setItem('songId', JSON.stringify(action.payload));
        },
        setCurrentIndexSong: (state, action) => {
            state.currentIndexSong = action.payload;
        },
        setPlaylistSong: (state, action) => {
            state.playlistSong = action.payload;
            localStorage.setItem('playlistSong', JSON.stringify(action.payload));
        },
        setIsLoop: (state, action) => {
            state.isLoop = action.payload;
            localStorage.setItem('isLoop', JSON.stringify(action.payload));
        },
        setRadioSrc: (state, action) => {
            state.radioSrc = action.payload;
        },
        setIsPlayRadio: (state, action) => {
            state.isPlayRadio = action.payload;
        },
    },
});
