import http from '../utils/http';
import api from '../constants/api';

export function getPodcasts() {
    return http.get(`https://cors-anywhere.herokuapp.com/${api.PODCASTS}`)
}

export function getPodcast(params) {
    return http.get(`https://cors-anywhere.herokuapp.com/${api.PODCAST}`, {params})
}