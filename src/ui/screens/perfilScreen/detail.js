import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    Alert

} from 'react-native';

import { Styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler';

export function DetailScreen(props) {
    console.log('detail', props)
    function renderBody() {
        return (
            <>
                <View style={Styles.contentBody}>
                    <Text>
                        aqui
                    </Text>
                </View>
            </>
        )
    }

    return (
        <>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={{ uri: 'https://cdn.uhuu.com/assets/img/uhuu/publico.png' }}
            >
                <SafeAreaView>
                    <View>
                        <ScrollView style={{ marginBottom: 55 }}>

                            <ImageBackground
                                style={{ width: '100%', height: 200 }}
                                source={{ uri: props.navigation.state.params.item.background }}
                            >
                                <View style={{ width: '100%', height: 200 }} />
                            </ImageBackground>
                            <View style={{ padding: 10, marginBottom: 30 }}>
                                <Text style={{
                                    top: 10,
                                    width: '100%',
                                    textAlign: 'center',
                                    color: '#fff',
                                    fontSize: 30,
                                    fontWeight: '900',
                                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                    textShadowOffset: { width: -1, height: 1 },
                                    textShadowRadius: 10
                                }}>
                                    {props.navigation.state.params.item.title}
                                </Text>
                                <Text style={{
                                    top: 10,
                                    width: '100%',
                                    textAlign: 'center',
                                    color: '#fff',
                                    fontSize: 17,
                                }}>
                                    {props.navigation.state.params.item.description}
                                </Text>
                            </View>
                            <View style={{
                                rowDirection: 'row',
                                flex: 1,
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'space-between',

                            }}>
                                <Text style={{ color: '#fff', fontSize: 15 }}>
                                    Data:15/12/2019
                                </Text>
                                <Button
                                    style={{ backgroundColor: 'rgba(238, 54, 128, 0.75)', color: '#fff', marginTop: 10, borderWidth: 1, borderColor: '#fff' }}
                                    //appearance='outline'
                                    onPress={() => Alert.alert('Uhuu!', 'ingresso adquirido com sucesso!')}
                                >
                                    Resgatar</Button>
                            </View>
                            <View>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </ImageBackground >
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        justifyContent: 'center',
    },
    contentHeader: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});