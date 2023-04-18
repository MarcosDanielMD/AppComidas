import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Comidas de Festas</Text>
        <Text style={styles.introducao}>
          Existem pratos que não podem faltar em uma festinha, independente do
          tipo de festa esses pratos sempre estarão lá para fazer a nossa
          alegria.
        </Text>
        <Text style={styles.tituloCoxinha}>Coxinha</Text>
        <Image
          style={styles.banner}
          source={require('../assets/coxinha.jpg')}
        />
        <Text style={styles.descricaoCoxinha}>
          Quem não ama coxinha? É algo tão maravilhoso que dá até para duvidar
          do caráter de quem não é chegado nessa delícia! O melhor de tudo é que
          ela consegue agradar a todos os públicos: existe até a coxinha de
          jaca, perfeita para os vegetarianos. A febre das coxinhas tomou conta
          do Brasil, com a diversidade de modos que ela pode ser servida: pizza,
          hambúrguer, fondue… Ou seja: opções é que não faltam para se render
          aos encantos dessa massa e do recheio!
        </Text>
        <Text style={styles.tituloBqueijo}>Bolinha de Queijo</Text>
        <Image
          style={styles.banner}
          source={require('../assets/bolinha.jpg')}
        />
        <Text style={styles.descricaoBqueijo}>
          A bolinha de queijo é um salgadinho de sucesso em comemorações, e pode
          ser preparada de diversas maneiras. Ainda assim, em todas elas o sabor
          e a crocância são preservados.{' '}
        </Text>
        <Text style={styles.tituloCmaluca}>Carne Maluca/ Carne Louca</Text>
        <Image
          style={styles.banner}
          source={require('../assets/carne-maluca.jpg')}
        />
        <Text style={styles.descricaoCmaluca}>
          A carne louca é um lanche saboroso, nutritivo e de fácil preparo. Esta
          carne desfiada com muito molho de tomate e pimentões frescos, já foi a
          sensação de muitas festinhas de aniversário e festas juninas.
        </Text>
      </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    padding: 8,
  },
  titulo: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  introducao: {
    margin: 15,
    fontSize: 22,
    textAlign: 'justify',
    color:'#fff'
  },
  banner: {
    width: largura - 20,
    borderRadius: 20,
    marginTop: 20,
  },
  descricaoCoxinha: {
    fontSize: 22,
    textAlign: 'justify',
    margin: 15,
    color: '#fff',
    
  },
  descricaoBqueijo: {
    fontSize: 22,
    textAlign: 'justify',
    margin: 15,
    color: '#fff',
  },
  descricaoCmaluca: {
    fontSize: 22,
    textAlign: 'justify',
    margin: 15,
    color: '#fff',
  },
  tituloCoxinha: {
    margin: 5,
    marginLeft: 5,
    top: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  tituloBqueijo: {
    margin: 5,
    marginLeft: 5,
    top: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  tituloCmaluca: {
    marginLeft: 5,
    marginBottom:20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});
