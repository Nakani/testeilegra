import React from 'react';
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
        <View style={Styles.itemCard}>
            <ImageOverlay
                source={{ uri: item.data.snippet.thumbnails.medium.url }}
                title={item.data.snippet.title}
                contentPosition="bottom"
            />
        </View>
    );
}

function ItemResult(item) {
    return (
        <View style={Styles.itemResult}>
            <ListItem thumbnail>
                <Left>
                    <Thumbnail
                        square
                        style={Styles.images}
                        source={require('../../../assets/images/gettyimages-928648602-612x612.jpg')} />
                </Left>
                <Body>
                    <Text>{item.data.title}</Text>
                    <Text note numberOfLines={1}>Desconto de {item.data.discount}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>Ver</Text>
                    </Button>
                </Right>
            </ListItem>
        </View >
    );
}

function renderBody(props) {
    switch (props.screen) {
        case 'home':
            return (
                <FlatList
                    data={props.data.lists}
                    renderItem={({ item }) => <ItemList data={item} />}
                    keyExtractor={item => item.id}
                    style={{ flex: 1 }}
                    horizontal={true}
                />
            )
            break;
        case 'search':
            return (
                <FlatList
                    data={props.data}
                    renderItem={({ item }) => <ItemResult data={item} />}
                    keyExtractor={item => item.id}
                    style={{ flex: 1 }}
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