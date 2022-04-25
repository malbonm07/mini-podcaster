import http from '../utils/http';
import api from '../constants/api';
import CORS_PROXY from '../constants/proxies'
const { parse } = require('rss-to-json');

export function getPodcasts() {
    return http.get(`${api.PODCASTS}`)
    // return http.get(`${CORS_PROXY}${api.PODCASTS}`)
}

export function getPodcast(params) {
    return http.get(`${api.PODCAST}`, {params})
    // return http.get(`${CORS_PROXY}${api.PODCAST}`, {params})
}

export function getPodcastEpisodes(params) {
    return http.get(`${api.EPISODES}`, {params})
    // return parse(`${CORS_PROXY}${params}`)
}