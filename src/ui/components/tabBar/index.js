import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export function TabBarButton(props) {
    function renderTab(data) {
        const { routeName, tintColor, focused } = data
        let iconName;
        switch (props.routeName) {
            case 'Home':
                iconName = 'home';
                break;
            case 'Descontos':
                iconName = 'ticket';
                break;
            case 'Chat':
                iconName = 'comment';
                break;
            case 'Eu':
                iconName = 'user';
                break;
        }

        return <Icon
            name={iconName}
            size={35}
            style={{ color: props.tintColor }}
        />;
    }
    return (
        <View>
            {renderTab(props)}
        </View>
    )

}

export function TabBarMore(props) {
    return (
        <View>
            <Text>
                aqui
           </Text>
        </View>
    )
}