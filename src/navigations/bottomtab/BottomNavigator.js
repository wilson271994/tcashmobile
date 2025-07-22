import React, {Component} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import { View, TouchableOpacity, Text, Linking, Image } from "react-native";
import { store } from "../reducers/store";
import Moment from 'moment';
import 'moment/locale/fr';
import ProgressBar from "react-native-animated-progress"; 
import { loginstyle } from "../../assets/styles/login";
import { styles } from "../../assets/styles";
import StackHome from "../stack/StackHome";
import StackAuth from "../stack/StackAuth";
import StackSearch from "../stack/StackSearch";
import { switchHeaderAction } from "../../reducers/actions";
import StackBook from "../stack/StackBook";
import StackProfil from "../stack/StackProfil";
import StackFile from "../stack/StackFile";

const Tab = createBottomTabNavigator();

class BottomTabNavigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHome:false,
            isSearch:false,
            isProfil:false,
            isFile:false,
            isBook:false,
        }
    }

    _openDrawer = () => {
        const {navigation} = this.props;
        navigation.toggleDrawer();
    }

    componentDidMount(){
    }

    _redirectLink = (url) => {
        Linking.openURL(url);
    } 

    render(){
        const {is_authenticated, is_loading} = this.props;
        const {
            isHome,
            isSearch,
            isFile,
            isBook,
            isProfil
        } = this.state;
        return (
            <>
                {
                    is_loading && is_authenticated ?
                        <ProgressBar 
                            indeterminate 
                            backgroundColor="" 
                            height={2}
                        />  
                    :null
                }
                <Tab.Navigator 
                        initialRouteName="Home"
                        screenOptions={{
                            tabBarStyle: {height:64, paddingTop:10,  borderTopRightRadius: 30,  borderTopLeftRadius: 30, backgroundColor:  '#6dcabb'},
                            tabBarHideOnKeyboard: true,
                            activeTintColor:'red',
                            inactiveTintColor:'#000',
                            indicatorStyle: {
                                backgroundColor: 'red', 
                            },
                        }}
                    >
                    {
                        is_authenticated ?
                            <>
                                <Tab.Screen
                                    name="Home"
                                    component={StackHome}
                                    listeners={({ route }) => ({
                                            tabPress: e => {
                                            if(route.name == "Home"){
                                                this.setState({isHome:true})
                                                this.setState({isSearch:false})
                                                this.setState({isProfil:false})
                                                this.setState({isFile:false})
                                                this.setState({isBook:false})
                                                switchHeaderAction(true)
                                            }
                                        },
                                    })}
                                    options={{ 
                                        title : '',
                                        headerShown: false,
                                        tabBarIcon: (tabHome) => {
                                            return (
                                                <View>
                                                    <Image source={require('../../assets/images/accueil.png')} style={styles.iconmenup} />
                                                </View>
                                            );
                                        },
                                        tabBarItemStyle:{
                                            borderBottomWidth:isHome || (!isHome && !isSearch && !isFile && !isProfil && !isBook) ? 2 : 0,
                                            borderBottomColor:'#1a3d99'
                                        },
                                        tabBarLabel:""
                                    }}
                                />

                                <Tab.Screen
                                    name="Profil"
                                    component={StackProfil}
                                    listeners={({ route }) => ({
                                            tabPress: e => {
                                            if(route.name == "Home"){
                                                this.setState({isProfil:true})
                                                this.setState({isHome:false})
                                                this.setState({isSearch:false})
                                                this.setState({isProfil:false})
                                                this.setState({isFile:false})
                                                this.setState({isBook:false})
                                                switchHeaderAction(true)
                                            }
                                        },
                                    })}
                                    options={{ 
                                        title : '',
                                        headerShown: false,
                                        tabBarIcon: (tabHome) => {
                                            return (
                                                <View>
                                                    <Image source={require('../../assets/images/account.png')} style={styles.iconmenup} />
                                                </View>
                                            );
                                        },
                                        tabBarItemStyle:{
                                            borderBottomWidth:isHome || (!isHome && !isSearch && !isFile && !isProfil && !isBook) ? 2 : 0,
                                            borderBottomColor:'#1a3d99'
                                        },
                                        tabBarLabel:""
                                    }}
                                />

                            </>
                        : 
                            <Tab.Screen
                                name="Auth"
                                component={StackAuth}
                                options={{
                                    title:'',
                                    headerShown: false,
                                    tabBarStyle:{backgroundColor:'#1B497D'},  
                                    tabBarIcon: (tabMenu) => {
                                        return (
                                            <View>
                                                <Text style={[styles.text, loginstyle.footertitle]}>
                                                    © {new Date().getFullYear()} POLY-H Int. Develop By 
                                                    <TouchableOpacity>
                                                        <Text style={[styles.text, loginstyle.builderlink]}>Poly-H Soft-D</Text>
                                                    </TouchableOpacity>
                                                </Text> 
                                            </View>
                                        );
                                    },
                                }}
                            />
                    }
                </Tab.Navigator>
            </>
           
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({}, dispatch)
});

const mapStateToProps = (state) => {
    return {
        state,
        is_authenticated:state.auth.is_authenticated,
        is_loading:state.loader.is_loading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(BottomTabNavigator);