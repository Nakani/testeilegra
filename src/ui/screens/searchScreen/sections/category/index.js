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

function ItemCategory(item) {
    return (
        <View style={Styles.cardCategory}>
            <Text style={Styles.textCategory}>
                {item.title}
            </Text>
        </View >
    );
}

export function CategorySection(props) {

    function renderCategory() {
        return (
            <FlatList
                data={DATA}
                renderItem={({ item }) => <ItemCategory title={item.title} />}
                keyExtractor={item => item.id}
                horizontal={true}
                style={{ flex: 1, padding: 10 }}
            />
        )
    }

    return (
        <View style={Styles.container}>
            <Tabs
                style={{ backgroundColor: 'transparent' }}
            >
                <Tab heading="Ação" style={{ backgroundColor: 'transparent' }}>
                    <Tab1 />
                </Tab>
                <Tab heading="Romance" style={{ backgroundColor: 'transparent' }}>
                    <Tab2 />
                </Tab>
                <Tab heading="Aventura" style={{ backgroundColor: 'transparent' }}>
                    <Tab3 />
                </Tab>
                <Tab heading="Policial" style={{ backgroundColor: 'transparent' }}>
                    <Tab4 />
                </Tab>
            </Tabs>
        </View>
    );

}

function Tab1() {
    return (
        <View style={{ backgroundColor: '#ccc', }}>
            <Text>
                Aqui
            </Text>
        </View>
    )
}
function Tab2() {
    return (
        <View>
            <Text>
                Aqui
            </Text>
        </View>
    )
}
function Tab3() {
    return (
        <View>
            <Text>
                Aqui
            </Text>
        </View>
    )
}
function Tab4() {
    return (
        <View>
            <Text>
                Aqui
            </Text>
        </View>
    )
}