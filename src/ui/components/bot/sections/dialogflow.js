import React, { Component } from 'react';
import { View } from 'react-native';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from 'services/configDialogflow';

export class Dialogflow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trigger: false
        };

        this.triggerNext = this.triggerNext.bind(this);
    }

    triggerNext(value) {
        console.log("triggering with value: ", value);
        this.setState({ trigger: true }, () => {
            this.props.triggerNextStep({ value });
        });
    }

    async componentDidMount() {
        await Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
            dialogflowConfig.project_id
        );
        await Dialogflow_V2.requestQuery(
            this.props.previousStep.value,
            result => this.handleGoogleResponse(result),
            error => console.log("Dialogflow error request: " + JSON.stringify(error))
        );

    }

    async handleGoogleResponse(result) {
        const { parameters } = result.queryResult
        if (Object.keys(parameters).length > 0) {

            // switch (Object.keys(parameters)[0]) {
            //     case "ingresso":
            //         console.log('quer comprar ingresso')
            //         break;

            //     case "city":
            //         console.log('quer saber de shows na cidade de ' + parameters.city)
            //         break;
            // }
            let text = result.queryResult.fulfillmentMessages[0].text.text[0];
            this.triggerNext(text);
        }
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        this.triggerNext(text);


    }



    render() {
        return (
            <View />
        );
    }

}