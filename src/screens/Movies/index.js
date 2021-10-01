import React, {useEffect, useState} from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'

import { FavoriteItem } from '../../components/Favoriteitem'
import Header from '../../components/Header'

import { getMovieSave, deleteMovie } from '../../utils/storage'

import {
  Container,
  ListMovies,
} from './styles'

export default function Movies() {
  const [movies, setMovies] = useState([])

  const navigation = useNavigation()
  const isFocused = useIsFocused()

  useEffect( () => {
    let isActive = true

    async function getFavoriteMovies() {
      const result = await getMovieSave('@primereact')

      if(isActive) {
        setMovies(result)
      }
    }

    if(isActive){
      getFavoriteMovies()
    }

    return () => {
      isActive = false
    }
  }, [isFocused])

  async function handleDelete(id) {
    const result = await deleteMovie(id)
    setMovies(result)
  }

  function navigateDetailsPage(item){
    navigation.navigate('Detail', { id: item.id})
  }

  return(
    <Container>
      <Header title = 'Meus Filmes'/>

      <ListMovies
        showsVerticalScrollIndicator = {false}
        data = {movies}
        keyExtractor = {item =>String(item.id)}
        renderItem = { ({ item }) => (
          <FavoriteItem
            data = {item}
            deleteMovie = { handleDelete }
            navigatePage = { () => navigateDetailsPage(item)}
          />
        )}
      />
    </Container>
  )
}