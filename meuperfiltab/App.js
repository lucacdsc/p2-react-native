import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons';
 
import Home from './src/pages/Home';
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';
 
const Tab = createBottomTabNavigator();
 
const icons = {
  Home:{
    name: 'logo-react',
  },
  Pessoal:{
    name: 'finger-print-outline',
  },
  Formacao:{
    name: 'school-outline',
  },
  Experiencia:{
    name: 'rocket-outline',
  }
}
 
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      tabBarOptions={{
        style:{
          backgroundColor: '#fff'
        },
        activeTintColor: '#39a331'
      }}
      >

        <Tab.Screen name='Home'component={Home} 
      options={{title:'Perfil'}}/>
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formacao' component={Formacao}
      options={{title:'Formação'}} />
        <Tab.Screen name='Experiencia' component={Experiencia}
      options={{title:'Experiência'}} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
