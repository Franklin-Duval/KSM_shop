import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Container, Header, Content, Picker, Form } from "native-base"

export default class Command extends React.Component{

    state = {
        selected: "Tout"
    }

    onValueChange = (value) => {
        this.setState({
            selected: value
        });
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <TextInput style={styles.search} placeholder="Rechercher" />
                <Container style={{height:50, }}>
                    <Content>
                        <Form>
                            <Picker
                                note
                                mode="dropdown"
                                placeholder="Filtre"
                                style={{ width: 170, }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange}
                            >
                                <Picker.Item label="Tout" value="Tout" />
                                <Picker.Item label="Par Boutique" value="Par Boutique" />
                                <Picker.Item label="Par Client" value="Par Client" />
                            </Picker>
                        </Form>
                    </Content>
                </Container>
                {/* <View style={{flexDirection: 'row', height: 50}}>
                    <Container style={{}}>
                        <Content>
                            <Form>
                                <Picker
                                    note
                                    mode="dropdown"
                                    placeholder="Filtre"
                                    style={{ width: 170, }}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange}
                                >
                                    <Picker.Item label="Tout" value="Tout" />
                                    <Picker.Item label="Par Boutique" value="Par Boutique" />
                                    <Picker.Item label="Par Client" value="Par Client" />
                                </Picker>
                            </Form>
                        </Content>
                    </Container>
                    <TouchableOpacity
                        style={{backgroundColor: '#FF7A00', marginHorizontal: 15, padding:10, height: 40 }}
                    >
                        <Text style={{color: 'white', textAlign: 'center'}}>Historique</Text>
                    </TouchableOpacity>
                </View> */}
                <View>
                    <Text>Merciiii</Text>
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },

    search: {
        margin: 15,
        borderWidth: 1,
        borderRadius: 25,
        height: 40,
        paddingHorizontal: 20
    }
})