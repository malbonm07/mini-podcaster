import React, { useEffect, useMemo } from 'react'
import { Outlet, useParams } from "react-router-dom";
import AppWrapper from '../../components/common/AppWrapper';
import PodcastBanner from '../../components/PodcastBanner';
import AppHeader from '../../components/AppHeader';
import styled from 'styled-components';
import {mountedPodcastDetails} from '../../store/thunks/podcasts';
import { useDispatch } from 'react-redux';
import {usePodcasts, usePodcast} from '../../store/selectors/podcasts'

const StyledAppWrapper = styled(AppWrapper)`
  display: grid;
  grid-template-columns: 440px 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 
    "header header"
    "aside main";
`;

const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  align-items: flex-start;
  padding-left: 14px;
`;

const Main = styled.main`
  grid-area: main;
  padding-right: 14px;
`;

const StyledHeader = styled(AppHeader)`
  display: grid;
  grid-area: header;
  grid-template-columns: 1fr;
`



function PodcastDetailsView() {
  const dispatch = useDispatch();
  const podcasts = usePodcasts();
  const currentPodcast = usePodcast();
  const fullPodcast = useMemo(() => mergePodcast(podcasts, currentPodcast), [podcasts, currentPodcast]);
  let {podcastId} = useParams();

  useEffect(() => {
    dispatch(mountedPodcastDetails(podcastId))
  }, [])

  return (
    <StyledAppWrapper>
      <StyledHeader></StyledHeader>
      <Aside>
        {fullPodcast && <PodcastBanner imgSrc={fullPodcast.artworkUrl600} summary={fullPodcast.summary} trackName={fullPodcast.trackName || ''} artistName={fullPodcast.artistName || ''} trackId={fullPodcast.trackId}></PodcastBanner>}
      </Aside>
      <Main>
        <Outlet />
      </Main>
    </StyledAppWrapper>
  )
}

function mergePodcast(list, currentPodcast) {
  if(Object.keys(currentPodcast).length === 0) return null;
  const findPodcast = [...list].filter(p => p.id.attributes['im:id'] == currentPodcast.trackId)[0]
  const podcast = {...currentPodcast, ...findPodcast}
  return podcast
}

export default PodcastDetailsView