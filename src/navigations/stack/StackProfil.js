// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import Profil from "../../screens/Profil";
import UpdateProfil from "../../components/Profile/Forms/UpdateProfil";
import Support from "../../components/Profile/Support";
import SupportChat from "../../components/Profile/SupportChat";
import UpdateNotify from "../../components/Profile/Forms/UpdateNotify";
import SupportFaq from "../../components/Profile/SupportFaq";
import UpdateKYC from "../../components/Profile/Forms/UpdateKYC";

const Stack = createStackNavigator();

class StackProfil extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
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
                    name="UpdateProfil" 
                    component={UpdateProfil} 
                    options={{
                        headerShown:false,
                    }}
                />

                <Stack.Screen 
                    name="UpdateNotify" 
                    component={UpdateNotify} 
                    options={{
                        headerShown:false,
                    }}
                />

                <Stack.Screen 
                    name="UpdateKYC" 
                    component={UpdateKYC} 
                    options={{
                        headerShown:false,
                    }}
                />

                <Stack.Screen 
                    name="SupportFaq" 
                    component={SupportFaq} 
                    options={{
                        headerShown:false,
                    }}
                />

                <Stack.Screen 
                    name="Support" 
                    component={Support} 
                    options={{
                        headerShown:false,
                    }}
                />

                <Stack.Screen 
                    name="SupportChat" 
                    component={SupportChat} 
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
        ...bindActionCreators({ }, dispatch),
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