import React from 'react'
import {
    PixelRatio,
    Dimensions,
} from 'react-native';
import YouTube from 'react-native-youtube'
import { Styles } from './video.style'

export function VideoComponent(props) {
    return (
        <YouTube
            videoId={props.videoId}
            play={false}
            fullScreen={true}
            loop={true}
            style={[
                { height: PixelRatio.roundToNearestPixel(Dimensions.get('window').width / (16 / 9)) },
                Styles.player,
            ]}
        />
    )

}
