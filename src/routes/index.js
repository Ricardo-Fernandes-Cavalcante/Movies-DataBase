import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import StackRoutes from './stackRoutes'

import { MaterialCommunityIcons} from '@expo/vector-icons'

import Movies from '../pages/Movies'

const Drawer = createDrawerNavigator()

export default function Routes(){
    return(
       <Drawer.Navigator
       screenOptions={{
           headerShown: false,

           drawerStyle:{
               backgroundColor:'#0f1016',
               paddingTop:20,
               width: 210,
             
           },
           drawerActiveBackgroundColor:'#e72f49',
           drawerActiveTintColor:'#fff',
           drawerInactiveTintColor:'#ffff',
       }}
       
       >
           <Drawer.Screen 
           name="HomeDrawer" 
           component = {StackRoutes} 
           options={{
               title:'HOME',
               drawerIcon: ({focused, size,color}) => (
                <MaterialCommunityIcons
                name={focused ? 'movie-open' : 'movie-outline'}
                size={size}
                color={color}
                />
               )
           }}
           />
           <Drawer.Screen 
           name="Movies" 
           component={Movies}
           options={{
               title:"Meus filmes",
               drawerIcon: ({focused, size,color}) => (
                <MaterialCommunityIcons
                name={focused ? 'archive' : 'archive-outline'}
                size={size}
                color={color}
                />   
               )
           }}
           />
       </Drawer.Navigator>
    )
}

