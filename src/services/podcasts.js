import http from '../utils/http';
import api from '../constants/api';
import CORS_PROXY from '../constants/proxies'
// const { parse } = require('rss-to-json');

export function getPodcasts() {
    return http.get(`${CORS_PROXY}1/${api.PODCASTS}`)
    // return http.get(`${CORS_PROXY}${api.PODCASTS}`)
}

export function getPodcast(params) {
    const {id} = params
    return http.get(`${CORS_PROXY}1/${api.PODCAST}?id=${id}`)
    // return http.get(`${CORS_PROXY}${api.PODCAST}`, {params})
}

export function getPodcastEpisodes(params) {
    return http.get(`${CORS_PROXY}episodes`, {params})
    // return parse(`${CORS_PROXY}${params}`)
}