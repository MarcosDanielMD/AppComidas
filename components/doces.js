import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}><Text style={styles.tituloDoce}> Doces</Text> <Text style={styles.tituloBr}>Brasileiros</Text></Text>

        <Text style={styles.texto}>
          Os doces brasileiros são uma das melhores partes da culinária do país.
          Eles são conhecidos por sua grande variedade e sabor delicioso. Muitos
          desses doces têm influências indígenas, africanas e portuguesas e são
          feitos com ingredientes típicos como coco, milho, tapioca, frutas
          tropicais e leite condensado.
        </Text>
        <View style={styles.viewimg}>
          <Image style={styles.img} source={require('../assets/docerandom.jpg')} />
        </View>

        <Text style={styles.texto}>
          Dentro dessa extensa e deliciosa lista de doces brasileiros, fica
          difícil de escolher quais os doces que devemos lhes mostrar, porém
          trouxemos alguns deles mais conhecidos:
        </Text>

        <Text style={styles.titulo}>Pudim</Text>
        <View style={styles.viewimg}>
          <Image style={styles.img} source={require('../assets/pudim.jpg')} />
        </View>

        <Text style={styles.texto}>
          O pudim é uma sobremesa clássica que é apreciada em muitas partes do
          mundo. O pudim tem uma textura macia e cremosa, e é feito com uma
          mistura de leite, açúcar, ovos e essência de baunilha. Além da
          baunilha, o pudim pode ser feito com outros sabores, como chocolate,
          café, coco ou frutas. O pudim é uma sobremesa versátil e deliciosa que
          pode ser apreciada em qualquer época do ano.
        </Text>

        <Text style={styles.titulo}>Brigadeiro</Text>
        <View style={styles.viewimg}>
          <Image
            style={styles.img}
            source={require('../assets/brigadeiro.jpg')}
          />
        </View>

        <Text style={styles.texto}>
          O brigadeiro é um doce brasileiro tradicional, feito com leite
          condensado, chocolate em pó, manteiga e granulado para decorar.
          Acredita-se que o brigadeiro tenha surgido no Brasil durante a década
          de 1940, em homenagem ao Brigadeiro Eduardo Gomes, um candidato à
          presidência da República na época.
        </Text>

        <Text style={styles.titulo}>Cocada</Text>
        <View style={styles.viewimg}>
          <Image style={styles.img} source={require('../assets/cocada.jpg')} />
        </View>

        <Text style={styles.texto}>
          O brigadeiro é um doce brasileiro tradicional, feito com leite
          condensado, chocolate em pó, manteiga e granulado para decorar.
          Acredita-se que o brigadeiro tenha surgido no Brasil durante a década
          de 1940, em homenagem ao Brigadeiro Eduardo Gomes, um candidato à
          presidência da República na época.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5DC',
    padding: 8,
  },
  tituloDoce:{
    color:'#FFD700',
  },
  tituloBr:{
    color:'#008000',
  },

  titulo: {
    fontSize: 27,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
  },

  texto: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 10,
  },

  viewimg: {
    alignItems: 'center',
    margin: 25,
  },

  img: {
    height: 290,
    width: 370,
    borderRadius: 15,
  },
});
