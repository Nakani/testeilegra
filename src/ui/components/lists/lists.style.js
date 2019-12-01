import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({

    itemCard: {
        flex: 1,
        //width: 150,
        // height: 100,
        marginLeft: 15,
        resizeMode: 'contain',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        marginBottom: 30,
        borderWidth: 1
    },

    textCategory: {
        fontSize: 15,
        fontWeight: '900',
        padding: 15,
        color: '#333333'
    },

    itemResult: {
        flex: 1,
        marginTop: 5,
        backgroundColor: '#fff',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 }
    },

    images: {
        width: 100,
        height: 100,
        right: 15
    },

})