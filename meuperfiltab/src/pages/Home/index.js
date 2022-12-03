import React from 'react';
import { View, Text, Button, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import {styles} from '../../../styles.js'
 
 
export default function Home() {
  const navigation = useNavigation();
 return (
   <View style={{
      alignItems: 'center', justifyContent: 'center', flex: 1
      }}>
        <Image
        source={require('../../img/foto-curriculo.png')}
        style={{width: 150, height: 150, borderRadius: '50%'}}
        />
        <Text style={{color: '#000', fontSize: 23, marginTop: 50, marginBottom: 20}}>
          Geovanne Costa Santos
        </Text>
        <View style={styles.linha}>
          <Ionicons name='logo-instagram' color="#000" size={30} />
          <Text>@geovanne0101</Text>
        </View>
        <View style={styles.linha}>
          <Ionicons name='logo-facebook' color="#000" size={30} />
          <Text>@geovanne0101</Text>
        </View>
        <View style={styles.linha}>
          <Ionicons name='logo-linkedin' color="#000" size={30} />
          <Text>@geovanne0101</Text>
        </View>
        <View style={styles.linha}>
          <Ionicons name='logo-github' color="#000" size={30} />
          <Text>@Geovanne-Costa</Text>
        </View>
        <View style={styles.linha}>
          <Ionicons name='logo-whatsapp' color="#000" size={30} />
          <Text>(13) 99793-8290</Text>
        </View>
      </View>
  );
}
