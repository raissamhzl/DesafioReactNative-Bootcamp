import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import pokeballBackgroundImage from "../../global/assets/Pokeball-bg-half.png";
import { CardPokemon } from "../../components/CardPokemon";
import { api } from "../../api";
import * as S from "./ListaScreen.styles";
import { NavigationScreenProps } from "../../navigation/types";

type PokemonProps = {
  id: number;
  name: string;
  type: string[];
}

export function ListaScreen(props: NavigationScreenProps<'ListaScreen'>){
  const { navigation } = props;

  const renderItem = ({item : {pokemon, index}}) => 
    <CardPokemon
      key={index}
      id={pokemon.id}
      nome={pokemon.name}
      tipo={pokemon.type}  
      onPress={handleNavigation(pokemon.id)}          
    />

  function handleNavigation(id: number) {
    navigation.navigate('DetalhesScreen',{id: id});
  }

  const [listaPokemon, setListaPokemon] = useState<PokemonProps[]>([]);

  useEffect(() => {
    async function carregarLista() {
      const response = await api.get('pokemons');

      setListaPokemon(response.data);
    }
    carregarLista();
  }, []);

  return (
    <S.Container>
      <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

        <S.Title>Pokédex</S.Title>
        <S.Paragraph>Encontre todos os pokémons em um só lugar.</S.Paragraph>
        
        <S.Content>
          <FlatList
            data={listaPokemon}
            renderItem={renderItem}
            keyExtractor={({id}) => id} 
            />
        </S.Content>
    </S.Container>
  )
};

