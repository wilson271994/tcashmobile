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
import { switchHeaderAction } from "../../reducers/actions";
import StackService from "../stack/StackService";
import StackProfil from "../stack/StackProfil";
import { stackstyle } from "../../assets/styles/stackstyle";
import StackTransaction from "../stack/StackTransaction";

const Tab = createBottomTabNavigator();

class BottomTabNavigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHome:false,
            isService:false,
            isTransaction:false,
            isProfil:false,
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
            isService,
            isTransaction,
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
                        initialRouteName={is_authenticated ? "Home" : "Auth"}
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
                                                this.setState({isService:false})
                                                this.setState({isTransaction:false})
                                                this.setState({isProfil:false})
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
                                            borderBottomWidth:isHome || (!isHome && !isService && !isTransaction && !isProfil) ? 2 : 0,
                                            marginBottom:-23,
                                            borderBottomColor:'#fff'
                                        },
                                        tabBarLabel:"Accueil",
                                        tabBarLabelStyle:stackstyle.tabbarlabel,
                                        marginBottom:-23,
                                        borderBottomColor:'#fff'
                                    }}
                                />

                                <Tab.Screen
                                    name="Service"
                                    component={StackService} 
                                    listeners={({ route }) => ({
                                        tabPress: e => { 
                                            if(route.name == "Service"){
                                                this.setState({isService:true})
                                                this.setState({isHome:false})
                                                this.setState({isTransaction:false})
                                                this.setState({isProfil:false})
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
                                                    <Image source={require('../../assets/images/wallet.png')} style={styles.iconmenup} />
                                                </View>
                                            );
                                        },
                                        tabBarItemStyle:{
                                            borderBottomWidth:isService ? 2 : 0,
                                            marginBottom:-23,
                                            borderBottomColor:'#fff'
                                        },
                                        tabBarLabel:"Services",
                                        tabBarLabelStyle:stackstyle.tabbarlabel,
                                        marginBottom:-23,
                                        borderBottomColor:'#fff'
                                    }}
                                />

                                <Tab.Screen
                                    name="Transaction"
                                    component={StackTransaction}
                                    listeners={({ route }) => ({
                                        tabPress: e => {
                                            if(route.name == "Transaction"){
                                                this.setState({isTransaction:true})
                                                this.setState({isHome:false})
                                                this.setState({isService:false})
                                                this.setState({isProfil:false})
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
                                                    <Image source={require('../../assets/images/services.png')} style={styles.iconmenup} />
                                                </View>
                                            );
                                        },
                                        tabBarItemStyle:{
                                            borderBottomWidth:isTransaction ? 2 : 0,
                                            marginBottom:-23,
                                            borderBottomColor:'#fff'
                                        },
                                        tabBarLabel:"Transaction",
                                        tabBarLabelStyle:stackstyle.tabbarlabel,
                                        marginBottom:-23,
                                        borderBottomColor:'#fff'
                                    }}
                                />

                                <Tab.Screen
                                    name="Profil"
                                    component={StackProfil}
                                    listeners={({ route }) => ({
                                            tabPress: e => {
                                            if(route.name == "Profil"){
                                                this.setState({isProfil:true})
                                                this.setState({isHome:false})
                                                this.setState({isService:false})
                                                this.setState({isTransaction:false})
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
                                                    <Image source={require('../../assets/images/settings.png')} style={styles.iconmenup} />
                                                </View>
                                            );
                                        },
                                        tabBarItemStyle:{
                                            borderBottomWidth:isProfil ? 2 : 0,
                                            marginBottom:-23,
                                            borderBottomColor:'#fff'    
                                        },
                                        tabBarLabel:"Paramètres",
                                        tabBarLabelStyle:stackstyle.tabbarlabel,
                                        marginBottom:-23,
                                        borderBottomColor:'#fff'
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
                                    tabBarStyle:{backgroundColor:'#6dcabb'},  
                                    tabBarIcon: (tabMenu) => {
                                        return (
                                            <View>
                                                <Text style={[styles.text, loginstyle.footertitle]}>
                                                    © {new Date().getFullYear()} Tcash. Develop By 
                                                    <TouchableOpacity>
                                                        <Text style={[styles.text, loginstyle.builderlink]}>Poly-H Technology</Text>
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