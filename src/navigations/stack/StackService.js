// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import {Image, TextInput, TouchableOpacity, View, Text} from "react-native";
import {styles} from "../../assets/styles";
import { switchHeaderAction } from "../../reducers/actions";
import service from "../../screens/service";

const Stack = createStackNavigator();

class StackService extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    _filterSearch = (text) => {
    
    }

    ToggleSearchBar = () => {
        const {navigation} = this.props; 
        console.log('yesssssssssssss')
    }

    _backService = () => {
        const {root_navigation} = this.props;  
        switchHeaderAction(true);
        root_navigation.goBack();
    } 
    
    render () {
        const {is_loading} = this.props;
        return ( 
            <Stack.Navigator>
                <Stack.Screen 
                    name=" " 
                    component={service} 
                    options={{
                        headerShown:false
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
        is_loading:state.loader.is_loading,
        page_title:state.navigation.page_title,
        root_navigation:state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(StackService);