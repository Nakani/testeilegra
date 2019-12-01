import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import { Content, Tab, Tabs } from 'native-base';
import { Styles } from './category.style'

const DATA = [
    {
        id: '0',
        title: 'PetShops',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '1',
        title: 'Veterinários',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '2',
        title: 'Hotéis',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '3',
        title: 'Acessórios',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '4',
        title: 'Medicamentos',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '5',
        title: 'Alimentos',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '6',
        title: 'Dog-Walkers',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
    {
        id: '7',
        title: 'Adoção',
        background: '../../../assets/images/gettyimages-928648602-612x612.jpg'
    },
];

function ItemMovie(item) {
    return (
        <View style={Styles.cardMovie}>

        </View >
    );
}

function renderMovie() {
    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <ItemMovie title={item.title} />}
            keyExtractor={item => item.id}
            horizontal={true}
            style={{ flex: 1, padding: 10 }}
        />
    )
}
export function CategorySection(props) {


    return (
        <View style={Styles.container}>
            <Tabs
                style={{ backgroundColor: 'transparent' }}
            >
                <Tab heading="Início" style={{ backgroundColor: 'transparent' }}>
                    <Tab1 />
                </Tab>
                <Tab heading="Filmes" style={{ backgroundColor: 'transparent' }}>
                    <Tab2 />
                </Tab>
                <Tab heading="Séries" style={{ backgroundColor: 'transparent' }}>
                    <Tab3 />
                </Tab>
                <Tab heading="Infantil" style={{ backgroundColor: 'transparent' }}>
                    <Tab4 />
                </Tab>
            </Tabs>
        </View>
    );

}

function Tab1() {
    return (
        <View >
            {renderMovie()}
        </View>
    )
}
function Tab2() {
    return (
        <View>
            {renderMovie()}
        </View>
    )
}
function Tab3() {
    return (
        <View>
            {renderMovie()}
        </View>
    )
}
function Tab4() {
    return (
        <View>
            {renderMovie()}
        </View>
    )
}