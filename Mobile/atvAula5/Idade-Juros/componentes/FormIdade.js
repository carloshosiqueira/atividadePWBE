import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import MaskInput from 'react-native-mask-input';

export default function FormIdade() {
  const [dia, setDia] = React.useState('');
  const [mes, setMes] = React.useState('');
  const [ano, setAno] = React.useState('');
  const [idadeResult, setIdadeResult] = React.useState(''); // Definição da idade como estado

  const calcIdade = () => {
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();

    
    const diaNascimento = parseInt(dia, 10);
    const mesNascimento = parseInt(mes, 10);
    const anoNascimento = parseInt(ano, 10);
    
    console.log(hoje, dia, mes, ano)


    let idadeCalculada = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idadeCalculada--;
    }

    // Define o estado 'idadeResult' com a idade calculada
    setIdadeResult(idadeCalculada.toString());

    if(mes > 12){
      alert('Mês invalido, coloque um mês entre 1 e 12');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Informe sua data de nascimento</Text>
      <View style={styles.form}>

        <MaskInput
          style={styles.textInput}
          onChangeText={(masked, unmasked) => setDia(masked)}
          value={dia}
          placeholder="Dia"
          keyboardType="numeric"
          mask={[/\d/, /\d/]}
        />

        <MaskInput
          style={styles.textInput}
          onChangeText={(masked, unmasked) => setMes(masked)}
          value={mes}
          placeholder="Mês"
          keyboardType="numeric"
          mask={[/\d/, /\d/]}
        />

        <MaskInput
          style={styles.textInput}
          onChangeText={(masked, unmasked) => setAno(masked)}
          value={ano}
          placeholder="Ano"
          keyboardType="numeric"
          mask={[/\d/, /\d/, /\d/, /\d/]}
        />
        {/* Botão de calcular */}
        <TouchableOpacity onPress={calcIdade}>
          <Text>Calcular Idade</Text>
        </TouchableOpacity>
        {/* Exibição da idade */}
        <Text>Sua idade é: {idadeResult}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  form: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  textInput: {
    padding: 5,
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#006eff',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,    
  },
});
