import { configureStore } from '@reduxjs/toolkit';

import { audioSlice } from './features/audioSlice';
import { userSlide } from './features/userSlide';

const store = configureStore({
    reducer: {
        audio: audioSlice.reducer,
        user: userSlide.reducer,
    },
});

export default store;
