import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Search from '../screens/Search'

import theme from '../global/styles/theme'

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = 'Home'
        component = {Home}
        options = {{
          headerShown: false
        }}
        />
      <Stack.Screen
        name = 'Detail'
        component = {Detail}
        options = {{
          headerShown: false,
          title: 'Detalhes'
        }}
        />
      <Stack.Screen
        name = 'Search'
        component = {Search}
        options = {{
          title: 'Sua Busca',
          headerTintColor: `${theme.colors.text}`,
          
          headerStyle: {
            backgroundColor: `${theme.colors.background}`,
          }
        }}
        />
    </Stack.Navigator>
  )
}