import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/Ionicons'

import Market from '../tab_navigation/market_place_tab'
import Terms from '../../components/login_terms_condition/terms_conditions'

const Drawer = createDrawerNavigator()

function Drawer_Navigation() {
    return(
        <Drawer.Navigator initialRouteName="MarketTab">
            <Drawer.Screen name="MarketTab" component={Market} />
            <Drawer.Screen name="Terms" component={Terms} />
        </Drawer.Navigator>
    )
}

export default Drawer_Navigation

/* const Drawer = createDrawerNavigator(
    {
        MarketTab:{
            screen: Market,
            navigationOptions:{
                title: 'Market',
                drawerIcon: ({tintColor}) => <Icon size={25} color={tintColor} name={'ios-home'} />
            }
        },

        Terms:{
            screen: Terms,
            navigationOptions:{
                title: 'Terms et Conditions',
                drawerIcon: ({tintColor}) => <Icon size={25} color={tintColor} name={'ios-person'} />
            }
        }
    }
)

export default createAppContainer(Drawer) */