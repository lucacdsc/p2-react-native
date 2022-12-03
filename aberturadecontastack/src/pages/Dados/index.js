import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../../../styles.js';
 
export default function Dados( {route} ){
  const navigation = useNavigation();
 
  return(
    <View style={styles.dados}>
      <Text style={styles.dadosItem}>Nome: {route.params?.nome}</Text>
      <Text style={styles.dadosItem}>Idade: {route.params?.idade}</Text>
      <Text style={styles.dadosItem}>Sexo: {route.params?.sexo}</Text>
      <Text style={styles.dadosItem}>Escolaridade: {route.params?.escolaridade}</Text>
      <Text style={styles.dadosItem}>Limite: R${route.params?.limite.toFixed(2)}</Text>
      <Text style={styles.dadosItem}>Brasileiro: {route.params?.status ? "Sim" : "Não"}</Text>
    </View>
  )
}
