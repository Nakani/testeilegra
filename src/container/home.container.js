import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getLists } from 'reduxs'
import { HomeScreen } from 'screens'
import store from 'react-native-simple-store';

export function HomeContainer(props) {
    const dispatch = useDispatch()
    const listsMovies = useSelector(state => state.listReducer)
    const [banners, setBanners] = useState({ loaded: false, lists: [] });
    const [destaques, setDestaques] = useState({ loaded: false, lists: [] });
    const [recomendados, setRecomendados] = useState([]);
    const idChannelBanner = 'PLTovKDoAy18IUJO5RZqyYhZizjbjJjcMA'
    const idChannelHighlights = 'PL1FTstYfCpbecWlNK6kKQFBHbPZ1vHViW'
    const { navigation } = props

    useEffect(() => {
        listBanners()
        listDestaques()
        listRecommend()
    }, []);

    useLayoutEffect(() => {
        // ListingMovies(listsMovies)
        if (listsMovies.lists.length > 0) {
            ListingMovies(listsMovies.lists)
        }
    }, [listsMovies])

    function ListingMovies(propsLists) {
        switch (propsLists[0].snippet.playlistId) {
            case idChannelBanner:
                setBanners(listsMovies)
                break;

            case idChannelHighlights:
                setDestaques(listsMovies)
                break;
        }
    }

    function listBanners() {
        const idForBanners = idChannelBanner
        getLists(dispatch, idForBanners)

    }

    function listDestaques() {
        const idForHighlights = idChannelHighlights
        getLists(dispatch, idForHighlights)
    }

    function listRecommend() {
        store.get('recommend').then(
            res => {
                console.log(res)
                setRecomendados(res)
            }
        )
    }

    useLayoutEffect(() => {
        // ListingMovies(listsMovies)
        console.log('homeContainer', recomendados)
        // if (listsMovies.lists.length > 0) {
        //     ListingMovies(listsMovies.lists)
        // }
    }, [recomendados])

    function goToDetail(data) {
        navigation.navigate('Detail', { params: data })
    }

    return listsMovies.lists.length > 0 ? (
        <>
            <HomeScreen
                data={destaques}
                banners={banners}
                goTo={goToDetail}
                recommend={recomendados}
            />
        </>
    ) : (
            <>
            </>
        )

}