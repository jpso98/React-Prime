import React, { useState, useEffect} from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import Stars from 'react-native-stars'
import { ScrollView, Modal } from 'react-native'

import Genres from '../../components/Genres'
import ModalLink from '../../components/ModalLink'

import api, { key } from '../../services/api'
import { saveMovie, hasMovie, deleteMovie } from '../../utils/storage'
import theme from '../../global/styles/theme'

import {
  Container,
  Header,
  HeaderButton,
  Banner,
  ButtonLink,
  Title,
  ContentArea,
  Rate,
  ListGenres,
  Description,
} from './styles'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()
  
  const [movie, setMovie] = useState({})
  const [openLink, setOpenLink] = useState(false)
  const [favoriteMovies, setFavoriteMovies] = useState(false)

  useEffect( () => {
    let isActive = true

    async function getMovie() {
      const response = await api.get(`/movie/${route.params?.id}`, {
        params: {
          api_key: key,
          language: 'pt-BR'
        }
      })
      .catch((err) => {
        console.log(err)
      })

      if(isActive) {
        setMovie(response.data)

        const isFavorite = await hasMovie(response.data)
        setFavoriteMovies(isFavorite)
      }

    }

    if(isActive) {
      getMovie()
    }

    return () => {
      isActive = false
    }

  })
  
  async function handleFavoriteMovie(movie) {

    if(favoriteMovies){
      await deleteMovie(movie.id)
      setFavoriteMovies(false)
      alert('removido')
    }else {
      await saveMovie('@primereact', movie)
      setFavoriteMovies(true)
      alert('Filme salvo na sua lista')
    }

  }

  return(
    <Container>
      <Header>
        <HeaderButton
          activeOpacity = {0.7}
          onPress = { () => navigation.goBack()}
        >
          <Feather
            name = 'arrow-left'
            size = {28}
            color = {theme.colors.text}
          />
        </HeaderButton>
        <HeaderButton
          onPress = { () => handleFavoriteMovie(movie)}
        > 
          {
            favoriteMovies ? (
              <Ionicons
                name = 'bookmark'
                size = {28}
                color = {theme.colors.text}
              />
            ) : (
              <Ionicons
                name = 'bookmark-outline'
                size = {28}
                color = {theme.colors.text}
              />
            )
          }
          
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod = 'resize'
        source ={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`}}
      />

      <ButtonLink
        onPress = {() => setOpenLink(true)}
      >
        <Feather
          name = 'link'
          size = {24}
          color = {theme.colors.text}
        />
      </ButtonLink>

      <Title
        numberOflines = {2}
      >
        {movie.title}
      </Title>

      <ContentArea>
        <Stars
          default = {movie.vote_average}
          count = {10}
          half = {true}
          starSize = {20}
          fullStar = { 
            <Ionicons
              name = 'md-star'
              size = {24}
              color = {theme.colors.star}
            />
          }
          emptyStar = { 
            <Ionicons
              name = 'md-star-outline'
              size = {24}
              color = {theme.colors.star}
            />
          }
          halfStar = { 
            <Ionicons
              name = 'md-star-half'
              size = {24}
              color = {theme.colors.star}
            />
          }
          disable ={true}
        />
        <Rate>{movie.vote_average}/10</Rate>
      </ContentArea>

      <ListGenres
        data = {movie?.genres}
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        keyExtractor = { (item) => String(item.id)}
        renderItem = { ({ item }) => <Genres data = {item} />}
      />

      <ScrollView>
        <Title>Descrição</Title>
        <Description>{movie.overview}</Description>
      </ScrollView>

      <Modal
        animationType = 'slide'
        transparent = {true}
        visible = {openLink}
      >
        <ModalLink
          link = {movie?.homepage}
          title = {movie?.title}
          closeModal = { () => setOpenLink(false)}
        />
      </Modal>
    </Container>
  )
}