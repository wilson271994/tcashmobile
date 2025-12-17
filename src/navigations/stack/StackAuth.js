// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import {Image, Text, TouchableOpacity} from "react-native";
import { switchHeaderAction, switchPostFormAction } from "../../reducers/actions";
import { loginstyle } from "../../assets/styles/login";
import { styles } from "../../assets/styles";
import AntDesign  from 'react-native-vector-icons/AntDesign';
import loginPage from "../../components/Auth/loginPage";
import signupForm1 from "../../components/Auth/signupForm1";
import signupForm2 from "../../components/Auth/signupForm2";
import Preload from "../../components/Auth/Preload";
import activationPage from "../../components/Auth/activationPage";

const Stack = createStackNavigator();

class StackAuth extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    _backHome = () => {
        const {root_navigation} = this.props; 
        root_navigation.goBack();
    } 
    _backProfil = () => {
        const {root_navigation} = this.props; 
        switchHeaderAction(true);
        root_navigation.goBack();
    } 

    _backToForm1 = () => {
        const {navigation} = this.props; 
        navigation.navigate('SignUpForm1');
    }

    _filterSearch = (text) => {
    
    }

    ToggleSearchBar = () => {
        const {root_navigation} = this.props; 
        console.log('yesssssssssssss')
    }

    render () {
        const {page_title} = this.props;
        return ( 
            <Stack.Navigator>
                <Stack.Screen 
                    name=" " 
                    component={loginPage}           
                    options={{
                        headerShown:false, 
                        headerTitle: props => <Image style={loginstyle.logoauth} source={require('../../assets/images/logo.png')}/>,
                        headerTitleAlign:'center',
                        headerStyle : loginstyle.headertitlestyle
                    }}
                />

                <Stack.Screen 
                    name="SignUpForm1"  
                    component={signupForm1} 
                    options={{
                        headerShown:false, 
                        headerTitle : () => {
                            return (
                                <Text 
                                numberOfLines={1}
                                style={[styles.textBold, loginstyle.titlepagesignup]}>{page_title}</Text>
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity 
                                    style={styles.btnbackscreen}
                                    onPress={this._backHome}>
                                    <Image style={loginstyle.backstyle} source={require('../../assets/images/back.png')} />
                                </TouchableOpacity>
                            )
                        },
                        
                    }}
                />

                <Stack.Screen
                    name="SignUpForm2"
                    component={signupForm2}
                    options={{
                        headerShown: false,
                        headerTitle: () => {
                            return (
                                <Text
                                numberOfLines={1}
                                style={[styles.textBold, loginstyle.titlepagesignup]}>{page_title}</Text>
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity
                                    onPress={this. _backProfil}
                                    style={styles.btnbackscreen}>
                                    <Image style={loginstyle.backstyle} source={require('../../assets/images/back.png')} />
                                </TouchableOpacity>
                            )
                        },
                    }}

                />

                <Stack.Screen
                    name="Preload"
                    component={Preload}
                    options={{
                        headerShown: false,
                        headerTitle: () => {
                            return (
                                <Text
                                numberOfLines={1}
                                style={[styles.textBold, loginstyle.titlepagesignup]}>{page_title}</Text>
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity
                                    onPress={this. _backProfil}
                                    style={styles.btnbackscreen}>
                                    <Image style={loginstyle.backstyle} source={require('../../assets/images/back.png')} />
                                </TouchableOpacity>
                            )
                        },
                    }}

                />


                <Stack.Screen 
                    name="Activation"  
                    component={activationPage} 
                    options={{
                        headerShown:false, 
                        headerTitle : () => {
                            return (
                                <Text 
                                    numberOfLines={1}
                                    style={[styles.textBold, loginstyle.titlesignup]}>{page_title}</Text>
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity 
                                    style={styles.btnbackscreen}
                                    onPress={this._backHome}>
                                    <AntDesign name="left" style={styles.angleleft}/>
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
        root_navigation:state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(StackAuth);