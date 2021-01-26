import { Navigation } from 'react-native-navigation';
import App from './App';
import Intro from './src/screens/Introduce/Intro';
import Detail from './src/screens/Detail';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => Intro);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});