import React from 'react';
import {

} from 'react-native';
import {
    StackNavigator, TabNavigator, DrawerNavigator
} from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import HomeScreenTab from './components/HomeScreenTab';
import NotificationScreen from './components/NotificationScreen';
import HomeScreenDrawer from './components/HomeScreenDrawer';
import NotiScreenDrawer from './components/NotiScreenDrawer';

const ModalStack = TabNavigator(
    {
        // Home: {
        //     screen: HomeScreen
        // },
        // Profile: {
        //     path: 'people/:name',
        //     screen: ProfileScreen
        // },
        HomeTab: {
            screen: HomeScreenTab
        },
        Notification: {
            screen: NotificationScreen
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#D8202A', // set color for icon of view tab when is actived
            inactiveTintColor: 'green', // set color for icon of view tab when isnt activeds
            activeBackgroundColor: '#C0C0C0', // set background for view tab when is actived
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false, // hide label
            style: {
                marginRight: 10
            }, // style for obj in tab
            labelStyle: {
                fontSize: 24
            }// style for label in tab
        },
        tabBarPosition: 'top', // set position for tab bar
        swipeEnabled: true, // set swipe for tab
        animationEnabled: true,
        // initialRouteName: 'HomeTab', // init tab route when first loading

    }
);
const StackNavi = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Profile: {
            screen: ProfileScreen,
        }
    }
);

const Drawer = DrawerNavigator(
    {
        Stack: {
            screen: StackNavi
        },
        Notification: {
            screen: NotiScreenDrawer
        }
    },
    {
        drawerPosition: 'right',
    }
);
export default Drawer;
