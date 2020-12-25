import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'

import Icon from 'react-native-vector-icons/Ionicons'

import Market from '../tab_navigation/market_place_tab'
import Terms from '../../components/login_terms_condition/terms_conditions'

const Drawer = createDrawerNavigator(
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

export default createAppContainer(Drawer)