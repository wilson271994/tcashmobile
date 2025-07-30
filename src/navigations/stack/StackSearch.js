// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { store } from "../../reducers/store";
import { createStackNavigator } from "@react-navigation/stack";
import {Image, TextInput, TouchableOpacity, View, Icon, Button, Text} from "react-native";
import {styles} from "../../assets/styles";
import IconFA  from 'react-native-vector-icons/FontAwesome';
import { switchHeaderAction } from "../../reducers/actions";
import HTMLView from 'react-native-htmlview'; 
import { htmlstyles } from '../../assets/styles/htmlviewstyle';
import SearchFilter from "../../components/search/SearchFilter";
import ReadIndex from "../../components/search/ReadIndex";
import Search from "../../screens/Search";

const Stack = createStackNavigator();

class StackSearch extends Component {
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

    _backSearch = () => {
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
                    component={Search} 
                    options={{
                        headerShown:false
                    }}
                />

                <Stack.Screen 
                    name="SearchFilter" 
                    component={SearchFilter} 
                    options={{
                        headerShown:true,
                        headerTitle : () => {
                            return (
                                <View style={styles.backText}>
                                    <Text 
                                        numberOfLines={1}
                                        style={[styles.textBold, styles.textHeader]}>Filtre</Text>
                                </View>
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity 
                                    style={styles.btnbackscreen}
                                    onPress={this._backSearch}>
                                    <Image style={styles.backbtn} source={require('../../assets/images/back.png')} />
                                </TouchableOpacity>
                            )
                        },
                    }}
                />

                <Stack.Screen 
                    name="ReadIndex" 
                    component={ReadIndex} 
                    options={{
                        headerShown:true,
                        headerTitle : () => {
                            return (
                                <View style={styles.backText}>
                                    <Text 
                                        numberOfLines={1}
                                        style={[styles.textBold, styles.textHeader]}>Read</Text>
                                </View>
                            )
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity 
                                    style={styles.btnbackscreen}
                                    onPress={this._backSearch}>
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

export default connect(mapStateToProps, mapDispatchToProps, null)(StackSearch);