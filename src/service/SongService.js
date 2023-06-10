import axios from 'axios';
import App from "../App.js";

const BACKEND_URL = "http://ykh8746.iptime.org:8080/song";

class SongService {

    getSongs() {
        return axios.get(BACKEND_URL);
    }

    getSong(fileName) {
        return axios.get(`${BACKEND_URL}/${fileName}`);
    }

    getMySong() {
        const token = localStorage.getItem("USER")
        return axios.get(`${BACKEND_URL}/my`, {
            headers: {
                'Authorization': token
            }
        });
    }

    createSong(musicDto, successCallback) {
        const [atmosphere, atDetail, instrument, bpm, highlow] = musicDto;
        const token = localStorage.getItem("USER");
        
        return axios.post(BACKEND_URL, 
            {
                atmosphere: atmosphere,
                atDetail: atDetail,
                instrument: instrument,
                bpm: bpm,
                highlow: highlow
            }, 
            {
                headers: {
                    'Authorization': token
                }
            })
            // .then(response => {
            //     console.log(response.data);
            //     window.alert(`Create Success! \nFilename: ${response.data.fileName} `)
            //     localStorage.setItem("MUSIC", response.data.fileName);
            //     // window.location.reload();
            // })

    }

    deleteSong(fileName) {
        const token = localStorage.getItem("USER")
        return axios.delete(`${BACKEND_URL}/${fileName}`, {
            headers: {
                'Authorization': token
            }
        });
    }

}

export default new SongService();