import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import theme from '../../global/styles/theme'

import {
  Container,
  Banner,
  Title,
  RateContainer,
  Rate,
} from './styles'

export default function SearchItem( { data , navigatePage}) {

  function detailMovie() {

    if(data.release_data === ''){
      alert('Filme ainda sem data')
      return
    }
    navigatePage(data)
  }

  return(
    <Container
      activeOpacity = {0.7}
      onPress = {detailMovie}
    >
      {data?.poster_path ? (
        <Banner
          resizeMethod = 'resize'
          source = {{ uri: `https://image.tmdb.org/t/p/original${data?.poster_path}`}}
        />
      ) : (
        <Banner
          resizeMethod = 'resize'
          source = { require('../../assets/semfoto.png')}
        />
      )}

      <Title>{data?.title}</Title>

      <RateContainer>
        <Ionicons
          name = 'md-star'
          size = {12}
          color = {theme.colors.star}
        />
        <Rate>{data?.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  )
}