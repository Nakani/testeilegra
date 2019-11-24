import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        // justifyContent: 'center',
        padding: 0
    },

    contentHeader: {
        //borderWidth: 1,
        flex: 1,
        marginTop: 5,
        width: '100%',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'flex-start',

    },

    avatar: {
        marginVertical: 8,
    },

    nameAvatar: {
        color: '#fff',
        fontSize: 15
    },

    points: {
        borderWidth: 1,
        borderColor: '#000'
    },

    contentInfo: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },

    textInfo: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '900'


    },

    contentCategory: {
        width: '100%',
    },

    cardCategory: {
        width: 200,
        height: 100,
        marginLeft: 5,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    categoryTitle: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        color: '#fff',
        fontSize: 15,
        fontWeight: '900',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },

    contentBody: {
        width: '100%',
    },

    item: {
        borderWidth: 1,
        borderColor: '#000'
    },


    cardEvents: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    eventsTitle: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        color: '#fff',
        fontSize: 15,
        fontWeight: '900',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },


    // detail

    detailTitle: {

    },


})