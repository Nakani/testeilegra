import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getLists } from 'reduxs'
import { HomeScreen } from 'screens'
import { number } from 'prop-types';

export function HomeContainer() {
    const dispatch = useDispatch()
    const listsMovies = useSelector(state => state.listReducer)
    const [banners, setBanners] = useState({ loaded: false, lists: [] });
    const [destaques, setDestaques] = useState({ loaded: false, lists: [] });
    const [recomendados, setRecomendados] = useState([]);
    const idChannelBanner = 'PLTovKDoAy18IUJO5RZqyYhZizjbjJjcMA'
    const idChannelHighlights = 'PL1FTstYfCpbecWlNK6kKQFBHbPZ1vHViW'

    useEffect(() => {
        listBanners()
        listDestaques()
    }, []);

    useLayoutEffect(() => {
        // ListingMovies(listsMovies)
        if (listsMovies.lists.length > 0) {
            ListingMovies(listsMovies.lists)
        }
    }, [listsMovies])

    function ListingMovies(propsLists) {
        console.log(propsLists[0].snippet.playlistId)
        switch (propsLists[0].snippet.playlistId) {
            case idChannelBanner:
                console.log('banners', listsMovies)
                setBanners(listsMovies)
                break;

            case idChannelHighlights:
                console.log('destques', listsMovies)
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
    console.log('fim', listsMovies)

    return listsMovies.lists.length > 0 ? (
        <>
            <HomeScreen
                data={destaques}
                banners={banners}
            />
        </>
    ) : (
            <>
            </>
        )

}