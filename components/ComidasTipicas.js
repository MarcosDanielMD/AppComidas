import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>
          Comidas {'\n'}
          <Text style={styles.t}> Típicas {'\n'}</Text>
          <Text style={styles.brasil}>Brasileiras</Text>
        </Text>
        <Text style={styles.introducao}>
          {' '}
          Existem pratos que não podem faltar em uma festinha, independente do
          tipo de festa esses pratos sempre estarão lá para fazer a nossa
          alegria.
        </Text>
        <Text style={styles.tituloimg}>
          {' '}
          <MaterialCommunityIcons
            name="food-drumstick"
            size={24}
            color="#854305"
          />{' '}
          Churrasco
        </Text>
        <Image
          style={styles.imgChurrasco}
          resizeMode={'contain'}
          source={require('../assets/churrasco.jpg')}
        />
        <Text style={styles.descricao}>
          Churrasco é o prato feito à base de carne in natura ou processada,
          assada sobre o fogo ou brasas, com a utilização de estacas de madeira
          ou metal, ou de grelhas.
        </Text>
        <Text style={styles.titulofeijoada}>
          {' '}
          <MaterialCommunityIcons name="rice" size={24} color="#241303" />{' '}
          Feijoada
        </Text>
        <Image
          style={styles.imgFeijoada}
          resizeMode={'contain'}
          source={require('../assets/feijoada.jpg')}
        />
        <Text style={styles.descricaoFeijoada}>
          Feijoada é uma designação comum dada a pratos da culinária de regiões
          e países lusófonos como Portugal, Brasil, Angola, Moçambique,
          Timor-Leste e Macau. Consiste num guisado de feijão, normalmente com
          carne, e quase sempre acompanhado com arroz.
        </Text>
        <Text style={styles.titulopaodequeijo}>
          {' '}
          <MaterialCommunityIcons
            name="bread-slice"
            size={24}
            color="#f0d797"
          />{' '}
          Pao de Queijo
        </Text>
        <Image
          style={styles.imgPqueijo}
          resizeMode={'contain'}
          source={require('../assets/pao-de-queijo.jpg')}
        />
        <Text style={styles.descricaoPaodeQueijo}>
          O pão de queijo é uma iguaria oriunda de Minas Gerais, muito difundida
          em todo o Brasil. Embora não haja registro de local e época exata de
          sua criação, há consenso de que tenha se originado em Minas Gerais em
          meados do Século XVIII
        </Text>
        <Text style={styles.tituloAcareje}>
          {' '}
          <MaterialCommunityIcons
            name="bread-slice"
            size={24}
            color="#6b401a"
          />{' '}
          Acarajé
        </Text>
        <Image
          style={styles.imgAcaraje}
          resizeMode={'contain'}
          source={require('../assets/acaraje.jpg')}
        />
        <Text style={styles.descricaoAcaraje}>
          O acarajé foi apontado pelos leitores como a principal comida típica
          do estado da Bahia, muito famosa entre as comidas brasileiras.
          Facilmente encontrada na capital Salvador, é um bolinho frito no
          azeite de dendê, feito com feijão fradinho, sal, alho, gengibre,
          cebola e recheado com camarão. Se te perguntarem se você prefere
          “quente ou frio” na verdade é referente ao nível de pimenta. Quanto
          mais “quente” mais apimentado será o seu acarajé.
        </Text>
        <View style={styles.viewgif}>
          <Image
            style={styles.gif}
            source={require('../assets/palmirinha-all-good.gif')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd700',
    padding: 8,
  },
  viewgif: {
    marginTop: 20,
  },
  gif: {
    width: largura - 20,
    top: -25,
  },
  t: {
    color: '#000080',
  },
  titulo: {
    marginTop: 35,
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Allan_700Bold',
  },
  brasil: {
    color: '#119615',
  },
  introducao: {
    fontSize: 20,
    textAlign: 'center',
    width: '90%',
    marginTop: 20,
    left: 20,
  },
  tituloimg: {
    top: 50,
    marginLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',
    borderRadius: 10,
    color: '#854305',
  },
  imgChurrasco: {
    width: largura - 20,
    top: -90,
  },
  descricao: {
    textAlign: 'justify',
    marginTop: -220,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#854305',
    fontSize: 20,
    width: '90%',
  },
  titulofeijoada: {
    top: 80,
    marginLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',
    borderRadius: 10,
    color: '#241303',
  },
  imgFeijoada: {
    width: largura - 20,
    top: -120,
  },
  descricaoFeijoada: {
    marginTop: -300,
    marginLeft: 20,
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#241303',
    fontSize: 20,
    width: '90%',
  },
  titulopaodequeijo: {
    top: 90,
    marginLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',
    borderRadius: 10,
    color: '#fff',
  },
  imgPqueijo: {
    width: largura - 20,
    top: -120,
  },
  descricaoPaodeQueijo: {
    marginTop: -300,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'justify',
    fontSize: 20,
    width: '90%',
  },
  tituloAcareje: {
    top: 90,
    marginLeft: 5,
    fontSize: 25,
    fontWeight: 'bold',
    borderRadius: 10,
    color: '#6b401a',
  },
  imgAcaraje: {
    width: largura - 20,
    top: -25,
  },
  descricaoAcaraje: {
    marginTop: -120,
    marginLeft: 20,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#6b401a',
    fontSize: 20,
    textAlign: 'justify',
    width: '90%',
  },
});
