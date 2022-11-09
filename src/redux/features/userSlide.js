import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeUser: false,
    uid: '',
    name: '',
    email: '',
    imageThumb: '',
};

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.activeUser = true;
            state.uid = action.payload.uid;
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.imageThumb = action.payload.photoURL;
        },
    },
});
