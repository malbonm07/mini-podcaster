import { createAsyncThunk } from '@reduxjs/toolkit';
import {getPodcasts, getPodcast, getPodcastEpisodes} from '../../services'
import {isEmptyOrExpired,noExistOrExpired, getAllPodcastsFromLocalStorage, getPoscastFromLocalStorage, savePodcastDetails} from '../../utils/helpers';
import {setPodcasts, setPodcast, clearPreviousPodcast} from '../../store/slices/podcasts';

export const fetchAllPodcasts = createAsyncThunk(
  'podcasts/fetchAllPodcasts',
  async () => {
    const {data} = await getPodcasts();
    if(!data.feed) return console.error(`fetchAllPodcasts error details: empty data`);
    return data
  },
);

export const fetchPodcast = createAsyncThunk(
  'podcasts/fetchPodcast',
  async (podcastId) => {
    const response = await getPodcast({id: podcastId})
    if(response.data && response.data.results.length > 0) {
      let podcast = response.data.results[0];
      savePodcastDetails(podcast)
      return podcast;
    }
  },
)
;
export const fetchPodcastEpisodes = createAsyncThunk(
  'podcasts/fetchPodcastEpisodes',
  async (url) => {
    const response = await getPodcastEpisodes(url)
    if(!response.items) return;
    return response.items
  }
);

export const mountedPodcastDetails = createAsyncThunk(
  'podcasts/mountedPodcastDetails',
  async (podcastId, {dispatch, getState}) => {
    dispatch(clearPreviousPodcast())
    
    isEmptyOrExpired() ? 
    await dispatch(fetchAllPodcasts()) : dispatch(setPodcasts(getAllPodcastsFromLocalStorage()));
    noExistOrExpired(podcastId) ?
    await dispatch(fetchPodcast(podcastId)) : dispatch(setPodcast(getPoscastFromLocalStorage(podcastId)))

    const {currentPodcast} = getState().podcasts
    await dispatch(fetchPodcastEpisodes(currentPodcast.feedUrl))
  }
);
