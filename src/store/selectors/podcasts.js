import { shallowEqual, useSelector } from 'react-redux';

const isLoadingPodcasts = (state) => {
  return state.podcasts.loadingStatus === "LOADING";
};

const podcastsSelector = (state)  => state.podcasts.podcasts;

const currentPodcast = (state) => state.podcasts.currentPodcast;

export const useIsLoadingPodcasts = () => useSelector(isLoadingPodcasts);

export const usePodcasts = () => useSelector(podcastsSelector, shallowEqual);

export const usePodcast = () => useSelector(currentPodcast);
