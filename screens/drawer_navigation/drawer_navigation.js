import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'


import Market from '../tab_navigation/market_place_tab'
import Terms from '../../components/login_terms_condition/terms_conditions'
import SideBar from './side_bar'

const Drawer = createDrawerNavigator()

function Drawer_Navigation() {
    return(
        <Drawer.Navigator
            initialRouteName="MarketTab"
            drawerContent={(props) => <SideBar {... props } />}
        >
            <Drawer.Screen name="MarketTab" component={Market} />
            <Drawer.Screen name="Terms" component={Terms} />
        </Drawer.Navigator>
    )
}

export default Drawer_Navigation
