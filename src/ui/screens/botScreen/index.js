import React, { useEffect } from 'react';
import {
    View, Text
} from 'react-native';
import { BaseComponent, ChatBot } from '../../components'
export function BotScreen() {


    async function welcome() {
        const message = dialogflow.getMessage('oi')
        console.log('message', message)
        return 'oi'
    }

    useEffect(() => {
        console.log('init')

    }, []);

    return (
        <>
            <BaseComponent>
                <ChatBot />
            </BaseComponent>
        </>
    )
}

