import http, {config} from '../utils/http';
import api from '../constants/api';
const { parse } = require('rss-to-json');

// const corsProxy = 'https://cors-anywhere.herokuapp.com/'
const corsProxy = 'https://thingproxy.freeboard.io/fetch/'


export function getPodcasts() {
    return http.get(`${corsProxy}${api.PODCASTS}`)
}

export function getPodcast(params) {
    return http.get(`${corsProxy}${api.PODCAST}`, {params})
}

export function getPodcastEpisodes(params) {
    return parse(`${corsProxy}${params}`, config)
}