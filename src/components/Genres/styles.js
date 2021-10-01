import styled from "styled-components/native";

import theme from '../../global/styles/theme'

export const Container = styled.View`
  margin-right: 8px;
  background-color: ${theme.colors.text} ;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 8px;
`

export const Name = styled.Text`
  font-weight: bold;
`