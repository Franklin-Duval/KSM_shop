import React from 'react'
import { StyleSheet, ScrollView, View, Image, Dimensions, Text, ImageBackground, TouchableOpacity } from 'react-native'

import Activity from '../activity_indicator'
import Load_Font from '../load_fonts'

const {width, height} = Dimensions.get("window")

export default class Slide extends React.Component{

    componentDidMount(){
        Load_Font
        .then(() => {
            this.setState({isLoading: false})
        })
    }

    state = {
        active: 0,
        end: true,
        isLoading: true
    }

    change = ({nativeEvent}) =>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== this.state.active){
            this.setState({active: slide})
        }
        
        if (this.state.active==3 && this.state.end && this.isCloseToBottom(nativeEvent)) {
            this.setState({end: false})
            console.log('scroll end')
            //this.accept()
            this.setState({end: true})
        }

    }

    isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 0;
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom
    }
    
    move_terms_page = () => {
        this.props.navigation.navigate('Terms')
    }

    render(){
        
        let dots = []
        for (let i=0; i<3; i++){
            dots.push(
                <View key={i} style={i==this.state.active ? styles.bar_active : styles.bar_inactive} />
            )
        }

        return(
            this.state.isLoading
            ?
            <Activity isLoading={this.state.isLoading} />
            :
            <View style={styles.container}>
                <ScrollView 
                    style={styles.scroll}
                    horizontal
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    ref={(scroller) => {this.scroller = scroller}}
                >
                    
                    <ImageBackground  key={1} source={require('../../assets/images/slide_1.jpg')} style={styles.background_image} >
                        <View style={styles.slide} >
                            <Image source={require('../../assets/images/food_1.jpg')} style={styles.image} />
                            <Text style={styles.h1} >KSM Shop</Text>
                            <TouchableOpacity
                                onPress={()=> this.scroller.scrollTo({ x: width })}
                                style={styles.button}
                            >
                                <Text style={styles.button_text} >Next</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <ImageBackground  key={2} source={require('../../assets/images/slide_2.jpg')} style={styles.background_image} >
                        <View style={styles.slide} >
                            <Image source={require('../../assets/images/food_1.jpg')} style={styles.image} />
                            <Text style={styles.h1} >KSM Shop</Text>
                            <Text style={styles.h2} >Controler l’évolution et administez vos boutiques à travers KSM Shop</Text>
                            <TouchableOpacity
                                onPress={()=> this.scroller.scrollTo({ x: width*2 })}
                                style={styles.button}
                            >
                                <Text style={styles.button_text} >Next</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <ImageBackground  key={3} source={require('../../assets/images/slide_3.jpg')} style={[styles.background_image, {marginRight: 1}]} >
                        <View style={styles.slide} >
                            <Image source={require('../../assets/images/food_1.jpg')} style={styles.image} />
                            <Text style={styles.h1} >KSM Shop</Text>
                            <Text style={styles.h2} >Surveillez vos commandes, ventes et vos statistiques à travers votre application KSM Shop</Text>
                            <TouchableOpacity
                                onPress={this.move_terms_page}
                                style={styles.button}
                            >
                                <Text style={styles.button_text} >Continuer</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    
                </ScrollView>

                <View style={styles.pagination}>
                    {dots}
                </View>
                <TouchableOpacity
                    onPress={this.move_terms_page}
                    style={styles.skip}
                >
                    <Text style={{fontSize: 16, color: 'white'}} >Skip {'>>'}</Text>
                </TouchableOpacity>
      		</View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height+40,
        backgroundColor: '#FF7A00',
    },

    background_image:{
        width: width,
        height: height+40,
        resizeMode: "cover",
        justifyContent: 'center'
    },

    image:{
        height: 150,
        width: 150,
        borderRadius: 75
    },

    slide:{
        flex: 1,
        backgroundColor: '#FF7A00',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9
    },

    h1:{
        fontFamily: "Tauri",
        fontSize: 45,
        marginBottom: 40,
        color: 'white',
    },

    h2:{
        fontFamily: "Tauri",
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },

    scroll:{
        width: width,
        height: height,
    },

    pagination:{
        flexDirection: "row",
        position: "absolute",
        bottom: 100,
        alignSelf: "center"
    },

    skip:{
        flexDirection: "row",
        position: "absolute",
        bottom: 25,
        alignSelf: 'flex-end',
        paddingRight: 20,
    },

    bar_active:{
        borderWidth: 2,
        marginLeft: 15,
        width: 25,
        borderColor: 'black'
    },

    bar_inactive:{
        borderWidth: 2,
        marginLeft: 15,
        width: 25,
        borderColor: 'white'
    },

    button:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 35,
        marginTop: 60,
        width: 250
    },

    button_text:{
        color: '#FF7A00',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: "Tauri",
    },

})