import { TabNavigator, StackNavigator } from 'react-navigation';

import Favorites from './components/Favorites';
import Calls from './components/Calls';
import Contact from './components/Contact';
import Chats from './components/Chats';
import Settings from './components/Settings';

const Tab = TabNavigator({
  Favorites: { screen: Favorites },
  Calls: { screen: Calls },
  Contact: { screen: Contact },
  Chats: { screen: Chats },
  Settings: { screen: Settings },
  
});

const Router = StackNavigator({
  Home: { screen: Tab }
});

Tab.navigationOptions = {
  title: 'My Chats',
};

export default Router;
