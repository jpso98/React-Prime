import React from 'react'
import { ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Header from  '../../components/Header'
import theme from '../../global/styles/theme'

import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
  BannerButton,
  Banner
} from './styles'

export default function Home() {
  return(
    <Container>
      <Header title = 'React Prime'/>

      <SearchContainer >
        <Input
          placeholder = 'Ex Vingadores'
          placeholderTextColor = {theme.colors.text}
        />

        <SearchButton>
          <Feather name = 'search' size = {30} color = {theme.colors.text}/>
        </SearchButton>
      </SearchContainer>

      
    </Container>
  )
}