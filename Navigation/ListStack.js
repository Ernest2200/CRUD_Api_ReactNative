import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Components/Home';
import Details from '../Components/Details';
import Update from '../Components/Update';
export default function ListStack() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      
    }}>
      <Stack.Screen name='Inicio' component={Home}/>
      <Stack.Screen name='Detalles' component={Details}/>
      <Stack.Screen name='Actualizar' component={Update}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
 
});