import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './configDialogflow';

async function initDialogflow(message, callback) {
    let response = ''
    await Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        dialogflowConfig.private_key,
        Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
        dialogflowConfig.project_id
    );
    await Dialogflow_V2.requestQuery(
        message,
        result => {
            return callback(result);
        },

        error => console.log("Dialogflow error request: " + JSON.stringify(error))
    );
}

async function getMessage(message) {
    return new Promise(res => {
        initDialogflow(message, (resultado) => {
            if (resultado) {
                res(resultado)
            }

        });
    })
}

export const dialogflow = {
    getMessage,
};