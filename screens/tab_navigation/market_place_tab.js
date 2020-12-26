import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Ionicon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

import Command from '../../components/commands/command'
import Statistic from '../../components/statistics/statistics'
import Load_Font from '../../components/load_fonts'

const Tab = createBottomTabNavigator()

function Tab_Navigation(){
    Load_Font

    return(
        <Tab.Navigator
            initialRouteName="Command"
            tabBarOptions={{
                activeTintColor: "white",
                inactiveTintColor: '#b0bec5',
                labelStyle:{
                    fontSize: 12,
                    fontFamily: "Tauri",
                    marginBottom: 10
                },
                style: {
                    backgroundColor: '#FF7A00',
                    height: 60,
                    
                }
            }}
        >
            <Tab.Screen 
                name="Command"
                component={Command}
                options={{
                    tabBarBadge: 3,
                    tabBarLabel: 'Commande',
                    tabBarIcon: ({color}) => <Material color={color} size={25} name={'cart-plus'} />
                }}
            />

            <Tab.Screen
                name="Statistique"
                component={Statistic}
                options={{
                    tabBarIcon: ({color}) => <Ionicon color={color} size={25} name={'bar-chart-outline'} />
                }} 
            />
        </Tab.Navigator>
    )
}

export default Tab_Navigation
