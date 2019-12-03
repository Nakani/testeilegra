import React from 'react';
import { theme } from '../theme'
import { TabBarButton } from '../ui/components'
//navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//UI
import {
    HomeContainer,
    DetailContainer
} from 'containers'
import {
    SearchScreen,
    PerfilScreen,
    BotScreen,
} from '../ui/screens'

const homeStack = createStackNavigator({
    Home: {
        screen: HomeContainer,
        navigationOptions: {
            header: null,
        },
    },
    Detail: {
        screen: DetailContainer,
        navigationOptions: {
            header: null,
        },
    },
});

const searchStack = createStackNavigator({
    Search: {
        screen: SearchScreen,
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
    //Search: searchStack,
    Chat: botStack,
    My: userStack,
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
    },

);

export default createAppContainer(TabNavigator);