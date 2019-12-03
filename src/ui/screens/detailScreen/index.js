import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { BaseComponent, VideoComponent } from 'components'
import { Styles } from './detail.style'

export function DetailScreen(props) {

    function renderHeader(data) {
        return (
            <>
                <View style={Styles.contentInfo}>
                    <TouchableOpacity
                        onPress={() => props.favorites(props.data)}
                        style={{ flex: 1 }}
                    >
                        <View style={Styles.button}>
                            <Icon
                                name={'star'}
                                size={35}
                                style={Styles.iconButton}
                            />
                            <Text style={Styles.textButton}> Favoritos</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.recommend(props.data)}
                        style={{ flex: 1 }}
                    >
                        <View style={Styles.button}>
                            <Icon
                                name={'heart'}
                                size={35}
                                style={Styles.iconButton}
                            />
                            <Text style={Styles.textButton}> Recomendar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    function renderBody(data) {
        return (
            <ScrollView>
                <View style={Styles.contentBody}>
                    <Text>
                        {props.data.description}
                    </Text>
                </View>
            </ScrollView>
        )
    }

    return (
        <>
            <BaseComponent>
                <VideoComponent videoId={props.data.resourceId.videoId} />
                {renderHeader(props.data)}
                {renderBody(props.data)}
            </BaseComponent>
        </>
    );
};

