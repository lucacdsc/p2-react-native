import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {styles} from '../../../styles.js'
 
 
export default function Formacao() {
  const navigation = useNavigation();
 return (
   <View style={styles.container2}>
     <Text style={styles.titulo}>Cursos e Certificados</Text>
     <Text><strong>Escolaridade: </strong>Ensino Superior Incompleto</Text>
     <Text><strong>Técnico em: </strong>Informática para Internet (ETEC)</Text>
     <Text><strong>Curso de: </strong>Designer Gráfico (Prepara Cursos Profissionalizantes)</Text>
     <Text><strong>Curso de: </strong>Operador de Computador (Prepara Cursos Profissionalizantes</Text>
     <Text><strong>Curso de: </strong>Inglês (Professor Kenny Mendes)</Text>
   </View>
  );
}