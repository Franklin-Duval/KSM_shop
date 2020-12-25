import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import { Formik }  from 'formik'
import * as yup from 'yup'
import Icon from 'react-native-vector-icons/Feather'

import Activity from '../activity_indicator'
import Load_Font from '../load_fonts'


export default class Login extends React.Component{

    componentDidMount(){
        Load_Font
        .then(() => {
            this.setState({isLoading: false})
        })
    }

    state = {
        isLoading: true,
        secure_pw: true,
    }

    validationSchema = yup.object({
        username: yup
            .string()
            .required('Nom d\'utilisateur nécessaire'),

        password: yup
            .string()
            .required('Mot de passe nécessaire'),

    })

    move_market_place = () => {
        this.props.navigation.navigate('Market')
    }

    render(){
        return(
            this.state.isLoading
            ?
            <Activity isLoading={this.state.isLoading} />
            :
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.background} >
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Text style={styles.h1} >KSM Shop</Text>
                    <Text style={styles.h2} >Connectez-vous à votre Compte</Text>
                    
                    <Formik
                        initialValues = {{
                            username: '',
                            password: ''
                        }}

                        validationSchema = {this.validationSchema}
                        onSubmit={(values) => {
                            console.log(values)
                            //this.setState({isLoading: true})
                            this.move_market_place()
                        }}
                    >
                        {(props) => (
                            <View style={styles.content}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Nom d'Utilisateur"
                                    onChangeText={props.handleChange('username')}
                                    value={props.values.username}
                                    onBlur={props.handleBlur('username')}
                                />
                                <Text style={styles.error}> {props.touched.username && props.errors.username} </Text>

                                <View style={{flexDirection: 'row'}}>
                                    <TextInput
                                        style={[styles.textInput, {flex: 1}]}
                                        placeholder="Mot de passe"
                                        onChangeText={props.handleChange('password')}
                                        value={props.values.password}
                                        onBlur={props.handleBlur('password')}
                                        secureTextEntry={this.state.secure_pw}
                                    />
                                    <Icon style={{ marginRight: 20, marginTop: 18, marginLeft: -40 }} name={this.state.secure_pw ? "eye" : 'eye-off'} size={20} color='gray' onPress={() => this.setState({secure_pw :!this.state.secure_pw})} />
                                </View>
                                <Text style={styles.error}> {props.touched.password && props.errors.password} </Text>

                                <TouchableOpacity
                                    disabled={!props.isValid}
                                    onPress={props.handleSubmit}
                                    style={props.isValid? styles.button : [styles.button, {backgroundColor: '#bdbdbd'}]}
                                >
                                    <Text style={styles.button_text} >Valider</Text>
                                </TouchableOpacity>
                                
                            </View>
                        )}
                    </Formik>
                </View>
            </ImageBackground>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7A00',
		alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9
    },

    h1:{
        fontFamily: "Montserrat_Bold",
        fontSize: 50,
        marginBottom: 10,
        color: 'white',
    },

    h2:{
        fontFamily: "Tauri",
        fontSize: 18,
        marginBottom: 50,
        color: 'white'
    },

    background:{
        flex: 1,
        justifyContent: 'center',

    },

    error:{
        color: 'white',
        marginBottom: 20,
        marginLeft: 15,
        fontSize: 12
    },

    textInput:{
        width: 300,
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 18,
        backgroundColor: "white",
        padding: 13,
        paddingLeft: 25,
        fontFamily: "Montserrat_Regular",
    },

    button:{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 30,
        marginTop: 60,
        elevation: 4,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },

    button_text:{
        color: '#FF7A00',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "Tauri",
    },
})