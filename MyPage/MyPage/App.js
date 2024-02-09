import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://liberal.com.br/wp-content/uploads/2020/06/capa-3.jpg'
          }}
        />
        <Text style={styles.nome}>Carlos Henrique de Oliveira Siqueira</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.informacao}>
          <Text style={styles.TituloSection}>Dados Pessoais</Text>
          <Text>Idade: 18 anos</Text>
          <Text>Telefone: xxxx-xxxx</Text>
          <Text>Morando em Jaguariúna</Text>
          <Text>Email: Exemplo123@gmail.com</Text>
        </View>
      </View>

      <View style={styles.section}>
      <View style={styles.informacao}>
        <Text style={styles.TituloSection}>Formação</Text>
        <Text>{'\u2022'} Idiomas: Inglês Intermediário</Text>
        <Text>{'\u2022'} Ensino médio completo - ETEC João Belarmino - Conclusão 2022</Text>
        <Text>{'\u2022'} Cursando Técnico de desenvolvimento de sistemas SENAI - Previsão de conclusão Dezembro 2024</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.TituloSection}>Meu GitHub: </Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/carloshosiqueira")}>
          <Image
            style={styles.github}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
            }}
          />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  TituloSection: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  informacao: {
    maxWidth: '100%'
  },
  logo: {
    width: width * 0.6,
    height: width * 0.6 * 0.6,
    resizeMode: 'contain',
  },
  github: {
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
  },
});
