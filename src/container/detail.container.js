import React from 'react';
import { Alert } from 'react-native'
import { DetailScreen } from 'screens'
import store from 'react-native-simple-store';

export function DetailContainer(props) {
    const { params } = props.navigation.state.params

    function saveFavorites(data) {
        store.get("favorites").then(
            res => {
                if (res) {
                    res.map((item) => {
                        console.log(item.resourceId.videoId)
                        if (item.resourceId.videoId !== data.resourceId.videoId) {
                            store.push("favorites", data);
                            Alert.alert('Sucesso!', 'vídeo salvo!')
                        } else {
                            Alert.alert('atenção!', 'vídeo já salvo!')
                        }
                    })
                } else {
                    store.push("favorites", data);
                    Alert.alert('Sucesso!', 'vídeo salvo!')
                }
            }
        );
    }

    function setRecommend(data) {
        store.get("recommend").then(
            res => {
                if (res) {
                    res.map((item) => {
                        console.log(item.resourceId.videoId)
                        if (item.resourceId.videoId !== data.resourceId.videoId) {
                            store.push("recommend", data);
                            Alert.alert('Sucesso!', 'vídeo recomendado!')
                        } else {
                            Alert.alert('atenção!', 'vídeo já recomendado!')
                        }
                    })
                } else {
                    store.push("recommend", data);
                    Alert.alert('Sucesso!', 'vídeo recomendado!')
                }
            }
        );
    }

    return (
        <>
            <DetailScreen
                data={params}
                recommend={setRecommend}
                favorites={saveFavorites}
            />
        </>
    )
}