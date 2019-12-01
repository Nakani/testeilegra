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
import { CategorySection } from './sections/category/index'
import { BaseComponent, BannerComponent, ListComponent } from '../../components'

export function HomeScreen(props) {

    function renderBanner(data) {
        console.log('data', props)
        return (
            <View style={Styles.contentBanner}>
                <BannerComponent data={data} goTo={props.goTo} />
            </View>
        )
    }

    function renderCategory(data) {
        return (
            <ListComponent screen='home' data={data} />
        )
    }



    function renderHeader(data) {
        return (
            <ContentHeader>
                {renderBanner(data)}
                <Category>
                    <TitleCategory>
                        Categorias:
                    </TitleCategory>
                    <CategorySection />
                </Category>
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
                {/* {renderCategory()} */}
            </View>
        )
    }
    console.log('homeAqui', props)
    return (
        <>
            <BaseComponent safeAreaView={false}>
                <Container>
                    <ScrollView>
                        {renderHeader(props.banners)}
                        {renderBody(props.data)}
                    </ScrollView>
                </Container>

            </BaseComponent>
        </>
    )
}

