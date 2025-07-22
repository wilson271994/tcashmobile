import React, {Component, PureComponent} from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import { Text } from 'react-native-elements'
import { View, TouchableOpacity } from "react-native";
import { styles } from "../assets/styles";


const Tab = createMaterialTopTabNavigator();

class TopTabNavigator extends PureComponent {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Tab.Navigator 
                    initialRouteName="Discussion"
                    screenOptions={{
                        tabBarHideOnKeyboard: true,
                    }}
                >
{/*                     
                <Tab.Screen
                    name="Discussion"
                    component={Discussion}
                    options={{ 
                        title: (tabInfo) => {
                            return (
                                <View>
                                    <Text numberOfLines={1} style={[styles.textBold, tabInfo.focused ? '#ddd' : '#kkkk', messengerstyle.titlepage]}>Discussions</Text>
                                </View>
                            )
                        },
                        headerShown: false,
                        tabBarIndicatorStyle: {
                            borderBottomColor:'#2f2574',
                            borderBottomWidth: 2,
                        },
                    }}
                /> */}

            </Tab.Navigator>
        );
    }
 
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading : state.loader.is_loading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(TopTabNavigator);