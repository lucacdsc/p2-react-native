import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Abertura from './src/pages/Abertura';
import Dados from './src/pages/Dados';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
        name="Abertura"
        component={Abertura}
        options={{
          title:'Abertura de Conta',
          headerStyle:{
            backgroundColor: '#2EBCD8',
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
        />
        
        <Stack.Screen
        name="Dados"
        component={Dados}
        options={{
          title:'Dados informados',
          headerStyle:{
            backgroundColor: '#2EBCD8',
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
        />
 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
