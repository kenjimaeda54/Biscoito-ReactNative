import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem: require("./src/biscoito.png"),
      frase: "Clica no botão para gerar frases da sorte",
    };
    this.enviar = this.enviar.bind(this);
    this.frase = [
      "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar",
      "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho",
      "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito. A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.",
      " Tente a sua sorte! A vida é feita de oportunidades.",
      "O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.",
      "A perseverança é a mãe da boa sorte   O homem é assim o árbitro constante de sua própria sorte. Ele pode aliviar o seu suplício ou prolongá-lo indefinidamente.",
      "Sua felicidade ou sua desgraça dependem da sua vontade de fazer o bem",
      " Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca",
      " Que sorte possuir uma grande inteligência: nunca te faltam asneiras para dizer",
      "A sorte favorece a mente bem preparada.",
      "Sorte é estar pronto quando a oportunidade vem.",
      "A sorte ajuda os audazes.",
      " A sorte do egoísta é viver sem preocupações; o seu castigo é morrer sem afectos.",
    ];
  }
  enviar() {
    let aleatorio = Math.floor(Math.random() * this.frase.length);
    this.setState({
      frase: '"' + this.frase[aleatorio] + '"',//this.frase == this.state.frase
      imagem: require("./src/biscoitoAberto.png"),
    });
  }

  render() {
    return (
      <View style={estilos.principal}>
        <Image style={estilos.imagem} source={this.state.imagem} />
        <Text style={estilos.frase}>{this.state.frase}</Text>
        <TouchableOpacity style={estilos.botao} onPress={this.enviar} >
          <View style={estilos.div}>
            <Text style={estilos.biscoito}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 230,
    height: 250,
  },
  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  div: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25, 
  },
  biscoito: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  },
});
