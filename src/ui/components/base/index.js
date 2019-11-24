import React, { Fragment } from 'react';
import {
    SafeAreaView, ImageBackground
} from 'react-native';
import { Styles } from './base.style'

const background = require('../../../assets/backgrounds/beautiful-color-gradients-backgrounds-075-clean-mirror.png')

export function BaseComponent(props) {
    const { children, ...rest } = props
    console.log('safe', rest.safeAreaView)
    return rest.safeAreaView == undefined ? (
        <>
            <ImageBackground
                //source={background}
                style={{ width: '100%', height: '100%', backgroundColor: '#f7f7f7' }}>

                <SafeAreaView style={{ flex: 1 }}>
                    {children}
                </SafeAreaView>

            </ImageBackground>
        </>
    ) : (
            <>
                <ImageBackground
                    //source={background}
                    style={{ width: '100%', height: '100%', backgroundColor: '#f7f7f7' }}>
                    {children}
                </ImageBackground>
            </>
        )
}

