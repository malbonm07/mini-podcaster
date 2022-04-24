import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {usePodcasts} from '../../store/selectors/podcasts';
import {isEmptyOrExpired, getAllPodcastsFromLocalStorage} from '../../utils/helpers';
import {fetchAllPodcasts} from '../../store/thunks/podcasts';
import { useDispatch } from 'react-redux';
import {setPodcasts} from '../../store/slices/podcasts';
import AppHeader from '../../components/AppHeader';
import AppSearcher from '../../components/AppSearcher';
import PodcastCard from '../../components/PodcastCard';
import AppWrapper from '../../components/common/AppWrapper';
import GridList from '../../components/common/GridList';

function HomeView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const podcastsList = usePodcasts();
  const podcasts = useMemo(() => filteredPodcastsByName(name, podcastsList), [name, podcastsList]);

  useEffect(() => {
    isEmptyOrExpired() ? dispatch(fetchAllPodcasts()) : dispatch(setPodcasts(getAllPodcastsFromLocalStorage()));
  }, [])
  
  
  return (
    <AppWrapper>
        <AppHeader></AppHeader>
        <AppSearcher name={name} setName={setName} style={{marginTop: '20px'}} ></AppSearcher>
        <GridList  $mt="120">
          {podcasts.map(podcast => (
            <div key={podcast.id.attributes['im:id']}>
              <PodcastCard
                to={`/podcast/${podcast.id ? podcast.id.attributes['im:id'] : undefined}`}
                author={podcast['im:name'].label}
                title={podcast['im:artist'].label}
                imgSrc={podcast['im:image'] ? podcast['im:image'][podcast['im:image'].length - 1] : ''}>
              </PodcastCard>
            </div>
          ))}
        </GridList>
    </AppWrapper>
  )
}

const filteredPodcastsByName = (search, list) => {
  if(list.length < 1) return [];
  return [...list].filter(item => {
    let artist = item?.['im:artist']?.label
    let name = item?.['im:name']?.label
    if(artist?.toLowerCase().includes(search.toLowerCase()) || name?.toLowerCase().includes(search.toLowerCase())) {
      return item
    }
  })
}

export default HomeView