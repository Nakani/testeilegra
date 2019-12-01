import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Styles
} from './banner.style'
import Swiper from 'react-native-swiper'

function RenderImage(data) {
    console.log(data.lists.snippet)
    return (
        <>
            <TouchableOpacity onPress={() => data.goTo(data.lists.snippet)} style={{ flex: 1 }}>
                <View style={Styles.slider}>
                    <Image
                        source={{ uri: data.lists.snippet.thumbnails.medium.url }}
                        style={{ width: '100%', height: '100%', position: 'absolute' }}
                    />
                    <Text style={Styles.text}>{data.lists.snippet.title}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}
export function BannerComponent(props) {
    const { lists } = props.data

    return (
        <Swiper
            style={Styles.wrapper}
            autoplay={true}
        >
            {lists.map(item => <RenderImage lists={item} goTo={props.goTo} />)}
        </Swiper >
    )
}