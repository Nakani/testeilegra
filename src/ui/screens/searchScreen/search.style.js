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
    padding-left:10px
    padding-right:10px
`
export const ScrollView = styled.ScrollView`
flex:1
width:100%
`
export const ContentHeader = styled.View`
    flex:1;
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
color:#fff
margin-bottom:30px

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
        marginTop: 5,
        backgroundColor: '#fff',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 }
    },

    images: {
        width: 100,
        height: 100
    },

    titleContent: {
        flex: 1,
        width: '100%',
        height: 100,
        borderWidth: 1,
    },

    inputSearch: {
        width: '100%',
        height: 30,
        padding: 10,
        borderWidth: 1
    },

    textPopular: {
        fontSize: 15,
        fontWeight: '900',
        padding: 15,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
    },

    searchContent: {
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 },
        marginBottom: 30,
    },



    contentBody: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5
    },
})