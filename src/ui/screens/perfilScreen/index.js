import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    ScrollView

} from 'react-native';

import { Avatar } from 'react-native-elements'

import { Styles } from './styles'

export function PerfilScreen(props) {

    function renderHeader() {
        return (
            <>
                <View style={Styles.contentHeader}>
                    <Avatar
                        style={Styles.avatar}
                        size='giant'
                        source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }} />
                    <Text style={Styles.nameAvatar}>Daenerys Targaryen</Text>
                </View>
                <View style={Styles.contentInfo}>
                    <Text style={Styles.textInfo}>
                        100Pts Disponiveis
                    </Text>
                    <Text style={Styles.textInfo}>
                        4 Eventos
                    </Text>
                </View>
            </>
        )
    }
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={Styles.container}>
                        {renderHeader()}
                    </View>
                </ScrollView>
            </SafeAreaView>
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