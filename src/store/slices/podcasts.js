import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPodcasts } from '../thunks/podcasts';

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
        .addCase(fetchAllPodcasts.pending, (state) => {
            state.loadingStatus = 'LOADING';
        })
        .addCase(fetchAllPodcasts.fulfilled, (state, { data }) => {
            state.loadingStatus = 'FULFILLED';
            state.podcasts = data;
        })
        .addCase(fetchAllPodcasts.rejected, (state, { error }) => {
            state.loadingStatus = 'FAILED';
            state.loadError = error.message ?? 'Unknown error';
        }),
});

export default podcastsSlice.reducer;
