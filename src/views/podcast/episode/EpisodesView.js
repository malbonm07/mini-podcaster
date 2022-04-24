import React from 'react'
import styled from 'styled-components';
import Card from '../../../components/common/Card';
import theme from '../../../styles/theme';
import {useEpisodes, usePodcast, useIsLoadingPodcasts} from '../../../store/selectors/podcasts';
import { useNavigate } from 'react-router-dom';

const EpisodeHeader = styled(Card)`
  min-height: auto;
  padding: 10px 30px;
  margin-bottom: 20px;
`;

const EpisodeTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: left;
  margin: 0px;
`;

const EpisodesBody = styled(Card)``;

const EpisodeList = styled.ul`
  padding-left: 16px;
  padding-right: 16px;
`;

const EpisodeItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  background-color: ${(props) => (props.index + 1) % 2 == 0 ? '#fff' : '#F9F9F9'}; 
  border-bottom: 1px solid #e4e4e4;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: center;
  span:nth-child(1) {
    width: 70%;
    text-align: left;
    color: ${theme.primary};
  }
  span:nth-child(2) {
    width: 20%;
  }
  span:nth-child(3) {
    width: 20%;
  }
`;


const EpisodeItemHeader = styled(EpisodeItem)`
  padding-top: 20px;
  background-color: #fff;
  cursor: inherit;
  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }
  span:nth-child(1) {
    color: #333;
  }
`;

function EpisodeView() {
  const episodes = useEpisodes();
  const podcast = usePodcast();
  const isLoading = useIsLoadingPodcasts();
  const navigate = useNavigate();

  return (
    <>
      <EpisodeHeader>
        <EpisodeTitle>
          Episodes: {isLoading && !episodes ? 0 : episodes.length}
        </EpisodeTitle>
      </EpisodeHeader>
      <EpisodesBody>
        <EpisodeList>
          <EpisodeItemHeader>
            <span>Title</span>
            <span>Date</span>
            <span>Duration</span>
          </EpisodeItemHeader>
          {!isLoading && episodes.map(((episode, i) => (
            <EpisodeItem onClick={() => navigate(`/podcast/${podcast.trackId}/episode/${i}`)} key={i} index={i}>
              <span>{episode?.title || '--'}</span>
              <span>{timeFormat(episode?.published)}</span>
              <span>{formatDuration(episode?.itunes_duration)}</span>
            </EpisodeItem>
          )))}
        </EpisodeList>
      </EpisodesBody>
    </>
  )
}

const timeFormat = (value) => {
  if (!value && !/^\d+$/.test(value)) return '--';
  let fullDate = new Date(value);
  let year = fullDate.getFullYear();
  let month = ("0" + (fullDate.getMonth() + 1)).slice(-2);
  let day = ("0" + fullDate.getDate()).slice(-2);
  const DDMMYYYY = `${day}-${month}-${year}`
  return DDMMYYYY;
}

const formatDuration = (value) => {
  if (!value) return '--';
  if(typeof value === 'string' && value.includes(":")) return value;
  let minutes = "0" + Math.floor(value / 60);
  let seconds = "0" +  Math.floor(value - minutes * 60);
  let duration = minutes.substr(-2) + ":" + seconds.substr(-2);
  return duration
}

export default EpisodeView