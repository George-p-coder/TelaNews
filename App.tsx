import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'; 
import MyLogo from './assets/internet.png'; 
import Icon2 from './assets/loja.png'; 
import Icon3 from './assets/planeta.png'; 
import Icon4 from './assets/conversacao.png'; 
import Image1 from './assets/image1.jpg'; 
import Image2 from './assets/image2.jpg'; 
import Image3 from './assets/image3.jpg'; 
import Image4 from './assets/image4.jpg'; 
import Image5 from './assets/image5.png'; 
import Image6 from './assets/image6.jpg'; 

export default function App() {
  return (
    <View style={styles.container}> 
      
        {/* Ícone do planeta em cima do título */}
        
        <Image source={MyLogo} style={styles.topIcon} />
        <Text style={styles.title}>TI EVOLUI</Text>
        <View style={styles.line} />
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>SETEMBRO</Text> 
          <View style={styles.imageContainer}>
            <Image source={Image1} style={styles.image} /> 
            <Image source={Image2} style={styles.image} /> 
            <Image source={Image3} style={styles.image} /> 
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.subtitleContainer}>
          {/* Destaque especial para "Favoritos" */}
          <Text style={styles.highlightedSubtitle}>🌟 FAVORITOS</Text> 
          <View style={styles.imageContainer}>
            <Image source={Image4} style={styles.image} /> 
            <Image source={Image5} style={styles.image} /> 
            <Image source={Image6} style={styles.image} /> 
          </View>
        </View>

        {/* Linha acima dos ícones */}
        <View style={styles.line} />

        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Image source={Icon3} style={styles.icon} /> 
            <Text style={styles.iconLabel}>DESCUBRA</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Image source={Icon2} style={styles.icon} /> 
            <Text style={styles.iconLabel}>CHAT</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Image source={Icon4} style={styles.icon} /> 
            <Text style={styles.iconLabel}>CONVERSA</Text>
          </View>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#c1ff72', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logo: {
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  topIcon: {
    width: 80, 
    height: 80, 
    marginBottom: 10, // Espaço entre o ícone e o título
  },
  title: {
    color: "purple", 
    fontSize: 50, 
    textAlign: 'center', 
    padding: 1, 
    marginTop: -20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
    textShadowOffset: { width: -1, height: 1 }, // Deslocamento
    textShadowRadius: 10, // Intensidade do efeito de sombra
  },
  subtitleContainer: {
    marginVertical: 20, 
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 28, 
    color: 'purple',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
    textShadowOffset: { width: -1, height: 1 }, // Deslocamento
    textShadowRadius: 10, // Intensidade da sombra
  },
  highlightedSubtitle: {
    marginTop: 1,
    fontSize: 28, // Tamanho um pouco maior
    color: 'purple',
    fontWeight: 'bold', // Negrito para destaque
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#ffe680', // Cor de fundo para destaque
    borderRadius: 5, // Borda arredondada
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
    textShadowOffset: { width: -1, height: 1 }, // Deslocamento
    textShadowRadius: 10, // Intensidade da sombra
  },
  imageContainer: {
    
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10,
    
  },
  image: {
    width: 80, 
    height: 80, 
    marginHorizontal: 5, 
  },
  line: {
    marginTop: -1,
    height: 2, // Mais espessa
    width: '100%', // Ajuste da largura da linha
    backgroundColor: 'purple', 
    marginVertical: 20,
  },
  iconContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    paddingHorizontal: 30, 
    marginBottom: 20, // Distância do fim da tela
  },
  iconWrapper: {
    alignItems: 'center',
  },
  icon: {
    width: 60, // Aumentado para melhor visibilidade em tela de celular
    height: 60,
  },
  iconLabel: {
    fontSize: 20, // Maior para melhor visibilidade
    color: 'purple', 
    marginTop: 5,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Cor da sombra
    textShadowOffset: { width: -1, height: 1 }, // Deslocamento
    textShadowRadius: 10, // Intensidade da sombra
  },
});
