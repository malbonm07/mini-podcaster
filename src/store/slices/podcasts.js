import { createSlice } from '@reduxjs/toolkit';
import { fetchPodcasts } from '../thunks/podcasts';

const initialState = {
    podcasts: [],
    currentPodcast: {},
    collection: [],
    podcastsInDetails: [],
    loadingStatus: null,
    loadError: null,
};

const podcastsSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>
    builder
        .addCase(fetchPodcasts.pending, (state) => {
            state.loadingStatus = 'LOADING';
        })
        .addCase(fetchPodcasts.fulfilled, (state, { data }) => {
            state.loadingStatus = 'FULFILLED';
            state.podcasts = data;
        })
        .addCase(fetchPodcasts.rejected, (state, { error }) => {
            state.loadingStatus = 'FAILED';
            state.loadError = error.message ?? 'Unknown error';
        }),
});

export default podcastsSlice.reducer;
