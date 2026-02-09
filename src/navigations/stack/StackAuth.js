// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import signupForm1 from "../../components/Auth/signupForm1";
import signupForm2 from "../../components/Auth/signupForm2";
import activationForm from "../../components/Auth/activationForm";
import loginForm from "../../components/Auth/loginForm";
const Stack = createStackNavigator();

class StackAuth extends Component {
    constructor(props){
        super(props);
        this.state = {
        } 
    }

    render () {
        return ( 
            <Stack.Navigator>
                <Stack.Screen 
                    name=" " 
                    component={loginForm}            
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

            </Stack.Navigator>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
            ...bindActionCreators({}, dispatch),
        }
};
 
const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(StackAuth);