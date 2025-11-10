// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { store } from "../../reducers/store";
import { createStackNavigator } from "@react-navigation/stack";
import {Image, TextInput, TouchableOpacity, View, Icon, Button, Text} from "react-native";
import {styles} from "../../assets/styles";
import IconFA  from 'react-native-vector-icons/FontAwesome';
import Profil from "../../screens/Profil";
import { switchHeaderAction, switchPostFormAction } from "../../reducers/actions";
import { htmlstyles } from "../../assets/styles/htmlviewstyle";
import HTMLView from 'react-native-htmlview'; 
import Toast from 'react-native-toast-message';
import Support from '../../components/Profile/Support'
import SupportChat from "../../components/Profile/SupportChat";
import FaqIndex from "../../components/Profile/FaqIndex";
import HelpIndex from "../../components/Profile/HelpIndex";

const Stack = createStackNavigator();

class StackProfil extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    _backProfil = () => {
        const {root_navigation} = this.props; 
        switchHeaderAction(true);
        root_navigation.goBack();
    } 

    ToggleSearchBar = () => {
        const {root_navigation} = this.props; 
        console.log('yesssssssssssss')
    }

    render () {
        const {page_title, is_loading} =this.props;
        return ( 
            <Stack.Navigator>
                <Stack.Screen 
                    name=" " 
                    component={Profil} 
                    options={{
                        headerShown:false
                    }}
                />



                <Stack.Screen 
                    name="FaqIndex" 
                    component={FaqIndex} 
                    options={{
                        headerShown:true,
                        headerTitle : () => {
                            return (
                                <View style={styles.backText}>
                                    <Text 
                                        numberOfLines={1}
                                        style={[styles.textBold, styles.textHeader]}></Text>
                                </View>
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity 
                                    style={styles.btnbackscreen}
                                    onPress={this._backProfil}>
                                    <Image style={styles.backbtn} source={require('../../assets/images/back.png')} />
                                </TouchableOpacity>
                            )
                        },
                    }}
                />



                <Stack.Screen 
                    name="HelpIndex" 
                    component={HelpIndex} 
                    options={{
                        headerShown:true,
                        headerTitle : () => {
                            return (
                                <View style={styles.backText}>
                                    <Text 
                                        numberOfLines={1}
                                        style={[styles.textBold, styles.textHeader]}>Aide</Text>
                                </View>
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity 
                                    style={styles.btnbackscreen}
                                    onPress={this._backProfil}>
                                    <Image style={styles.backbtn} source={require('../../assets/images/back.png')} />
                                </TouchableOpacity>
                            )
                        },
                    }}
                />

                <Stack.Screen 
                    name="Support" 
                    component={Support} 
                    options={{
                        headerShown:true,
                        headerTitle : () => {
                            return (
                                <View style={styles.backText}>
                                    <Text 
                                        numberOfLines={1}
                                        style={[styles.textBold, styles.textHeader]}></Text>
                                </View>
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity 
                                    style={styles.btnbackscreen}
                                    onPress={this._backProfil}>
                                    <Image style={styles.backbtn} source={require('../../assets/images/back.png')} />
                                </TouchableOpacity>
                            )
                        },
                    }}
                />



                <Stack.Screen 
                    name="SupportChat" 
                    component={SupportChat} 
                    options={{
                        headerShown:true,
                        headerTitle : () => {
                            return (
                                <View style={styles.backText}>
                                    <Text 
                                        numberOfLines={1}
                                        style={[styles.textBold, styles.textHeader]}></Text>
                                </View>
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity 
                                    style={styles.btnbackscreen}
                                    onPress={this._backProfil}>
                                    <Image style={styles.backbtn} source={require('../../assets/images/back.png')} />
                                </TouchableOpacity>
                            )
                        },
                    }}
                />
            </Stack.Navigator>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({switchHeaderAction, switchPostFormAction}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        page_title:state.navigation.page_title,
        is_loading:state.loader.is_loading,
        root_navigation:state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(StackProfil);