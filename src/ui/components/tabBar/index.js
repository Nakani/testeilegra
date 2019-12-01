import React from 'react'
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
            case 'Search':
                iconName = 'search';
                break;
            case 'Chat':
                iconName = 'comment';
                break;
            case 'My':
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