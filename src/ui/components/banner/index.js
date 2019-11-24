import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Styles
} from './banner.style'
import Swiper from 'react-native-swiper'


export function BannerComponent(props) {
    return (
        <Swiper
            style={Styles.wrapper}
            autoplay={true}
        >
            <View style={Styles.slider}>
                <Image
                    source={require('../../../assets/images/gettyimages-928648602-612x612.jpg')}
                    style={{ width: '100%', height: '100%', position: 'absolute' }}
                />
                <Text style={Styles.text}>Bem Vindo!</Text>
            </View>

            <View style={Styles.slider}>
                <Image
                    source={require('../../../assets/images/gettyimages-1073307172-612x612.jpg')}
                    style={{ width: '100%', height: '100%', position: 'absolute' }}
                />
                <Text style={Styles.text}>Parceiros em destaque 2</Text>
            </View>

            <View style={Styles.slider}>
                <Image
                    source={require('../../../assets/images/gettyimages-1166663286-612x612.jpg')}
                    style={{ width: '100%', height: '100%', position: 'absolute' }}
                />
                <Text style={Styles.text}>Parceiros em destaque 2</Text>
            </View>
        </Swiper >
    )
}