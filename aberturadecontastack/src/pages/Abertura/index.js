import React, { Component, useState } from 'react';
import { Text, View, TextInput, Pressable, Switch, Button} from 'react-native';

import { Picker } from '@react-native-picker/picker';
 
import Slider from '@react-native-community/slider'; 

import { useNavigation } from '@react-navigation/native';


import { styles } from '../../../styles.js';

export default function Abertura(){

  const navigation = useNavigation();
 
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState(0);
  const [escolaridade, setEscolaridade] = useState(0);
  const [limite, setLimite] = useState(200);
  const [status, setStatus] = useState(false);
  const [res, setRes] = useState('');
  const toggleSwitch = () => setStatus(previousState => !previousState);


  function irDados(){

    if(nome == ''){
      setRes("Digite seu nome!")
    }else if(idade == 0){
      setRes("Digite sua idade")
    }else if(sexo == 0){
      setRes("Escolha seu Sexo!")
    }else if(escolaridade == 0){
      setRes("Escolha sua Escolaridade!")
    }else{
      navigation.navigate('Dados', { nome: nome, idade: idade, sexo: sexo, escolaridade: escolaridade, limite: limite, status: status });
      setRes('');
    }
    
  }
    return (
      <View style={styles.container}>
        <View style={styles.rows}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.inputt} placeholder="Digite seu nome"
              onChangeText={(nome) => setNome(nome)}
            />
        </View>

        <View style={styles.rows}>
          <Text style={styles.label}>Idade:</Text>
          <TextInput style={styles.inputt} 
              keyboardType="numeric" 
              placeholder="Digite sua idade"
              onChangeText={(valor) => setIdade(valor)}
            />
        </View>

        <View style={styles.rows}>
          <Text style={styles.label}>Sexo:</Text>
          <Picker
            style={styles.picker}
            selectedValue={sexo}
            onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
          >
            <Picker.Item key={0} value={0} label="Escolha o Sexo" />
            <Picker.Item key={1} value={"Masculino"} label="Masculino" />
            <Picker.Item key={2} value={"Feminino"} label="Feminino" />
          </Picker>
        </View>

        <View style={styles.rows}>
          <Text style={styles.label}>Escolaridade:</Text>
          <Picker
            style={styles.picker}
            selectedValue={escolaridade}
            onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}
          >
            <Picker.Item key={0} value={0} label="Escolha a Escolaridade" />
            <Picker.Item key={1} value={"Ensino Fundamental Incompleto"} label="Ensino Fundamental Incompleto" />
            <Picker.Item key={2} value={"Ensino Fundamental Completo"} label="Ensino Fundamental Completo" />
            <Picker.Item key={3} value={"Ensino Médio Incompleto"} label="Ensino Médio Incompleto" />
            <Picker.Item key={4} value={"Ensino Médio Completo"} label="Ensino Médio Completo" />
            <Picker.Item key={5} value={"Ensino Superior Incompleto"} label="Ensino Superior Incompleto" />
            <Picker.Item key={6} value={"Ensino Superior Completo"} label="Ensino Superior Completo" />
          </Picker>
        </View>

        <View style={styles.rows}>
          <Text style={styles.label}>Limite:</Text>
          <Slider style={styles.slider}
            minimumValue={200}
            maximumValue={1000}
            step={50}
            onValueChange={ (limite) => setLimite(limite)}
            value={limite}
          />
          <Text style={{textAlign: 'center', fontSize: 20}}>
            R${limite.toFixed(2)}
          </Text>
        </View>

        <View style={styles.rows}>
          <Text style={styles.label}>Brasileiro:</Text>
          <Switch style={styles.switchh}
            value={status}
            onValueChange={toggleSwitch}
          />

        </View>

        <Button
          title="Confirmar"
          onPress={irDados}
        />


        <Text style={styles.res}>{res}</Text>



      </View>
    );
  }


