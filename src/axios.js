import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://tinder-backendmert.herokuapp.com/'
});

export default instance;