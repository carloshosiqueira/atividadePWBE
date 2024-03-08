//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenIdade from './componentes/FormIdade';
import ScreenJuros from './componentes/FormJuros';
import BemVindo from './componentes/BemVindo';
import LoginForm from './componentes/loginForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginForm}
        options={{title: 'Bem vindo'}} />

        <Stack.Screen
        name="BemVindo"
        component={BemVindo}
        options={{title: 'Bem Vindo'}} />

        <Stack.Screen
        name="TelaIdade"
        component={ScreenIdade}
        options={{title: 'Calcule sua idade'}} />

        <Stack.Screen
        name="TelaJuros"
        component={ScreenJuros}
        options={{title: 'Calcule os juros'}} />

      </Stack.Navigator>

    </NavigationContainer>
  );
  }