import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Drawer, } from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import  MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import Load_Font from '../../components/load_fonts'

export default class Side_Bar extends React.Component{

    render(){
        Load_Font
        return(
            <LinearGradient style={styles.container} colors={['#F58D2D', '#FF7A00', '#FF5C00']}>
                <DrawerContentScrollView {...this.props}>
                    <Avatar.Image source={require('../../assets/images/food_1.jpg')} size={120} style={styles.avatar} />
                    <Title style={{color: 'white'}}>Franklin Duval</Title>
                    <Caption style={{color: 'white'}}>franklinfrost14@gmail.com</Caption>
                    <Caption style={{color: 'white'}}>+237 690115022</Caption>
                    <View style={styles.line}></View>

                    <Drawer.Section>
                        <DrawerItem
                            icon={() => (
                                <Ionicon
                                    name='home'
                                    color='white'
                                    size={25}
                                />
                            )}
                            label="Acceuil"
                            labelStyle={styles.labelStyle}
                            onPress={() => console.log("Acceuil")}
                        />

                        <DrawerItem
                            icon={() => (
                                <Icon
                                    name='account'
                                    color='white'
                                    size={25}
                                />
                            )}
                            label="Mon Compte"
                            labelStyle={styles.labelStyle}
                            onPress={() => console.log("compte")}
                        />

                        <DrawerItem
                            icon={() => (
                                <Ionicon
                                    name='bar-chart-outline'
                                    color='white'
                                    size={25}
                                />
                            )}
                            label="Statistiques"
                            labelStyle={styles.labelStyle}
                            onPress={() => console.log("Acceuil")}
                        />

                        <DrawerItem
                            icon={() => (
                                <Ionicon
                                    name='settings-outline'
                                    color='white'
                                    size={25}
                                />
                            )}
                            label="Paramètres"
                            labelStyle={styles.labelStyle}
                            onPress={() => console.log("Acceuil")}
                        />

                        <DrawerItem
                            icon={() => (
                                <Icon
                                    name='help'
                                    color='white'
                                    size={25}
                                />
                            )}
                            label="A Propos"
                            labelStyle={styles.labelStyle}
                            onPress={() => console.log("Propos")}
                        />

                        <DrawerItem
                            icon={() => (
                                <MaterialIcon
                                    name='library-books'
                                    color='white'
                                    size={25}
                                />
                            )}
                            label="Termes et Conditions"
                            labelStyle={styles.labelStyle}
                            onPress={() => console.log("Terms")}
                        />

                        <DrawerItem
                            icon={() => (
                                <Icon
                                    name='logout'
                                    color='white'
                                    size={25}
                                />
                            )}
                            label="Se Déconnecter"
                            labelStyle={styles.labelStyle}
                            onPress={() => console.log("Deconnecter")}
                        />


                    </Drawer.Section>
                </DrawerContentScrollView>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    avatar:{
        marginTop: 10,
        marginLeft: 10
    },

    line:{
        borderWidth: 0.5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        marginBottom: 0,
        width: 245,
        borderColor: 'white'
    },

    labelStyle:{
        color: 'white',
        fontFamily: 'Tauri',
        fontSize: 13
    }
})