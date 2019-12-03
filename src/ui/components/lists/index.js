import React, { useLayoutEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';
import ImageOverlay from 'react-native-image-overlay'
import { ListItem, Left, Right, Thumbnail, Body, Button } from 'native-base'
import {
    Styles
} from './lists.style'

function ItemList(item) {
    return (
        <TouchableOpacity onPress={() => item.goTo(item.data.snippet)} style={{ flex: 1 }}>
            <View style={Styles.itemCard}>
                <ImageOverlay
                    source={{ uri: item.data.snippet.thumbnails.medium.url }}
                    title={item.data.snippet.title}
                    contentPosition="bottom"
                />
            </View>

        </TouchableOpacity>
    );
}

function ItemResult(item) {
    return (
        <TouchableOpacity onPress={() => item.goTo(item.data)} style={{ flex: 1 }}>
            <View style={Styles.itemCard}>
                <ImageOverlay
                    source={{ uri: item.data.thumbnails.medium.url }}
                    title={item.data.title}
                    contentPosition="bottom"
                />
            </View>

        </TouchableOpacity>
    );
}

function renderBody(props) {
    switch (props.screen) {
        case 'home':
            return (
                <FlatList
                    data={props.data.lists}
                    renderItem={({ item }) => <ItemList data={item} goTo={props.goTo} />}
                    keyExtractor={item => item.id}
                    style={{ flex: 1 }}
                    horizontal={true}
                />
            )
            break;
        case 'recommend':
            return (
                <FlatList
                    data={props.data}
                    renderItem={({ item }) => <ItemResult data={item} goTo={props.goTo} />}
                    keyExtractor={item => item.id}
                    style={{ flex: 1 }}
                    horizontal={true}
                />
            )
            break;

        case 'user':
            return (
                <FlatList
                    data={props.data}
                    renderItem={({ item }) => <ItemResult data={item} goTo={props.goTo} />}
                    keyExtractor={item => item.id}
                    style={{ flex: 1 }}
                //horizontal={true}
                />
            )
            break;

    }
}

export function ListComponent(props) {

    return props.data.loaded == true ? (
        <View>
            <Text>
                loading
            </Text>
        </View>
    ) : (
            <View>
                {renderBody(props)}
            </View>
        )
}