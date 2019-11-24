import styled from 'styled-components/native'
import { theme } from 'utils/Layout'
import {
    StyleSheet
} from 'react-native';

export const Styles = StyleSheet.create({
    contentBanner: {
        flex: 1,
        height: 300,
    },
    wrapper: { position: 'absolute', top: 0 },
    slider: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'rgba(37, 37, 37, 0.3)',
        padding: 20,
    }
})