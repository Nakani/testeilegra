import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,

} from 'react-native';
import {
    Container,
    ContentHeader,
    ScrollView,
    TitleCategory,
    Category,
    Styles
} from './discount.style'

import { List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';


import { CategorySection } from './sections/category/index'
import { Input } from "react-native-elements";
import { BaseComponent } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome';


const POPULAR = [
    {
        id: '0',
        title: 'PetShops',
        rating: '5',
        discount: '10%',
        services: 'banho e tosa',
        distancy: '5',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '1',
        title: 'Banho e tosa higiênica',
        rating: '5',
        discount: '20%',
        empresa: 'PetShopnários',
        services: 'veterinários',
        distancy: '20',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '2',
        title: 'Ração 10kg',
        discount: '30%',
        rating: '5',
        distancy: '10',
        empresa: 'PetShop',
        services: 'hoteis',
        background: '../../../assets/imagettyimages-993111000-612x612'
    },
    {
        id: '3',
        title: 'vacina anti-rabica',
        discount: '30%',
        rating: '5',
        distancy: '10',
        empresa: 'PetShop',
        services: 'hoteis',
        background: '../../../assets/imagettyimages-993111000-612x612'
    },
    {
        id: '4',
        title: 'tosa a tesoura',
        discount: '30%',
        rating: '5',
        distancy: '10',
        empresa: 'PetShop',
        services: 'hoteis',
        background: '../../../assets/imagettyimages-993111000-612x612'
    },
    {
        id: '5',
        title: 'tosa a maquina',
        discount: '30%',
        rating: '5',
        distancy: '10',
        empresa: 'PetShop',
        services: 'hoteis',
        background: '../../../assets/imagettyimages-993111000-612x612'
    },
    {
        id: '6',
        title: 'Dog-Walkers 1h/dia',
        discount: '30%',
        rating: '5',
        distancy: '10',
        services: 'hoteis',
        background: '../../../assets/imagettyimages-993111000-612x612'
    },
    {
        id: '7',
        title: 'lindos filhotes de gatos',
        discount: '30%',
        rating: '5',
        distancy: '10',
        services: 'hoteis',
        background: '../../../assets/imagettyimages-993111000-612x612'
    },


];

function ItemCard(item) {
    console.log(item)
    return (
        <View style={Styles.itemCard}>
            <ListItem thumbnail>
                <Left>
                    <Thumbnail
                        square
                        style={Styles.images}
                        source={require('../../../assets/images/gettyimages-928648602-612x612.jpg')} />
                </Left>
                <Body>
                    <Text>{item.data.title}</Text>
                    <Text note numberOfLines={1}>Desconto de {item.data.discount}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>Ver</Text>
                    </Button>
                </Right>
            </ListItem>
        </View >
    );
}

export function DiscountScreen() {
    const [welcome, setWelcome] = useState([]);

    useEffect(() => {

    }, []);

    function renderSearch() {
        return (
            <View style={Styles.searchContent}>
                <Input
                    placeholder=' Ex: Ração Golden Retriever'
                    rightIcon={
                        <Icon
                            name='search'
                            size={25}
                            color='#333333'
                            onPress={() => alert('pesquisar')}
                        />
                    }
                    style={{ borderWidth: 0 }}
                />
            </View>
        )
    }

    function renderFilters() {
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
                    Destaques:
                    </TitleCategory>
                {renderFilters()}
            </View>
        )
    }

    return (
        <>
            <BaseComponent>
                <Container>
                    {renderSearch()}
                    <ScrollView>
                        {renderHeader()}
                        {renderBody()}
                    </ScrollView>
                </Container>

            </BaseComponent>
        </>
    )
}

