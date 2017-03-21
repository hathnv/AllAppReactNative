import { TabNavigator, TabView } from 'react-navigation';

import FavoritesNavigator from './navigators/FavoritesNavigator';
import CollectionsNavigator from './navigators/CollectionsNavigator';
import OEMNavigator from './navigators/OEMNavigator';

const RootNavigator = TabNavigator({
    Favorites: { screen: FavoritesNavigator },
    Collections: { screen: CollectionsNavigator },
    OEM: { screen: OEMNavigator }
}, {
        tabBarComponent: TabView.TabBarBottom,
        tabBarPosition: 'bottom',
        initialRouteName: 'Collections',
        tabBarOptions: {
            activeTintColor: '#00CE71', // set color for icon of view tab when is actived
            inactiveTintColor: '#929292', // set color for icon of view tab when isnt activeds
            style: {
                backgroundColor: '#0C0D0F',
                paddingTop: 10,
                paddingBottom: 3
            },
            labelStyle: {
                fontSize: 11,
                fontWeight: '300'
            }
        }
    });

export default RootNavigator;