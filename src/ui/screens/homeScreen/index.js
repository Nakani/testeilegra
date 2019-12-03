import React, { useEffect, useState } from 'react';
import {
    View,
} from 'react-native';
import {
    Container,
    ContentHeader,
    ScrollView,
    TitleCategory,
    Category,
    Styles,
} from './home.style'
import {
    BaseComponent,
    BannerComponent,
    ListComponent,
    LoadingComponent
} from '../../components'

export function HomeScreen(props) {
    function renderBanner(data) {
        return (
            <View style={Styles.contentBanner}>
                <BannerComponent data={data} goTo={props.goTo} />
            </View>
        )
    }

    function renderCategory(data) {
        return (
            <ListComponent screen='home' data={data} goTo={props.goTo} />
        )
    }

    function renderRecommend(data) {
        console.log('recommen', data)
        return (
            <ListComponent screen='recommend' data={data} goTo={props.goTo} />
        )
    }

    function renderHeader(data) {
        return (
            <ContentHeader>
                {renderBanner(data)}
            </ContentHeader>
        )
    }

    function renderBody(data) {
        return (
            <View style={Styles.contentBody}>
                <TitleCategory>
                    Destaques:
                    </TitleCategory>
                {renderCategory(data)}
                <TitleCategory>
                    Recomendados:
                </TitleCategory>
                {renderRecommend(props.recommend)}
            </View>
        )
    }

    return (
        <>
            <BaseComponent safeAreaView={false}>
                <Container>
                    {renderHeader(props.banners)}
                    <ScrollView style={{ flex: 1 }}>
                        {renderBody(props.data)}
                    </ScrollView>
                </Container>
            </BaseComponent>
        </>
    )
}

