import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DADOS = require("../dados/dados_covid.json");

export default function ListaDados({ navigation }) {
    return (
        <View>
          <FlatList
            data={DADOS}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <TouchableOpacity style={{ flexDirection: 'row' }}
                  onPress={() => navigation.navigate("Detalhes", { item })}
                >
                  <View>
                    <Text style={styles.boldText}>{"\n"}Nome:</Text>
                    <Text style={styles.nomeText}><b>{item.nome}</b></Text>
                  </View>
                  <View>
                    <Text style={styles.boldText}>{"\n"}Sexo:</Text>
                    <Text style={styles.nomeText}>{`${item.sexo}`}</Text>
                  </View>
                  <View>
                    <Text style={styles.boldText}>{"\n"}Dt. Nascimento:</Text>
                    <Text style={styles.nomeText}>{`${item.data_nasc}`}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      itemContainer: {
        flex: 1,
        borderBottomWidth: 1,
        padding: 5,
        textAlign: 'left',
      },
      title: {
        height: 30,
        fontSize: 20,
        color: 'white',
        backgroundColor: 'red',
        textAlign: 'left',
      },
      boldText: {
        fontWeight: 'bold',
        textAlign: 'center'
      },
      nomeText: {
        flex: 4,
        fontSize: 18,
      },
      sexoText: {
        fontSize: 18,
        flex: 4,
      },
    });
    