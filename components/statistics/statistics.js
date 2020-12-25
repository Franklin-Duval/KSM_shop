import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity,} from 'react-native'

export default class Statistic extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>Statistics</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})