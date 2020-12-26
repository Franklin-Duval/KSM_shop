import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity,} from 'react-native'

export default class Command extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>Commands</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})