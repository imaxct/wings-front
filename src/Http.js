import axios from 'axios';
import Toast from "./Toast";


const Http = axios.create({
    baseURL: 'http://123.206.23.127:8080/wings',
    timeout: 5000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: true,
});
Http.interceptors.response.use(res => res.data, error => {
    Toast.error(error.response.data.msg ? error.response.data.msg : "请求错误");
});

export default Http;