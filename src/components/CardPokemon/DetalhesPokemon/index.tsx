import React from "react";
import { View } from "react-native";
import * as S from "./style";

export type CardPokemonProps = {
id: number;
nome: string;
tipo: string[];
HP: number;
Attack: number;
Defense: number;
SpAttack: number;
SpDefense: number;
Speed: number;
  };

export function CardDetalhes ({ id, nome, tipo, HP, Attack, Defense, SpAttack, SpDefense, Speed} : CardPokemonProps) {
     return ( <><View
        style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }}
    >
        <View>
            <S.PokemonName>{nome}</S.PokemonName>

        </View>

        <S.TypeList>
            <S.Badge>
                <S.BadgeText>Grass</S.BadgeText>
            </S.Badge>
        </S.TypeList>


        <S.PokemonNumber>#{id}</S.PokemonNumber>
    </View>
    <S.Content>
    <S.PokemonImage
            source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            }} /><S.ScrollView>
            <S.Paragraph>Status</S.Paragraph>

            <S.Status>
                <S.Type>{HP}</S.Type>
                <S.Value>45</S.Value>

                <S.PercentBar>
                    <S.Percent />
                </S.PercentBar>
            </S.Status>

            <S.Status>
                <S.Type>{Attack}</S.Type>
                <S.Value>49</S.Value>

                <S.PercentBar>
                    <S.Percent />
                </S.PercentBar>
            </S.Status>

            <S.Status>
                <S.Type>{Defense}</S.Type>
                <S.Value>49</S.Value>

                <S.PercentBar>
                    <S.Percent />
                </S.PercentBar>
            </S.Status>

            <S.Status>
                <S.Type>{SpAttack}</S.Type>
                <S.Value>65</S.Value>

                <S.PercentBar>
                    <S.Percent />
                </S.PercentBar>
            </S.Status>

            <S.Status>
                <S.Type>{SpDefense}</S.Type>
                <S.Value>65</S.Value>

                <S.PercentBar>
                    <S.Percent />
                </S.PercentBar>
            </S.Status>

            <S.Status>
                <S.Type>{Speed}</S.Type>
                <S.Value>45</S.Value>

                <S.PercentBar>
                    <S.Percent />
                </S.PercentBar>
            </S.Status>

            <S.Status>
                <S.Type>Total</S.Type>
                <S.Value>318</S.Value>

                <S.PercentBar>

                    <S.Percent />
                </S.PercentBar>
            </S.Status>
        </S.ScrollView> </S.Content></>
     )
}