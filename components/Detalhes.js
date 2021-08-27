import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ListaDados from './ListaDados';

export default function Detalhes({ route, navigation }) {
    const { item } = route.params;
    return (
      <View style={styles.container}>
        <View style={styles.detalheTitulo}>
          {/* <Text style={[styles.detalheNome, { fontSize: 20 }]}>{item.nome}</Text> */}
          
          <Text>Nome</Text><Text style={{ flex: 4, flexWrap: "wrap", marginTop: 250}}>{item.nome}</Text>
          <Text>Nome</Text>
          <Text style={{ flex: 4, flexWrap: "wrap" }}>{item.data_atendimento}</Text>
          <Text>Nome</Text>
          <Text style={{ flex: 4, flexWrap: "wrap" }}>{item.sintomas}</Text>
          <Text>Nome</Text>
          <Text style={{ flex: 4, flexWrap: "wrap" }}>{item.doenca_preexitente}</Text>
          <Text>Nome</Text>
          <Text style={{ flex: 4, flexWrap: "wrap" }}>{item.statuscovid}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.button}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    detalheTitulo: {
      height: 30,
      backgroundColor: "#ED143B",
      textAlign: 'center',
      justifyContent: 'center',
    },
    detalheNome: {
      color: 'white',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: 'bold'
    },
    button: {
      backgroundColor: "#ED145B",
      color: 'white',
      fontSize: 18,
      padding: 10,
      borderRadius: 10,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 50,
    },
  });