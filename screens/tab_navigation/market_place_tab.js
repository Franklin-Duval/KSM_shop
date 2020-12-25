import React from 'react'
import { View, } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Ionicon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'

import Command from '../../components/commands/command'
import Statistic from '../../components/statistics/statistics'

const screens = {
    Command:{
        screen: Command,
        navigationOptions:{
            tabBarLabel: 'Commande',
            tabBarIcon: () => (
                <View>
                    <Ionicon style={{color: 'white'}} size={25} name={'ios-home'} />
                </View>
            )
        }
    },

    Statistic:{
        screen: Statistic,
        navigationOptions:{
            tabBarLabel: 'Statistic',
            tabBarIcon: () => (
                <View>
                    <Ionicon style={{color: 'white'}} size={25} name={'ios-search'} />
                </View>
            )
        }
    },

    /* Commande:{
        screen: Commande,
        navigationOptions:{
            tabBarLabel: 'Commande',
            tabBarIcon: () => (
                <View>
                    <Feather style={{color: 'white'}} size={25} name={'command'} />
                </View>
            )
        }
    },

    Boutique:{
        screen: Boutique,
        navigationOptions:{
            tabBarLabel: 'Ma Boutique',
            tabBarIcon: () => (
                <View>
                    <Entypo style={{color: 'white'}} size={25} name={'shop'} />
                </View>
            )
        }
    } */
}

export default TabNavigator = createMaterialBottomTabNavigator(screens, {
    initialRouteName: 'Command',
    activeColor: 'white',
    inactiveColor: '#616161',
    barStyle: {backgroundColor: '#FF7A00'}
})