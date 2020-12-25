import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import LottieView from 'lottie-react-native'

export default class Splash extends React.Component{

    render(){
        return(
            <View style={styles.container} >
                <LottieView 
                    source={require('../../assets/splash2.json')}
                    autoPlay
                    loop 
                    
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7A00',
    },


})