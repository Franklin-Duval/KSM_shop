import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'

import Activity from '../activity_indicator'
import Load_Font from '../load_fonts'


export default class Terms extends React.Component{

    componentDidMount(){
        Load_Font
        .then(() => {
            this.setState({isLoading: false})
        })
    }

    state = {
        isLoading: true
    }

    move_login_page = () => {
        this.props.navigation.navigate('Login')
    }

    render(){
        return(
            this.state.isLoading
            ?
            <Activity isLoading={this.state.isLoading} />
            :
            <View style={styles.container}>
                <ScrollView >
                    <Text style={styles.h1}>Termes et Conditions d'Utilisation</Text>
                    <Text style={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Turpis cursus in hac habitasse platea dictumst quisque. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. 
                    Pellentesque adipiscing commodo elit at. Sagittis eu volutpat odio facilisis mauris sit amet. Aliquet risus feugiat in ante. Enim 
                    sed faucibus turpis in eu mi bibendum neque. Id neque aliquam vestibulum morbi. Cras fermentum odio eu feugiat pretium nibh ipsum 
                    consequat. Porttitor lacus luctus accumsan tortor posuere ac. Pulvinar pellentesque habitant morbi tristique senectus et netus et.
                    Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.{"\n"}{"\n"}

                    Et leo duis ut diam quam nulla porttitor massa. Commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt praesent semper feugiat 
                    nibh. Vitae proin sagittis nisl rhoncus. Est ante in nibh mauris cursus mattis molestie a. Amet nisl suscipit adipiscing bibendum 
                    est ultricies. Diam phasellus vestibulum lorem sed risus ultricies tristique.{"\n"}{"\n"}Nibh cras pulvinar mattis nunc sed blandit. Dolor 
                    magna eget est lorem. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Et netus et malesuada fames ac turpis 
                    egestas. Ornare suspendisse sed nisi lacus sed viverra tellus. Mollis nunc sed id semper risus in hendrerit. Euismod quis viverra 
                    nibh cras pulvinar mattis nunc. Porta nibh venenatis cras sed felis eget velit. Lorem ipsum dolor sit 
                    amet consectetur adipiscing elit. A erat nam at lectus urna. Ut pharetra sit amet aliquam id. Viverra suspendisse potenti 
                    ullam ac tortor vitae.
                    </Text>
                </ScrollView>
                <View style={styles.bottom}>
                    <TouchableOpacity
                        style={styles.refuser}
                        onPress={() => console.log("refuser")}
                    >
                        <Text style={{fontFamily: "Tauri", color: "white"}}>Refuser et fermer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.accepter}
                        onPress={this.move_login_page}
                    >
                        <Text style={{fontFamily: "Tauri",}}>Accepter les Termes</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
		alignItems: 'center',
        justifyContent: 'center',
        
    },

    h1:{
        fontFamily: "Tauri",
        fontSize: 30,
        marginBottom: 15,
        marginTop: 40,
        marginLeft: 20
    },

    bottom:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 20,
    },

    content:{
        fontFamily: "Montserrat_Regular",
        fontSize: 15,
        margin: 10,
        marginLeft: 20
    },

    refuser:{
        padding: 10,
        borderWidth: 1,
        backgroundColor: "#e57373",
        marginRight: 10,
    },

    accepter:{
        padding: 10,
        borderWidth: 1,
        //backgroundColor: "#e57373",
        marginLeft: 10,
    }
})