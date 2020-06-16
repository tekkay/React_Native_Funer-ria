import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Wallpaper from '../../components/wallpaper';
import bgGuest from '../../assets/images/tela2.jpg';
import { ScrollView, View, Text } from 'react-native';

import Styles from './styles';

function Carrinho({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const carrinho = useSelector((state) => state.produto);

  useEffect(() => {
    setProdutos(carrinho.produtos.selecionados);
  }, [carrinho.produtos.selecionados]);

  return (
    <Wallpaper
      image={bgGuest}
      children={
        <>
          {produtos.length === 0 ? (
            <Text style={Styles.title}>Carrinho vazio</Text>
          ) : (
            <Text style={Styles.title}>Seu carrinho </Text>
          )}

          <ScrollView>
            {produtos.map((produto) => {
              return (
                <View key={produto.idProduto} style={Styles.item}>
                  <Text>Nome: {produto.NomeProduto}</Text>
                  <Text>Descrição: {produto.DescricaoProduto}</Text>
                  <Text>Cores: {produto.Cores}</Text>
                  <Text>Adicionais: {produto.Adicionais}</Text>
                  
                </View>
              );
            })}
          </ScrollView>
        </>
      }
    />
  );
}

export default Carrinho;
