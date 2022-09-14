import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Search from '../Components/Search';
import Add from '../Components/Add';
import ListStack from './ListStack';

const Stack=createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
    <Stack.Screen name='ListStack' component={ListStack}/>
    <Stack.Screen name='Buscar' component={Search}/>
    <Stack.Screen name='Añadir' component={Add}/>
   
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});