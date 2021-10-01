import styled from 'styled-components/native'
import theme from '../../global/styles/theme'

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${theme.colors.background};
  margin-top: 60px;
  flex-direction: row;
  align-items: center;

`
export const Name = styled.Text`
  margin-left: 8px;
  color: ${theme.colors.text};
  font-size: 18px;
  font-weight: bold;
`