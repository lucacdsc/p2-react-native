import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
import {styles} from '../../../styles.js'
 
export default function Experiencia() {
  const navigation = useNavigation();
 return (
   <View style={styles.container2}>
     <Text style={styles.titulo}>Área Portuária</Text>
     <Text style={{marginBottom: 20}}><strong>Função: </strong>Porteiro (na empresa ADM do Brasil - Santos )</Text>
     <Text style={styles.titulo}>Área do Comércio</Text>
     <Text style={{marginBottom: 20}}><strong>Função: </strong>Atendente (no Restaurante Santa Arena)</Text>
     <Text style={styles.titulo}>Área do TI</Text>
     <Text>No momento não tenho experiência de TI em nenhuma empresa, ainda estou procurando por vagas de estágio</Text>
   </View>
  );
}