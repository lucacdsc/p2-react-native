import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import {styles} from '../../../styles.js'
 
 
export default function Home() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
     <Text style={{fontSize: 18, marginBottom: 20}}>Clique no menu no lado superior esquerdo para acessar as informações</Text>
    <Ionicons name="menu" size={45} color={'#545454'} />
   </View>
  );
}
