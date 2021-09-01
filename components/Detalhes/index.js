import React from 'react';

import { Text, View } from 'react-native';

import {
  Page,
  CaixaDeTexto,
  Button,
  Container,
  Paciente,
  Header,
  Content,
} 

from './styles';


const Atendimento = ({ route, navigation }) => {
  const params = route.params.item;
  const item = params.nome;
  const data_atendimento = params.data_atendimento;
  const sintomas = params.sintomas;
  const doenca_preexitente = params.doenca_preexitente;
  const statuscovid = params.statuscovid;

  return (
    <Page>
      <Container>
        <Paciente>
          <Header>
            <Text><b>{item}</b></Text>
          </Header>

          <Content>
            <CaixaDeTexto>Data de Atendimento: {data_atendimento}</CaixaDeTexto>
            <CaixaDeTexto>Sintomas: {sintomas}</CaixaDeTexto>
            <CaixaDeTexto>Doenças pré-existentes: {doenca_preexitente}</CaixaDeTexto>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CaixaDeTexto>Status Covid:</CaixaDeTexto>
              <Text style={{ color: `${route.params.statusColor}`, marginLeft: 10}}>{statuscovid}</Text>
            </View>
          </Content>
        </Paciente>

        <Button
          onPress={() => { navigation.goBack() }}>
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
              Voltar
            </Text>
        </Button>
      </Container>
    </Page>
  );
};

export default Atendimento;
