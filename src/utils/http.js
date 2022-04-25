import axios from "axios";
const origin = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'https://mini-podcaster-react.netlify.app';


export const config = {
    headers: {
      'origin': origin,
    }
}

const httpInstance = axios.create({
    timeout: 60000
});

httpInstance.defaults.headers['Access-Control-Allow-origin'] =  '*';
httpInstance.defaults.headers['origin'] =  origin;

export default httpInstance;