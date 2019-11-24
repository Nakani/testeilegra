import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { theme } from '../theme'
import { TabBarButton, QrCodeComponent } from '../ui/components'
import { multibar, MultiBarToggle } from 'react-native-multibar'
//navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//UI
import {
    HomeScreen,
    DiscountScreen,
    PerfilScreen,
    BotScreen,
    ScanScreen
} from '../ui/screens'

const homeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },
});

const discountStack = createStackNavigator({
    Discount: {
        screen: DiscountScreen,
        navigationOptions: {
            header: null,
        },
    },
});

const scanCodeStack = createStackNavigator({
    ScanCode: {
        screen: ScanScreen,
        navigationOptions: {
            header: null,
        },
    },
});

const botStack = createStackNavigator({
    Bot: {
        screen: BotScreen,
        navigationOptions: {
            header: null,
        },
    },
});

const userStack = createStackNavigator({
    Perfil: {
        screen: PerfilScreen,
        navigationOptions: {
            header: null,
        },
    },
});

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    return <TabBarButton
        routeName={routeName}
        focused={focused}
        tintColor={tintColor}
    />
};

const TabNavigator = createBottomTabNavigator({
    Home: homeStack,
    Descontos: discountStack,
    MultiBar: {
        screen: () => null,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: () => (
                <MultiBarToggle
                    navigation={navigation}
                    actionSize={30}
                    routes={[
                        {
                            routeName: scanCodeStack,
                            color: '#fff',
                            icon: (
                                <Icon
                                    name="qrcode"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: homeStack,
                            color: '#fff',
                            icon: (
                                <Icon
                                    name="search"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: homeStack,
                            color: '#fff',
                            icon: (
                                <Icon
                                    name="bell"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                    ]}
                    icon={(
                        <Icon
                            name="plus"
                            color="#FFFFFF"
                            size={24}
                        />
                    )}
                />
            )
        }),
        params: {
            navigationDisabled: true
        }
    },
    Chat: botStack,
    Eu: userStack,
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            activeTintColor: theme.colorTab.activeColor,
            inactiveTintColor: theme.colorTab.inactiveColor,
            showLabel: false,
            style: {
                backgroundColor: theme.themeApp.backgroundTabBar,
                paddingBottom: 5
            }
        },
        tabBarComponent: multibar,
    },

);

export default createAppContainer(TabNavigator);    