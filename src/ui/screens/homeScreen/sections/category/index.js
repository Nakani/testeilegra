import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
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
            {renderCategory()}
        </View>
    );

}