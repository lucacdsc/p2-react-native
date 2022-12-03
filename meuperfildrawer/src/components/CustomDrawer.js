import React from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
 
export default function CustomDrawer(props){
  return(
    <DrawerContentScrollView {...props} >
      <View style={{
      width: '100%', height: 77, alignItems: 'center', justifyContent: 'center',
      marginTop: 80
      }}>
        <Image
        source={require('../img/foto-curriculo.png')}
        style={{width: 100, height: 100, borderRadius: '50%'}}
        />
        <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom:80}}>
          Geovanne Costa Santos
        </Text>
      </View>
 
      <DrawerItemList {...props} />
 
    </DrawerContentScrollView>
  );
}
