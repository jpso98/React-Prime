import React from "react";
import { Ionicons, Feather } from '@expo/vector-icons'

import theme from '../../global/styles/theme'

import {
  Container,
  Title,
  RateContainer,
  Rate,
  ActionContainer,
  DetailButton,
  DeleteButton,
} from "./styles";

export function FavoriteItem({ data, deleteMovie, navigatePage }) {
  return(
    <Container>
      <Title  size = {22}>{data.title}</Title>

      <RateContainer>
        <Ionicons
          name = 'md-star'
          size = {12}
          color = {theme.colors.star}
        />
        <Rate>{data.vote_average}</Rate>
      </RateContainer>

      <ActionContainer>
        <DetailButton
          onPress = { () => navigatePage(data)}
        >
          <Title size = {14}>Ver Detalhes</Title>
        </DetailButton>

        <DeleteButton
          onPress = { () => deleteMovie(data.id)}
        >
          <Feather
            name = 'trash'
            size = {24}
            color = {theme.colors.text}
          />
        </DeleteButton>
      </ActionContainer>
    </Container>

  )
}