import { StyleSheet } from 'react-native'
import { theme } from 'theme'

export const Styles = StyleSheet.create({
    contentHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: '100%',
    },
    contentInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    button: {
        //flex: 1,
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.highlight,
        padding: 10,
        marginBottom: 10
        //width: '50%'
    },

    textButton: {
        color: '#fff',
        fontWeight: '900'
    },

    contentBody: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 10
    },

    iconPlay: {
        color: 'rgba(255, 255, 255, 0.6)',
    },

    iconButton: {
        color: '#fff',
    },
});