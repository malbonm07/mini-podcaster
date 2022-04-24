import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPodcasts, fetchPodcast, fetchPodcastEpisodes } from '../thunks/podcasts';
import {savePodcasts} from '../../utils/helpers';

const initialState = {
    podcasts: [],
    currentPodcast: {},
    currentPodcastEpisodes: [],
    loadingStatus: null,
    loadError: null
};

const podcastsSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {
        setPodcasts(state, action) {
            state.podcasts = action.payload;
        },
        setPodcast(state, action) {
            state.currentPodcast = action.payload;
        },
        clearPreviousPodcast(state) {
            state.currentPodcast = {};
        }
    },
    extraReducers: (builder) =>
    builder
        .addCase(fetchAllPodcasts.pending, (state) => {
            state.loadingStatus = 'LOADING';
        })
        .addCase(fetchAllPodcasts.fulfilled, (state, {payload}) => {
            state.loadingStatus = 'FULFILLED';
            const {entry} = payload.feed;
            savePodcasts(entry)
            state.podcasts = entry;
        })
        .addCase(fetchAllPodcasts.rejected, (state, { error }) => {
            state.loadingStatus = 'FAILED';
            state.loadError = error.message ?? 'Unknown error';
            console.error(`fetchAllPodcasts.rejected error details: ${state.loadError}`)
        })

        .addCase(fetchPodcast.pending, (state) => {
            state.loadingStatus = 'LOADING';
        })
        .addCase(fetchPodcast.fulfilled, (state, {payload}) => {
            state.loadingStatus = 'FULFILLED';
            state.currentPodcast = payload;
        })
        .addCase(fetchPodcast.rejected, (state, { error }) => {
            state.loadingStatus = 'FAILED';
            state.loadError = error.message ?? 'Unknown error';
            console.error(`fetchPodcast.rejected error details: ${state.loadError}`)
            if(state.loadError.includes('403')) {
                // cors error make something here
            }
        })

        .addCase(fetchPodcastEpisodes.pending, (state) => {
            state.loadingStatus = 'LOADING';
        })
        .addCase(fetchPodcastEpisodes.fulfilled, (state, {payload}) => {
            state.loadingStatus = 'FULFILLED';
            state.currentPodcastEpisodes = payload;
        })
        .addCase(fetchPodcastEpisodes.rejected, (state, { error }) => {
            state.loadingStatus = 'FAILED';
            state.loadError = error.message ?? 'Unknown error';
            console.error(`fetchPodcastEpisodes.rejected error details: ${state.loadError}`)
        })
});

export const {setPodcasts, setPodcast, clearPreviousPodcast} = podcastsSlice.actions;

export default podcastsSlice.reducer;
