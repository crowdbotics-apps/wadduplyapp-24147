import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile198489Navigator from '../features/UserProfile198489/navigator';
import Maps198470Navigator from '../features/Maps198470/navigator';
import Settings198448Navigator from '../features/Settings198448/navigator';
import Settings198433Navigator from '../features/Settings198433/navigator';
import NotificationList198432Navigator from '../features/NotificationList198432/navigator';
import Maps198431Navigator from '../features/Maps198431/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile198489: { screen: UserProfile198489Navigator },
Maps198470: { screen: Maps198470Navigator },
Settings198448: { screen: Settings198448Navigator },
Settings198433: { screen: Settings198433Navigator },
NotificationList198432: { screen: NotificationList198432Navigator },
Maps198431: { screen: Maps198431Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
