import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPodcasts } from '../thunks/podcasts';
import {savePodcasts} from '../../utils/helpers';

const initialState = {
    podcasts: [],
    currentPodcast: {},
    currentCollection: [],
    podcastsCache: [],
    loadingStatus: null,
    loadError: null,
};

const podcastsSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {
        setPodcasts(state, action) {
            state.podcasts = action.payload;
        }
    },
    extraReducers: (builder) =>
    builder
        .addCase(fetchAllPodcasts.pending, (state) => {
            state.loadingStatus = 'LOADING';
        })
        .addCase(fetchAllPodcasts.fulfilled, (state, {payload}) => {
            state.loadingStatus = 'FULFILLED';
            if(!payload.feed) return;
            const {entry} = payload.feed;
            savePodcasts(entry)
            state.podcasts = entry;
        })
        .addCase(fetchAllPodcasts.rejected, (state, { error }) => {
            state.loadingStatus = 'FAILED';
            state.loadError = error.message ?? 'Unknown error';
        }),
});

export const {setPodcasts} = podcastsSlice.actions;

export default podcastsSlice.reducer;
