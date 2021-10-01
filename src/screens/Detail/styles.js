import styled from 'styled-components/native'
import theme from '../../global/styles/theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background} ;
`

export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 35px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 14px;
`

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color:${theme.colors.background_text};
  border-radius: 23px;
  justify-content: center;
  align-items: center;
`

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
`

export const ButtonLink = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  width: 63px;
  height: 63px;
  border-radius: 35px;
  position: absolute;
  top: 300px;
  right: 15px;
  justify-content: center;
  align-items: center;
  z-index: 99;
`

export const Title = styled.Text`
  color: ${theme.colors.text};
  font-size: 22px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 8px;
`
export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  justify-content: space-between;
`

export const ListGenres = styled.FlatList`
  padding-left: 14px;
  margin: 8px 0;
  max-height: 35px;
  min-height: 35px;
`
export const Rate = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color : ${theme.colors.text}
`
export const Description = styled.Text`
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 30px;
  color: ${theme.colors.text};
  line-height: 20px;
`