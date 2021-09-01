import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RelatorioCovid from './components/ListaDados';
import RegistroDeAtendimento from './components/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="RelatorioCovid">
          <Stack.Screen
            name="RelatorioCovid"
            component={RelatorioCovid}
            options = {{
              title: "Relatorio COVID-19",
              headerStyle: {
                backgroundColor: '#ef135b',
                textAlign: 'left'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              }
            }}
          />
          <Stack.Screen
            name="RegistroDeAtendimento"
            component={RegistroDeAtendimento}
            options = {{
              title: "Registro de Atendimento",
              headerStyle: {
                backgroundColor: '#ef135b',
                textAlign: 'left'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

