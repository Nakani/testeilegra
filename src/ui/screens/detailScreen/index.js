import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Styles } from './detail.style'

export function DetailScreen(props) {

    function renderHeader() {
        return (
            <>
                <View style={Styles.contentHeader}>

                </View>
                <View style={Styles.contentInfo}>

                </View>
            </>
        )
    }
    return (
        <>
            <View>
                <Text>
                    aqui
                </Text>
            </View>
        </>
    );
};

