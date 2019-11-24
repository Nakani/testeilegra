import React, { useEffect } from 'react';
import {
    View, Text
} from 'react-native';
import { BaseComponent } from '../../components'
import { dialogflow } from '../../../services/dialogflow'

export function ScanScreen() {

    async function welcome() {
        const message = dialogflow.getMessage('oi')
        console.log('message', message)
        return 'oi'
    }

    useEffect(() => {
        console.log('init')
        dialogflow.getMessage('oi')

    }, []);

    return (
        <>
            <BaseComponent>
                <View>
                    <Text>
                        Scan Component
                    </Text>
                </View>
            </BaseComponent>
        </>
    )
}

