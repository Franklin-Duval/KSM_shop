import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import { Accordion } from 'native-base'
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'

import Activity from '../activity_indicator'
import Load_Font from '../load_fonts'

export default class Compagnie extends React.Component{

    componentDidMount(){
        Load_Font
        .then(() => {
            this.setState({isLoading: false})
        })
    }

    state = {
        isLoading: true,
        description: [{title: "Description", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],
        token: 'pk.eyJ1IjoibmFtbG9uZ21vYmlsZSIsImEiOiJjazRsYmsyY2cwZnRuM2pvajluMDJvbjlzIn0.HYVfIvcuXzWqGyv5KQXnnA'
    }

    render(){
        return(
            this.state.isLoading
            ?
            <Activity isLoading={this.state.isLoading} />
            :
            <ScrollView style={styles.container}>
                <Image source={require('../../assets/images/food_3.jpg')} style={styles.image} />
                <Text style={styles.h1}>Food Delivery</Text>

                <View style={{flexDirection: 'row', marginLeft: 30}}>
                    <Icon name='location-sharp' size={20} />
                    <Text style={styles.location}>Melen, Yaoundé</Text>
                    <Text style={styles.contact}>+237 690115022</Text>
                </View>
                
                <Text style={styles.h2}>Baseline: Restauration</Text>
                <View style={{margin: 15}}>
                    <Accordion dataArray={this.state.description} expanded={1}/>
                </View>

                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('merci')}
                    >
                        <Text style={{color: 'white', textAlign: 'center', fontFamily: 'Tauri', fontSize: 16}} >Consulter mes boutiques</Text>
                    </TouchableOpacity>
                </View>
                
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },

    image:{
        width: '100%',
        height: 200,
    },

    h1:{
        fontFamily: "Tauri",
        fontSize: 30,
        //marginLeft: 30,
        marginBottom: 10,
        marginTop: 15,
        textAlign: 'center',
    },

    location:{
        fontFamily: "Tauri",
        fontSize: 13,
        marginTop: 3,
        marginLeft: 5
    },

    contact:{
        fontFamily: "Tauri",
        fontSize: 13,
        marginTop: 3,
        marginLeft: 50
    },

    h2:{
        fontFamily: "Tauri",
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
        marginLeft: 30
    },

    button:{
        backgroundColor: '#FF7A00',
        padding: 10,
        width: '60%',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})