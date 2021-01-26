import React from 'react';
import { Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Login from './src/screens/Login/Login';
import Home from './src/screens/Home';
import Search from './src/screens/Home/Search';

Navigation.registerComponent('login', () => Login);
Navigation.registerComponent('home', () => Home);

Navigation.registerComponent('search', () => Search);

Navigation.events().registerAppLaunchedListener(async () => {
  //   Navigation.setRoot({
  //     root: {
  //       stack: {
  //         children: [
  //           {
  //             component: {
  //               name: 'home',
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: 'login',
              passProps: {
                text: 'This is tab 2',
              },
              options: {
                bottomTab: {
                  text: 'login1',
                  icon: require('./src/assets/images/close.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                },
              },
            },
          },
          {
            component: {
              name: 'login',
              passProps: {
                text: 'This is tab 2',
              },
              options: {
                bottomTab: {
                  text: 'login2',
                  icon: require('./src/assets/images/close.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'home',
                    passProps: {
                      text: 'This is tab 1',
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  icon: require('./src/assets/images/close.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                },
              },
            },
          },
          {
            component: {
              name: 'login',
              passProps: {
                text: 'This is tab 2',
              },
              options: {
                bottomTab: {
                  text: 'login3',
                  icon: require('./src/assets/images/close.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                },
              },
            },
          },
          {
            component: {
              name: 'search',
              passProps: {
                text: 'This is tab 2',
              },
              options: {
                bottomTab: {
                  text: 'search',
                  icon: require('./src/assets/images/close.png'),
                  testID: 'SECOND_TAB_BAR_BUTTON',
                },
              },
            },
          },
        ],
      },
    },
  });
});
