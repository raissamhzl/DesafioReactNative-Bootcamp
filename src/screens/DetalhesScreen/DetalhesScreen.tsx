import React, { useEffect, useState } from "react";

import pokeballBackgroundImage from "../../global/assets/Pokeball-bg.png";
import dotsCardImage from "../../global/assets/Pattern.png";
import backImage from "../../global/assets/Back.png";
import { CardDetalhes } from "../../components/CardPokemon/DetalhesPokemon";

import * as S from "./DetalhesScreen.styles";
import { NavigationScreenProps } from "../../navigation/types";
import { api } from "../../api";

type PokemonProps = {
  id: number;
  name: string;
  tipo: string[];
}

export function DetalhesScreen(props: NavigationScreenProps<'DetalhesScreen'>) {
  const [pokemon, setDetalhesPokemon] = useState<PokemonProps[]>([]);
  const { navigation } = props;
  
  useEffect(() => {
    async function CarregarPokemon() {
        const response = await api.get('pokemons');
        setDetalhesPokemon(response.data);
    };
    CarregarPokemon();
}, []);
   
  function handleNavigation(): void {
    navigation.navigate('ListaScreen');
  }

  return (
    <S.Container type={pokemon.tipo[0].toLowerCase()} >
      <S.Header>
        <S.ContainerBackgroundImage source={pokeballBackgroundImage} />

        <S.DotsBackgroundImage source={dotsCardImage} />

        <S.GoBackButton activeOpacity={0.7} onPress={handleNavigation}>
          <S.GoBackImage source={backImage} />
        </S.GoBackButton>
      </S.Header >

      <S.Content>
      <CardDetalhes id={1} nome={"Bulbasaur"} tipo={[]} HP={0} Attack={0} Defense={0} SpAttack={0} SpDefense={0} Speed={0} />
      </S.Content>
    </S.Container>
  );
}
