import React from 'react';
import { Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Login from './src/screens/Login/Login';
import Home from './src/screens/Home';
import Search from './src/screens/Home/Search';
import Filter from './src/screens/Filter';
import Type from './src/screens/Type';
import Sort from './src/screens/Sort';

Navigation.registerComponent('login', () => Login);
Navigation.registerComponent('home', () => Home);

Navigation.registerComponent('search', () => Search);
Navigation.registerComponent('filter', () => Filter);
Navigation.registerComponent('type', () => Type);
Navigation.registerComponent('sort', () => Sort);
Navigation.registerComponent('cart', () => Cart);
Navigation.registerComponent('bottomNavigator', () => BottomNavigator);
Navigation.registerComponent('orderList', () => OrderList);
Navigation.registerComponent('intro', () => Intro);

import Cart from './src/screens/Cart';
import BottomNavigator from './src/screens/BottomNavigator';
import OrderList from './src/screens/OrderList';
import Intro from './src/screens/Introduce/Intro';

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'intro',
            },
          },
        ],
      },
    },
  });
});

//   Navigation.setRoot({
//     root: {
//       bottomTabs: {
//         children: [
//           {
//             component: {
//               name: 'cart',
//               passProps: {
//                 text: 'Cart',
//               },
//               options: {
//                 bottomTab: {
//                   text: 'Cart',
//                   icon: require('./src/assets/images/close.png'),
//                   testID: 'SECOND_TAB_BAR_BUTTON',
//                 },
//               },
//             },
//           },
//           {
//             component: {
//               name: 'sort',
//               passProps: {
//                 text: 'Sort',
//               },
//               options: {
//                 bottomTab: {
//                   text: 'Sort',
//                   icon: require('./src/assets/images/close.png'),
//                   testID: 'SECOND_TAB_BAR_BUTTON',
//                 },
//               },
//             },
//           },
//           {
//             stack: {
//               children: [
//                 {
//                   component: {
//                     name: 'home',
//                     passProps: {
//                       text: 'This is tab 1',
//                     },
//                   },
//                 },
//               ],
//               options: {
//                 bottomTab: {
//                   text: 'Home',
//                   icon: require('./src/assets/images/close.png'),
//                   testID: 'FIRST_TAB_BAR_BUTTON',
//                 },
//               },
//             },
//           },
//           {
//             component: {
//               name: 'type',
//               passProps: {
//                 text: 'This is tab 2',
//               },
//               options: {
//                 bottomTab: {
//                   text: 'Type',
//                   icon: require('./src/assets/images/close.png'),
//                   testID: 'SECOND_TAB_BAR_BUTTON',
//                 },
//               },
//             },
//           },
//           {
//             component: {
//               name: 'search',
//               passProps: {
//                 text: 'This is tab 2',
//               },
//               options: {
//                 bottomTab: {
//                   text: 'search',
//                   icon: require('./src/assets/images/close.png'),
//                   testID: 'SECOND_TAB_BAR_BUTTON',
//                 },
//               },
//             },
//           },
//         ],
//       },
//     },
//   });
// });
