import axios from 'axios';


let api = {
    fetchData(){
        return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.data;
        })
    }
}

export default api;