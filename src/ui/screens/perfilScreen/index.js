import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Dimensions

} from 'react-native';

import { Avatar } from 'react-native-elements'

import ImageOverlay from "react-native-image-overlay";

import { Styles } from './styles'
import { BaseComponent, ListComponent } from '../../components';
import store from 'react-native-simple-store';

export function PerfilScreen(props) {
    const { navigation } = props
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        store.get('recommend').then(
            res => {
                console.log(res)
                setFavorites(res)
            }
        )
    }, []);

    function goTo(data) {
        navigation.navigate('Detail', { params: data })
    }

    function renderHeader() {
        return (

            <View style={Styles.contentHeader}>
                <ImageOverlay
                    source={{ uri: "https://assets.afcdn.com/story/20170629/1100866_w767h767c1cx383cy383.jpg" }}
                    contentPosition="bottom">
                    <Text style={Styles.nameAvatar}>Daenerys Targaryen</Text>
                </ImageOverlay>
            </View>

        )
    }
    function renderBody() {
        return (
            <View style={Styles.contentBody}>
                <Text style={Styles.textCategoria}>
                    Seus Favoritos:
                </Text>
                <ScrollView style={{ flex: 1 }}>
                    <ListComponent screen='user' data={favorites} goTo={goTo} />
                </ScrollView>
            </View>
        )
    }

    return (
        <>
            <BaseComponent>
                <View style={Styles.container}>
                    {renderHeader()}
                    {renderBody()}
                </View>

            </BaseComponent>
        </>
    );
};
