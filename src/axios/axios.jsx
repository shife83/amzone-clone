import axios from 'axios';
const instance = axios.create({
    //the API cloud function url
    baseURL:'',
});
export default instance;