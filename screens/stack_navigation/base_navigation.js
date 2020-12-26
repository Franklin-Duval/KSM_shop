import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

/*
    Import the different screens
*/
import Login from '../../components/login_terms_condition/login'
import Slide from '../../components/splash_screen_slide/slides'
import Terms from '../../components/login_terms_condition/terms_conditions'
import Market_Place from '../drawer_navigation/drawer_navigation'
//import Tab from '../tab_navigation/market_place_tab'

const Stack = createStackNavigator()

function Base_Navigation(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Slide" component={Slide} />
            <Stack.Screen name="Terms" component={Terms} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Market" component={Market_Place} />
        </Stack.Navigator>
    )
}

export default Base_Navigation


/* const screens = {
    Slide:{
        screen: Slide,
        navigationOptions:{
            headerShown: false
        }
    },

    Terms:{
        screen: Terms,
        navigationOptions:{
            headerShown: false
        }
    },

    Login:{
        screen: Login,
        navigationOptions:{
            headerShown: false
        }
    },

    Market:{
        screen: Market_Place,
        navigationOptions:{
            headerShown: false
        }
    },
}

const Stack = createStackNavigator(screens)

export default createAppContainer(Stack) */