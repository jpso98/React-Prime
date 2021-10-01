import React, { useState, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import api, { key } from '../../services/api'

import {
  Container,
  ListMovie,
  Name,
} from './styles'
import SearchItem from '../../components/Searchitem'

export default function Search() {
  const navigation = useNavigation()
  const route = useRoute()

  const [movie, setMovie] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    async function getSearchMovie() {
      const response = await api.get('/search/movie', {
        params: {
          query: route?.params?.name,
          api_key: key,
          language: 'pt-BR',
          page: ''
        }
      })

      if(isActive){
        setMovie(response.data.results)
        setLoading(false)
      }

    }

    if(isActive){
      getSearchMovie()
    }

    return () => {
      isActive = false
    }

  }, [])

  function navigationDetailsPageitem(item) {
    navigation.navigate('Detail', { id: item.id})
  }

  if(loading){
    return(
      <Container>

      </Container>
    )
  }

  return(
    <Container>
      <ListMovie
        data ={movie}
        showsVerticalScrollIndicator = {false}
        keyExtractor = {(item) => String(item.id)}
        renderItem = { ({ item }) =>
          <SearchItem
            navigatePage = {() => navigationDetailsPageitem(item)}
            data = {item}
          />
        }
      />    
    </Container>
  )
}