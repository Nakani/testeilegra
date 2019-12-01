import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    TouchableHighlight,

} from 'react-native';
import {
    Container,
    ContentHeader,
    ScrollView,
    TitleCategory,
    Category,
    Styles
} from './search.style'
import LottieView from 'lottie-react-native';
import { Input } from "react-native-elements";
import { BaseComponent, ListComponent } from '../../components'
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



export function SearchScreen() {
    const [search, setSearch] = useState([]);

    useEffect(() => {

    }, []);

    function renderSearch() {
        return (
            <View style={Styles.searchContent}>
                <Input
                    placeholder='Digite sua pesquisa...'
                    rightIcon={
                        <TouchableOpacity
                            //style={{ flex: 1, }}
                            onPress={() => setSearch('teste')}
                        >
                            <Icon name={'search'} size={24} />

                        </TouchableOpacity>
                    }
                    style={{ borderWidth: 0 }}
                />
            </View>
        )
    }

    function renderFilters() {
        return (
            <ListComponent screen='search' data={POPULAR} />
        )
    }

    function renderBody() {
        return search != '' ? (
            <View style={Styles.contentBody}>
                <TitleCategory>
                    Resultado:
                    </TitleCategory>
                {renderFilters()}
            </View>
        ) : (
                <View style={Styles.contentBody}>
                    <View>

                    </View>
                </View>
            )
    }

    return (
        <>
            <BaseComponent>
                <Container>
                    {renderSearch()}

                    <ScrollView>
                        {renderBody()}
                    </ScrollView>
                </Container>

            </BaseComponent>
        </>
    )
}

