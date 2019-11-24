import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';
import {
    Container,
    ContentBody,
    ContentHeader,
    ScrollView,
    TitleHome,
    TitleCategory,
    Category,
    Styles
} from './home.style'
import { Avatar } from 'react-native-elements'
import { CategorySection } from './sections/category/index'
import ImageOverlay from "react-native-image-overlay";
import { BaseComponent, BannerComponent } from '../../components'
import { dialogflow } from '../../../services/dialogflow'


const POPULAR = [
    {
        id: '0',
        title: 'PetShop Mundo Animal',
        rating: '5',
        discount: '10%',
        services: 'banho e tosa',
        distancy: '5',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '1',
        title: 'Clínica veterinária Águia',
        rating: '5',
        discount: '20%',
        services: 'Veterinários',
        distancy: '20',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '2',
        title: 'Hotel Canino',
        discount: '30%',
        rating: '5',
        distancy: '10',
        services: 'Veterinários',
        background: '../../../assets/imagettyimages-993111000-612x612'
    },
];

function ItemCard(item) {
    console.log(item)
    return (
        <View style={Styles.itemCard}>
            <TouchableOpacity
                style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                }}>
                <ImageOverlay
                    source={require('../../../assets/images/gettyimages-993111000-612x612.jpg')}

                >
                    <Text style={Styles.titlePopular}>
                        {item.data.title}
                    </Text>
                    <Text style={Styles.textPopular}>
                        produtos e serviços com até: {item.data.discount}
                    </Text>
                    <Text style={Styles.textPopular}>
                        Categoria:{item.data.services}
                    </Text>
                    <Text style={Styles.textPopular}>
                        {item.data.distancy}km de você
                </Text>
                </ImageOverlay>
            </TouchableOpacity>
        </View >
    );
}

export function HomeScreen() {
    const [welcome, setWelcome] = useState([]);

    useEffect(() => {
    }, []);

    function renderBanner() {
        return (
            <View style={Styles.contentBanner}>
                <BannerComponent />
            </View>
        )
    }

    function renderDestaques() {
        return (
            <FlatList
                data={POPULAR}
                renderItem={({ item }) => <ItemCard data={item} />}
                keyExtractor={item => item.id}
                style={{ flex: 1 }}
            />
        )
    }

    function renderHeader() {
        return (
            <ContentHeader>
                {renderBanner()}
                <Category>
                    <TitleCategory>
                        Categorias:
                    </TitleCategory>
                    <CategorySection />
                </Category>
            </ContentHeader>
        )
    }

    function renderBody() {
        return (
            <View style={Styles.contentBody}>
                <TitleCategory>
                    Destaques perto de você:
                    </TitleCategory>
                {renderDestaques()}
            </View>
        )
    }

    return (
        <>
            <BaseComponent safeAreaView={false}>
                <Container>
                    <ScrollView>
                        {renderHeader()}
                        {renderBody()}
                    </ScrollView>
                </Container>

            </BaseComponent>
        </>
    )
}

