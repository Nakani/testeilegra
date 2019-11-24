import axios from 'axios';
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

async function getLists(data) {
    try {
        const response = await axios.get(``, config)
        return response.data

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




export const requisitions = {
    getLists,
    sendMessageWhats,
};