export function miliseconds(hrs,min,sec){
	return((hrs*60*60+min*60+sec)*1000);
}

export function savePodcasts(podcasts) {
	let date = new Date();
	let day = miliseconds(24,0,0);
	const data = {
		podcasts,
		expire: date.getTime() + day
	}
	localStorage.setItem('pods', JSON.stringify(data));
}

export function savePodcastDetails(podcast) {
  let date = new Date();
  let day = miliseconds(24,0,0);
  let podcastExist = false;
  const data = {
    podcastsInDetails: [],
    expire: date.getTime() + day
  }
  if(localStorage.getItem('podsDetails')) {
    data.podcastsInDetails = JSON.parse(localStorage.getItem('podsDetails')).podcastsInDetails;
    data.expire = JSON.parse(localStorage.getItem('podsDetails')).expire;
    if(data.podcastsInDetails.length > 0) {
      data.podcastsInDetails.map(p => {
        if(p.trackId == podcast.trackId) {
          podcastExist = true;
          return {...podcast}

        }
        return p;
      })
      if(!podcastExist) {
        data.podcastsInDetails.push(podcast)
      }
    }
  }
  else {
    data.podcastsInDetails.push(podcast)
  }
  localStorage.setItem('podsDetails', JSON.stringify(data));
}

export function savePodcastEpisodes(currentPodcast, episodesList) {
  let episodes = episodesList;
  let id = currentPodcast.trackId
  let data = {}
  if(!localStorage.getItem('episodes')) {
    data[id] = {
      episodes: episodes  
    }
    localStorage.setItem('episodes', JSON.stringify(data));
    return;
  }
  data = JSON.parse(localStorage.getItem('episodes'))
  data[id] = {
    episodes: episodes
  }
  localStorage.setItem('episodes', JSON.stringify(data));
}

export function isEmptyOrExpired() {
	const data = JSON.parse(localStorage.getItem('pods')) || undefined;
	const date = new Date();
	if(!data) {
		return true;
	}
	return data && date.getTime() > data.expire ? true : false;
}

export function noExistOrExpired(podcastId) {
  const data = JSON.parse(localStorage.getItem('podsDetails')) || undefined;
  const date = new Date();
  if(!data || data.podcastsInDetails.length < 1) {
    return true;
  }

  if(date.getTime() > data.expire) {
    localStorage.removeItem('podsDetails');
    localStorage.removeItem('episodes');
    return true;
  }

  if(!data.podcastsInDetails.find(p => p.trackId == podcastId)) {
    return true;
  }

  return false;
}

export function episodesNotExist(podcastId) {
  const data = JSON.parse(localStorage.getItem('episodes')) || undefined;
  if(!data) return true;
  return data[podcastId] ? false : true;
}

export const getAllPodcastsFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('pods')) || undefined
  if(data && data.podcasts.length > 0) {
    return data.podcasts;
  }
  console.error('getAllPodcastsFromLocalStorage got undefined or empty data')
}

export const getPoscastFromLocalStorage = (podcastId) => {
  const data = JSON.parse(localStorage.getItem('podsDetails')) || undefined
  if(data && data.podcastsInDetails.length > 0) {
    let podcast = data.podcastsInDetails.find(p => p.trackId == podcastId)
    return podcast;
  }
  console.error('getPoscastFromLocalStorage got undefined or empty data')
}

export const getEpisodesFromLocalStorage = (podcastId) => {
  const episodes = JSON.parse(localStorage.getItem('episodes')) || undefined
  let data = episodes[podcastId]
  return data.episodes;
  // console.error('getPoscastFromLocalStorage got undefined or empty data')
}