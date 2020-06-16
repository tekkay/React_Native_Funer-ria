import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wallpaper from '../../components/wallpaper';
import { Text, View } from 'react-native';
import { Fumi } from 'react-native-textinput-effects';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Produto from '../../model/produto';
import bgAdmin from '../../assets/images/tela2.jpg';
import Styles from './styles';

function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cores, setCores] = useState('');
  const [adicionais, setAdicionais] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const produtoState = useSelector((state) => state.produto);

  useEffect(() => {
    if (produtoState.navegar === true) {
      navigation.navigate('Main');
    }
  }, [produtoState.navegar, navigation]);

  function cadastrar() {
    var produto = new Produto();
    var idUsuario = auth.usuario.idUsuario;

    produto.nomeProduto = nome;
    produto.descricaoProduto = descricao;
    produto.cores = cores;
    produto.adicionais = adicionais;
    produto.idUsuario = idUsuario;

    console.log(produto);
    dispatch({ type: 'CADASTRO_REQUEST', produto });
  }

  return (
    <Wallpaper
      image={bgAdmin}
      children={
        <>
          <View>
            <Text style={Styles.text}>Cadastrar caixão</Text>
          </View>
          <View>
            <Fumi
              label={'Nome do caixão'}
              iconClass={Ionicons}
              //iconName={'md-star'}
              iconSize={20}
              iconColor={'#000000'}
              iconWidth={40}
              inputPadding={20}
              style={Styles.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
            <Fumi
              label={'Descricao do caixão'}
              iconClass={Ionicons}
              //iconName={'md-star'}
              iconSize={20}
              iconColor={'#000000'}
              iconWidth={40}
              inputPadding={16}
              style={Styles.input}
              value={descricao}
              onChangeText={(text) => setDescricao(text)}
            />
            <Fumi
              label={'Cores de caixão'}
              iconClass={Ionicons}
              //iconName={'md-star'}
              iconSize={20}
              iconColor={'#000000'}
              iconWidth={40}
              inputPadding={16}
              style={Styles.input}
              value={cores}
              onChangeText={(text) => setCores(text)}
            />
            <Fumi
              label={'Adicionais'}
              iconClass={Ionicons}
              //iconName={'md-star'}
              iconSize={20}
              iconColor={'#000000'}
              iconWidth={40}
              inputPadding={16}
              style={Styles.input}
              value={adicionais}
              onChangeText={(text) => setAdicionais(text)}
            />
          </View>

          <View style={Styles.container}>
            <TouchableOpacity style={Styles.button} onPress={() => cadastrar()}>
              <Text style={Styles.textInput}>Cadastrar novo caixão</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    />
  );
}

export default Cadastro;
