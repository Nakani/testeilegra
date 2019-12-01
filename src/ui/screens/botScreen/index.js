import React, { useEffect } from 'react';
import { BaseComponent, ChatBot } from '../../components'
export function BotScreen() {

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

