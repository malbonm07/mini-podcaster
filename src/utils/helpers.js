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
  if(!data.podcastsInDetails.find(p => p.trackId == podcastId)) {
    return true;
  }
  return date.getTime() > data.expire ? true : false;
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