import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './app/screens/DetailsScreen';
import HomeScreen from './app/screens/HomeScreen';

const RootStack = createNativeStackNavigator();

const linking = {
  prefixes: [
    'lobb://', 'https://lobb.com'
  ],
  config: {
    screens: {
      Home: '/home',
      Details: '/details',
    },
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;