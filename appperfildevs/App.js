import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      useratual: '',
      userfoto: '',
      github: 'https://github.com/'
    };
  }
  render() {
    const { id, name, public_repos, created_at, followers, following, login } = this.state.user;

    return (
      <View style={styles.container}>
        

        <Text style={styles.titleApp}>Perfil dos Devs</Text>

        <View style={{justifyContent: 'space-around', alignItems: 'center', }}>
          <Image style={{width: 150, height: 150, borderRadius: 500, marginTop: 20}} source={{uri: this.state.github + this.state.userfoto + ".png"}} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={styles.input}
            placeholder="Digite o Username Github"
            onChangeText={(valor) => this.setState({ useratual: valor })}
          />
          <TouchableOpacity
            style={{ padding: 5, backgroundColor: '#2be067' }}
            onPress={async () => {
              if (this.state.useratual != '') {
                const response = await api.get(this.state.useratual);
                this.setState({
                  user: response.data,
                  userfoto: this.state.useratual
                });
              }
            }}>
            <Entypo name="check" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ margin: 20 }}>
          <Text>Id: {id}</Text>
          <Text>Nome: {name}</Text>
          <Text>Repositórios: {public_repos}</Text>
          <Text>Criado em: {created_at}</Text>
          <Text>Seguidores: {followers}</Text>
          <Text>Seguindo: {following}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleApp: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 22,
    fontWeight: 600,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    width: '80%'
  },
});

export default App;
