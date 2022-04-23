import http, {config} from '../utils/http';
import api from '../constants/api';
const { parse } = require('rss-to-json');
// import {config} from '../utils/http';

export function getPodcasts() {
    return http.get(`https://cors-anywhere.herokuapp.com/${api.PODCASTS}`)
}

export function getPodcast(params) {
    return http.get(`https://cors-anywhere.herokuapp.com/${api.PODCAST}`, {params})
}

export function getPodcastEpisodes(params) {
    return parse(`https://cors-anywhere.herokuapp.com/${params}`, config)
}