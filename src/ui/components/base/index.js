import React, { Fragment } from 'react';
import {
    SafeAreaView, ImageBackground
} from 'react-native';
import { Styles } from './base.style'

const background = require('../../../assets/backgrounds/beautiful-color-gradients-backgrounds-075-clean-mirror.png')

export function BaseComponent(props) {
    const { children, ...rest } = props
    return rest.safeAreaView == undefined ? (
        <>
            <ImageBackground
                style={Styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    {children}
                </SafeAreaView>
            </ImageBackground>
        </>
    ) : (
            <>
                <ImageBackground
                    style={{ width: '100%', height: '100%', backgroundColor: '#f7f7f7' }}>
                    {children}
                </ImageBackground>
            </>
        )
}

