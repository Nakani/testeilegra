import styled from 'styled-components/native'
import { theme } from 'utils/Layout'
import {
    StyleSheet
} from 'react-native';


export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:100%;
`
export const ScrollView = styled.ScrollView`
flex:1
width:100%
`
export const ContentHeader = styled.View`
    flex:1;
    width:100%;
    height:100%;
`

export const Category = styled.View`
    flex:1;
    width:100%;
    height:100%;
    padding-left:15
    padding-right:15
`
export const TitleHome = styled.Text`
text-align:center
font-size:30px
height:50px
`
export const TitleCategory = styled.Text`
font-size:20px
font-weight:600
color:#333333
margin-bottom:30

`
export const ContentBody = styled.View`
flex:1;
width:100%;
height:auto;
background-color:white
    padding-left:15
    padding-right:15
`
export const Styles = StyleSheet.create({

    itemCard: {
        flex: 1,
        width: 150,
        height: 100,
        marginLeft: 15,
        resizeMode: 'contain',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        marginBottom: 30,
        borderWidth: 1
    },

    titlePopular: {
        fontSize: 30,
        fontWeight: '900',
        width: '100%',
        padding: 15,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },

    textPopular: {
        fontSize: 15,
        fontWeight: '900',
        padding: 15,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },

    contentBanner: {
        flex: 1,
        height: 300,
        bottom: 10
    },

    contentBody: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5
    },
})