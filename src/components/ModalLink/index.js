import React from 'react'
import WebView from 'react-native-webview'
import { Feather } from '@expo/vector-icons'

import theme from '../../global/styles/theme'

import {
  BackButton,
  Name
} from './styles'

export default function ModalLink({ link, title, closeModal}) {
  return(
    <>
      <BackButton onPress = {closeModal}>
        <Feather
          name = 'x'
          size = {25}
          color = {theme.colors.text}
        />
        <Name
          numberOfLines = {1}
        >
          {title}
        </Name>
      </BackButton>

      <WebView
        source = {{ uri : link}}
      />
    </>
  )
}