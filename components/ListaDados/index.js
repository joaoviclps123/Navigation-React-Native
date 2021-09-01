import React from 'react';
import { FlatList, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Page, Positivos, Suspeitas, Negativos, Container, Paciente, Header, Footer } from './styles';
import { DADOS_COVID } from '../../dados/dados_covid';

const RegistroCovid = ({ navigation }) => {
  let contadorPositivos = 0, contadorNegativos = 0, contadorSuspeitos = 0;
  calculte();

  function calculte() {
    for (let i = 0; i < DADOS_COVID.length; i++) {
      const currentObject = DADOS_COVID[i];
      const statuscovid = currentObject.statuscovid;

      if (statuscovid == 'suspeito') {
        contadorSuspeitos++;
      } else if (statuscovid == 'negativo') {
        contadorNegativos++;
      } else {
        contadorPositivos++;
      }
    }
  }

  const renderContainerPaciente = ({ item }) => {
    const statuscovid = item.statuscovid;
    let statusColor = '';

    if (statuscovid == 'positivo') {
      statusColor = 'green';
    } else if (statuscovid == 'negativo') {
      statusColor = 'red';
    } else {
      statusColor = 'yellow';
    }

    return(
      <Paciente
        onPress={() => { navigation.navigate('RegistroDeAtendimento', {
          item,
          statusColor: statusColor,
        }) }}
      >
        <Header>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.nome}</Text>
          <FontAwesome name="circle" size={12} color={statusColor} />
        </Header>
        <Text style={{ marginBottom: 2 }}>Sexo: {item.sexo}</Text>
        <Text>Data de nascimento: {item.data_nasc}</Text>
      </Paciente>
    )
  }
  return (
    <Page>
      <Container>
        <FlatList
          data={DADOS_COVID}
          renderItem={renderContainerPaciente}
          keyExtractor={ item => item.id }
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 10, marginBottom: 40 }}
        />

        <Footer style={{ position: 'fixed', padding: 5 }}>
          <Positivos style={{ backgroundColor: 'green' }}>
            <Text style={{ fontWeight: 'bold' }}>Positivos: {contadorPositivos}</Text>
          </Positivos>

          <Suspeitas style={{ backgroundColor: 'yellow' }}>
            <Text style={{ fontWeight: 'bold' }}>Suspeitos: {contadorSuspeitos}</Text>
          </Suspeitas>

          <Negativos style={{ backgroundColor: 'red' }}>
            <Text style={{ fontWeight: 'bold' }}>Negativos: {contadorNegativos}</Text>
          </Negativos>
        </Footer>
      </Container>
    </Page>
  );
};

export default RegistroCovid;
