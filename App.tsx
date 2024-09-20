import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native'; // Importa os componentes necessários do React Native

import MyLogo from './assets/internet.png'; // Importa a imagem de fundo

import Icon2 from './assets/loja.png'; // Importa o segundo ícone
import Icon3 from './assets/planeta.png'; // Importa o terceiro ícone
import Icon4 from './assets/conversacao.png'; // Importa o quarto ícone
import Image1 from './assets/image1.jpg'; // Importa a primeira imagem abaixo do subtítulo "setembro"
import Image2 from './assets/image2.jpg'; // Importa a segunda imagem abaixo do subtítulo "setembro"
import Image3 from './assets/image3.jpg'; // Importa a terceira imagem abaixo do subtítulo "setembro"
import Image4 from './assets/image4.jpg'; // Importa a primeira imagem abaixo do subtítulo "favoritos"
import Image5 from './assets/image5.png'; // Importa a segunda imagem abaixo do subtítulo "favoritos"
import Image6 from './assets/image6.jpg'; // Importa a terceira imagem abaixo do subtítulo "favoritos"

export default function App() {
  // Função principal do componente App
  return (
    <View style={styles.container}> {/* Contêiner principal da tela */}
      <ImageBackground source={MyLogo} resizeMode='center' style={styles.logo}> 
        {/* Imagem de fundo do contêiner */}
        <Text style={styles.title}> TI EVOLUI </Text> {/* Título principal */}

        <View style={styles.subtitleContainer}>
          {/* Contêiner para o primeiro subtítulo e imagens */}
          <Text style={styles.subtitle}>SETEMBRO</Text> {/* Primeiro subtítulo */}
          <View style={styles.imageContainer}>
            {/* Contêiner para as imagens abaixo do subtítulo "setembro" */}
            <Image source={Image1} style={styles.image} /> {/* Primeira imagem */}
            <Image source={Image2} style={styles.image} /> {/* Segunda imagem */}
            <Image source={Image3} style={styles.image} /> {/* Terceira imagem */}
          </View>
        </View>

        <View style={styles.line} />
        {/* Linha divisória entre os dois conjuntos de subtítulos e imagens */}

        <View style={styles.subtitleContainer}>
          {/* Contêiner para o segundo subtítulo e imagens */}
          <Text style={styles.subtitle}>FAVORITOS</Text> {/* Segundo subtítulo */}
          <View style={styles.imageContainer}>
            {/* Contêiner para as imagens abaixo do subtítulo "favoritos" */}
            <Image source={Image4} style={styles.image} /> {/* Primeira imagem */}
            <Image source={Image5} style={styles.image} /> {/* Segunda imagem */}
            <Image source={Image6} style={styles.image} /> {/* Terceira imagem */}
          </View>
        </View>

        <View style={styles.iconContainer}>
          {/* Contêiner para os ícones na parte inferior */}
          <View style={styles.iconWrapper}>
            {/* Contêiner para o primeiro ícone */}
            <Image source={MyLogo} style={styles.icon} /> {/* Ícone "descubra" */}
            <Text style={styles.iconLabel}>DESCUBRA</Text> {/* Rótulo do primeiro ícone */}
          </View>
          <View style={styles.iconWrapper}>
            {/* Contêiner para o segundo ícone */}
            <Image source={Icon2} style={styles.icon} /> {/* Ícone "chats" */}
            <Text style={styles.iconLabel}>CHAT</Text> {/* Rótulo do segundo ícone */}
          </View>
          <View style={styles.iconWrapper}>
            {/* Contêiner para o terceiro ícone */}
            <Image source={Icon3} style={styles.icon} /> {/* Ícone "loja" */}
            <Text style={styles.iconLabel}>LOJA</Text> {/* Rótulo do terceiro ícone */}
          </View>
          <View style={styles.iconWrapper}>
            {/* Contêiner para o quarto ícone */}
            <Image source={Icon4} style={styles.icon} /> {/* Ícone adicional */}
            <Text style={styles.iconLabel}>CONVERSA</Text> {/* Rótulo do quarto ícone */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o contêiner ocupar toda a tela
    backgroundColor: '#c1ff72', // Define a cor de fundo do contêiner
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  logo: {
    width: 400, // Largura da imagem de fundo
    height: 600, // Altura da imagem de fundo
    justifyContent: 'center', // Centraliza o conteúdo dentro do ImageBackground
    alignItems: 'center', // Centraliza o conteúdo dentro do ImageBackground
  },
  title: {
    color: "purple", // Cor do texto do título
    fontSize: 40, // Tamanho da fonte do título
    textAlign: 'center', // Alinha o texto ao centro
    padding: 10, // Adiciona espaçamento ao redor do texto
    marginTop: 50, // Adiciona margem superior
  },
  subtitleContainer: {
    marginVertical: 20, // Adiciona margem vertical ao contêiner do subtítulo
    alignItems: 'center', // Centraliza os itens dentro do contêiner
  },
  subtitle: {
    fontSize: 25, // Tamanho da fonte do subtítulo
    color: 'purple', // Cor do texto do subtítulo
  },
  imageContainer: {
    flexDirection: 'row', // Alinha as imagens em linha
    justifyContent: 'space-between', // Espaça as imagens igualmente
    marginTop: 10, // Adiciona margem superior ao contêiner de imagens
  },
  image: {
    width: 80, // Largura das imagens
    height: 80, // Altura das imagens
    marginHorizontal: 5, // Adiciona margem horizontal entre as imagens
  },
  line: {
    height: 1, // Altura da linha divisória
    width: '80%', // Largura da linha divisória
    backgroundColor: 'purple', // Cor da linha divisória
    marginVertical: 20, // Margem vertical ao redor da linha
  },
  iconContainer: {
    flexDirection: 'row', // Alinha os ícones em linha
    justifyContent: 'space-around', // Espaça os ícones igualmente
    width: '80%', // Largura do contêiner de ícones
  },
  iconWrapper: {
    alignItems: 'center', // Centraliza os ícones e rótulos dentro do contêiner
  },
  icon: {
    width: 40, // Largura dos ícones
    height: 40, // Altura dos ícones
  },
  iconLabel: {
    fontSize: 15, // Tamanho da fonte do rótulo do ícone
    color: 'purple', // Cor do texto do rótulo do ícone
    marginTop: 5, // Margem superior ao rótulo do ícone
  },
});
