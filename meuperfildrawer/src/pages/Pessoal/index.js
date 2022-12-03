import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
import {styles} from '../../../styles.js'
 
export default function Pessoal() {
  const navigation = useNavigation();
 return (
   <View style={styles.container2}>
     <Text style={styles.titulo}>Dados Pessoais</Text>
     <Text><strong>Nome: </strong>Geovanne Costa Santos</Text>
     <Text><strong>Idade: </strong>21 Anos</Text>
     <Text><strong>Gênero: </strong>Masculino</Text>
     <Text><strong>Nacionalidade: </strong>Brasileiro</Text>
     <Text><strong>Endereço: </strong>Rua Conselheiro Lafaiete n° 30, Bloco B - AP 18</Text>
     <Text><strong>Telefone: </strong>(13) 99793-8290</Text>
     <Text><strong>Parceiro de TCC: </strong>Luca Clemente dos Santos Cruz</Text>
   </View>
  );
}