// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from "react-native";
import LoginForm from "../components/Auth/loginForm";
import SignupForm1 from "../components/Auth/signupForm1";
import SignupForm2 from "../components/Auth/signupForm2";
import ActivationForm from "../components/Auth/activationForm";

class AuthNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        } 
    }

    render() {
        const { 
            is_login_form,
            is_signup1_form,
            is_signup2_form,
            is_activation_form
        } = this.props;
        return (
            <View style={{ flex:1 }}>
                {
                    is_login_form ?
                        <LoginForm />
                    :null
                }
                {
                    is_signup1_form ?
                        <SignupForm1 />
                    :null
                }
                {
                    is_signup2_form ? 
                        <SignupForm2 />
                    :null
                }
                {
                    is_activation_form ?
                        <ActivationForm />
                    :null
                }
            </View>
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
        is_login_form       : state.navigation.is_login_form,
        is_signup1_form     : state.navigation.is_signup1_form,
        is_signup2_form     : state.navigation.is_signup2_form,
        is_activation_form  : state.navigation.is_activation_form,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AuthNavigation);