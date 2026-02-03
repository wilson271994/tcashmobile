// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import {Image, Text, TouchableOpacity} from "react-native";
import { switchHeaderAction, switchPostFormAction } from "../../reducers/actions";
import Preload from "../../components/Auth/Preload";
import LoginPage from "../../components/Auth/loginForm";
import signupForm1 from "../../components/Auth/signupForm1";
import signupForm2 from "../../components/Auth/signupForm2";
import activationForm from "../../components/Auth/activationForm";
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
                    component={LoginPage}           
                    options={{
                        headerShown:false, 
                    }}
                />

                <Stack.Screen 
                    name="SignUpForm1"  
                    component={signupForm1} 
                    options={{
                        headerShown:false, 
                    }}
                />

                <Stack.Screen
                    name="SignUpForm2"
                    component={signupForm2}
                    options={{
                        headerShown: false,
                    }}

                />

                <Stack.Screen 
                    name="Activation"  
                    component={activationForm} 
                    options={{
                        headerShown:false, 
                    }}
                />

                <Stack.Screen
                    name="Preload"
                    component={Preload}
                    options={{
                        headerShown: false,
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