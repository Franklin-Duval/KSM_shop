import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Commande from '../../components/commands/command'

const Stack = createStackNavigator()

function Statistic_Navigation({ navigation}){
    return(
        <Stack.Navigator
            /* screenOptions={{
                headerShown: false
            }} */
        >
            <Stack.Screen name="Commande" component={Commande} options={{
                    headerLeft: () => <Icon name="menu" size={30} onPress={() => navigation.openDrawer()} style={{marginLeft: 15}} />
                }}
            />
        </Stack.Navigator>
    )
}

export default Statistic_Navigation
