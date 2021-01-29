import React from 'react';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Register from '../screens/Register/Register';
import Login from '../screens/Login/Login';
import BottomNavigator from '../screens/BottomNavigator';
import SeeMore from '../screens/Home/SeeMore';

const SCREENS_WITH_REDUX = {
  Login,
  Register,
  BottomNavigator,
  SeeMore,
};
const SCREENS = {};

function registerScreens(store, persistor) {
  const PersistProvider = (props) => {
    const { children } = props;
    return (
      <Provider {...props}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  };

  Object.keys(SCREENS_WITH_REDUX).map((screenName) => {
    Navigation.registerComponentWithRedux(
      screenName,
      () => gestureHandlerRootHOC(SCREENS_WITH_REDUX[screenName]),
      PersistProvider,
      store,
    );
  });

  Object.keys(SCREENS).map((screenName) => {
    Navigation.registerComponent(screenName, () => SCREENS[screenName]);
  });
}

export default registerScreens;
