/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {Text} from 'react-native';

export const MapsApp = () => {
  return (
    <NavigationContainer>
      <Text>Maps App</Text>
    </NavigationContainer>
  );
};
