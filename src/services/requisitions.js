import axios from 'axios';
const keyYoutube = 'AIzaSyDvQX-wWaGfu-qhbtJYXor3rkQ3YVqkDHQ'
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

async function getLists(data) {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=10&playlistId=${data}&key=${keyYoutube}`, config)
        return response.data.items

    }
    catch (error) {
        console.log(error)
    }
}

async function sendMessageWhats(message) {

    const body = {
        'collaboratorName': message.name.toLowerCase(),
        'message': message.body
    }
    try {
        const response = await axios.post('https://nakani-backend-app.herokuapp.com/notify-whats',
            body,
            config
        )
        return response.data
    } catch (error) {
        console.log('ops deu erro', error)
        console.error(error);
    }
}

async function getVideos(type) {

    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${type}&maxResults=${'10'}&part=snippet%2CcontentDetails&key=${keyYoutube}`, config)
        return response.data
    }

    catch (error) {
        console.log(error)
    }
}

export const requisitions = {
    getLists,
    sendMessageWhats,
    getVideos,
};