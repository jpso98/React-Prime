import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons} from '@expo/vector-icons'

import Movies from "../screens/Movies";
import StackRoutes from "./stackRoutes";

import theme from '../global/styles/theme'

const Drawer = createDrawerNavigator()

export default function Routes() {
  return(
    <Drawer.Navigator
      screenOptions = {{
        headerShown : false,

        drawerStyle: {
          backgroundColor : theme.colors.secondary,
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: theme.colors.primary,
        drawerActiveTintColor: theme.colors.text,
        drawerInactiveTintColor: theme.colors.text,
      }}
    >
      <Drawer.Screen
        name = 'HomeDrawer'
        component = {StackRoutes}
        options = {{
          title : 'Home',
          drawerIcon: ({ focused, size, color}) => (
            <MaterialCommunityIcons
              name = {focused ? 'movie-open' : 'movie-outline'}
              size = {size}
              color = {color}
            />
          )
        }}
      />
      <Drawer.Screen
        name = 'Movies'
        component = {Movies}
        options = {{
          title : 'Meus Filmes',
          drawerIcon: ({ focused, size, color}) => (
            <MaterialCommunityIcons
              name = {focused ? 'archive' : 'archive-outline'}
              size = {size}
              color = {color}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}
