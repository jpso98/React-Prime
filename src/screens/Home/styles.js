import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  background-color: ${theme.colors.background};
  flex: 1;
  padding: 4px 0;
`

export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 8px;
`

export const Input = styled.TextInput`
  background-color: ${theme.colors.background_text};
  width: 85%;
  height: 50px;
  border-radius: 50px;
  padding: 8px 15px;
  font-size: 18px;
  color: ${theme.colors.text};
`

export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
`

