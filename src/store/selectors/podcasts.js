import { shallowEqual, useSelector } from 'react-redux';

const isLoadingPodcasts = (state) => state.podcasts.loadingStatus === "LOADING";

const podcastsSelector = (state)  => state.podcasts.podcasts;

const currentPodcast = (state) => state.podcasts.currentPodcast;

const podcastEpisodes = (state) => state.podcasts.currentPodcastEpisodes;

export const useIsLoadingPodcasts = () => useSelector(isLoadingPodcasts);

export const usePodcasts = () => useSelector(podcastsSelector, shallowEqual);

export const usePodcast = () => useSelector(currentPodcast);

export const useEpisodes = () => useSelector(podcastEpisodes);