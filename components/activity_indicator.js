import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

export default class Activity extends React.Component{

    state = {
        isLoading: this.props.isLoading
    }

    render(){
        return(
            <ActivityIndicator 
                animating={this.state.isLoading}
                style={styles.activityIndicator}
                size="large"
                color="#FF7A00"
            />
        )
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
})