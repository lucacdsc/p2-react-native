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
  Pressable
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Entypo } from '@expo/vector-icons';

import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
      moedaBAPI: [],
      moedaA: 0,
      moedaB: 0,
      res: '',
    };
  }

  render() {
    const { ask } = this.state.moedaBAPI;


    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Conversor de Moedas: Dólar, Real e Euro
        </Text>

        <TextInput
          style={styles.inputt} 
          keyboardType="numeric" 
          placeholder="Digite o valor para converter"
          onChangeText={(valor) => this.setState({ val: valor })}
        />

        <Text style={styles.titulo}>De:</Text>

        <Picker
          style={styles.picker}
          selectedValue={this.state.moedaA}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ moedaA: itemValue })
          }>
          <Picker.Item key={0} value={0} label="Escolha a moeda"/>
          <Picker.Item key={1} value={'BRL'} label="Real"/>
          <Picker.Item key={2} value={'USD'} label="Dólar"/>
          <Picker.Item key={3} value={'EUR'} label="Euro"/>
          <Picker.Item key={4} value={'BTC'} label="Bitcoin"/>
        </Picker>

        <Text style={styles.titulo}>Para:</Text>


        <Picker
          style={styles.picker}
          selectedValue={this.state.moedaB}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ moedaB: itemValue})
          }>
          <Picker.Item key={0} value={0} label="Escolha a moeda"/>
          <Picker.Item key={1} value={'BRL'} label="Real"/>
          <Picker.Item key={2} value={'USD'} label="Dólar"/>
          <Picker.Item key={3} value={'EUR'} label="Euro"/>
          <Picker.Item key={4} value={'BTC'} label="Bitcoin"/>
        </Picker>

        <Pressable style={styles.botao} onPress={async () => {
              if (this.state.val == '' || this.state.moedaA == '' || this.state.moedaB == '') {
                alert("Preencha todos os campos!")
              }
              else if(this.state.moedaA == this.state.moedaB){
                alert("Conversão Inválida!")
              } 
              else{
                const response = await api.get(this.state.moedaB + "-" + this.state.moedaA);

                this.setState({
                  moedaBAPI: response.data[this.state.moedaB + this.state.moedaA]
                  //res: (this.state.val / ask).toFixed(2),
                });
              }
            }}>
          <Text style={styles.textobotao}>Converter</Text>
        </Pressable>

        <Text style={styles.res}>{(this.state.moedaA == this.state.moedaB ? 0 : this.state.val / ask).toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#2EBCD8',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputt: {
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '90%',
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  
  botao: {
    width: 300,
    padding: 10,
    backgroundColor: '#81ecec',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor:'#00cec9',
    marginVertical: 15
  },
  textobotao: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  res: {
    fontSize: 45,
    color: 'red'
  },
  picker: {
    marginBottom: 15,
    padding: 5,
    fontSize: 20,
    width: '60%'
  }
});

export default App;
