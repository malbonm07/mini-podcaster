import React from 'react'
import styled from 'styled-components';
import Card from '../../../components/common/Card';
import AppAudioPlayer from '../../../components/AudioPlayer'
import { useEpisodes } from '../../../store/selectors/podcasts';
import { useNavigate, useParams } from 'react-router-dom';

const StyledCard = styled(Card)`
  text-align: left;
  padding: 18px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-align: left;
  margin: 0px;
  margin-bottom: 8px;
`;
const Description = styled.p`
  font-size:0.9rem;
  margin-bottom: 40px;
`;

function createMarkup(html) {
  return {__html: html};
}


function EpisodeDetailsView() {
  const episodes = useEpisodes();
  const { episodeId } = useParams();
  const episode = episodes[episodeId]

  return (
    <StyledCard>
      <Title>{episode?.title || '--'}</Title>
      <Description dangerouslySetInnerHTML={createMarkup(episode?.description || '--')}></Description>
      <AppAudioPlayer audioSrc={episodes[episodeId] ? episodes[episodeId].enclosures[0].url : null}></AppAudioPlayer>
    </StyledCard>
  )
}

export default EpisodeDetailsView