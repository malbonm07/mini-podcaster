const PROXIES = Object.freeze({
    CORS_ANYWHERE: 'https://cors-anywhere.herokuapp.com/',
    THINGPROXY: 'https://thingproxy.freeboard.io/fetch/',
    CUSTOM_PROXY: 'http://localhost:8000/'
    // CUSTOM_PROXY: 'https://node-podcaster.herokuapp.com/'
})

const CORS_PROXY = PROXIES.CUSTOM_PROXY;

export default CORS_PROXY;