import { createAsyncThunk } from '@reduxjs/toolkit';
import {getPodcasts, getPodcast, getPodcastEpisodes} from '../../services'
import {isEmptyOrExpired,noExistOrExpired, getAllPodcastsFromLocalStorage, getPoscastFromLocalStorage, savePodcastDetails, episodesNotExist, getEpisodesFromLocalStorage} from '../../utils/helpers';
import {setPodcasts, setPodcast, clearPreviousPodcast, setEpisodes} from '../../store/slices/podcasts';

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
    const {data} = await getPodcastEpisodes(url)
    if(!data.items) return;
    return data.items
  }
);

export const mountedPodcastDetails = createAsyncThunk(
  'podcasts/mountedPodcastDetails',
  async (podcastId, {dispatch, getState}) => {
    dispatch(clearPreviousPodcast())
    
    if(isEmptyOrExpired()) {
      await dispatch(fetchAllPodcasts())  
    }
    else {
      const podcasts = getAllPodcastsFromLocalStorage();
      dispatch(setPodcasts(podcasts))
    }
    
    if(noExistOrExpired(podcastId)) {
      await dispatch(fetchPodcast(podcastId))
    }
    else {
      const podcast = getPoscastFromLocalStorage(podcastId);
      dispatch(setPodcast(podcast))
    }
    const {currentPodcast} = getState().podcasts
    if(episodesNotExist(currentPodcast.trackId)) {
      await dispatch(fetchPodcastEpisodes(currentPodcast.feedUrl))
    }
    else {
      dispatch(setEpisodes(getEpisodesFromLocalStorage(currentPodcast.trackId)))
    }
    
  }
);
