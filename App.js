import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome,MaterialIcons} from "@expo/vector-icons";

import Home from './Components/Home';
import AppNavigation from './Navigation/AppNavigation';
import Search from './Components/Search';
import Add from './Components/Add';
import Details from './Components/Details';
import ListStack from './Navigation/ListStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Inicio' 
        options={{
          headerShown: false,
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }} component={ListStack}/>

        <Tab.Screen name='Buscar' 
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
        component={Search}/>

        <Tab.Screen name='Agregar' 
        options={{
          tabBarLabel: 'Agregar',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add" color={color} size={size} />
          ),
        }}
        component={Add}/>



      </Tab.Navigator>
    </NavigationContainer>
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