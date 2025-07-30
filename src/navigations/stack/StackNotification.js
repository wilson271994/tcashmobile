// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { store } from "../../reducers/store";
import { createStackNavigator } from "@react-navigation/stack";
import {Image, TextInput, TouchableOpacity, View, Icon, Button, Text} from "react-native";
import {styles} from "../../assets/styles";
import IconFA  from 'react-native-vector-icons/FontAwesome';
import Notification from "../../screens/Notification";
import DetailHome from "../../components/Home/DetailHome";
import { switchHeaderAction } from "../../reducers/actions";
import HTMLView from 'react-native-htmlview'; 
import { htmlstyles } from '../../assets/styles/htmlviewstyle';
import EventProfil from '../../components/Event/EventProfil'
import GroupProfil from "../../components/Group/GroupProfil";

const Stack = createStackNavigator();

class StackNotification extends Component {
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

    _backHome = () => {
        const {root_navigation} = this.props;  
        switchHeaderAction(true);
        root_navigation.goBack();
    } 

    render () {
        const {is_loading, page_title} = this.props;
        return ( 
            <Stack.Navigator>
                <Stack.Screen 
                    name=" " 
                    component={Notification} 
                    options={{
                        headerShown:false
                    }}
                />

                <Stack.Screen 
                    name="DetailHome" 
                    component={DetailHome} 
                    options={{
                        headerShown:true, 
                        headerTitle : () => {
                            return (
                                <HTMLView
                                    value={`<titlepage>${page_title ?  page_title.substring(0, 20)+'...' : ''}</titlepage>`}
                                    stylesheet={htmlstyles}
                                />
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity 
                                    style={styles.btnbackscreen}
                                    onPress={this._backHome}>
                                    <IconFA name="angle-left" style={styles.angleleft}/>
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

export default connect(mapStateToProps, mapDispatchToProps, null)(StackNotification);