import axios from 'axios';

const BACKEND_URL = "http://ykh8746.iptime.org:8080/song";

class SongService{

    getSongs(){
        return axios.get( BACKEND_URL);
    }

    getSong(id){
        return axios.get(BACKEND_URL + id);
    }

    createSong(formData){
        return axios.post(BACKEND_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    updateSong(song){
        return axios.put(BACKEND_URL + song.id, song);
    }

    deleteSong(song){
        return axios.delete(BACKEND_URL + song.id);
    }

}

export default new SongService();