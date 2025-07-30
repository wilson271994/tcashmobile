import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, TextInput, StyleSheet, Modal, SafeAreaView, Button, ActivityIndicator, ImageBackground, ScrollView, Linking, TouchableHighlight, Platform} from 'react-native';
import  {homestyle}  from '../../assets/styles/home.js';
import Moment from 'moment';
import { store } from '../../reducers/store';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {switchHeaderAction} from '../../reducers/actions/index.js';
import { searchstyle } from '../../assets/styles/search.js';

class HomeIndex extends PureComponent {
    constructor(props){
        super(props); 
        state = {}
    };
  
    componentDidMount(){
        this._fechtData();
    } 
  
    _fechtData = async () => {
        await switchHeaderAction(true);  
    } 
   
    _navigateToBookDetail = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('BookDetail');
    }

    _navigateToPaieIndex = () => {
        const {navigation} = this.props; 
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('PaieIndex');
    }

    render(){
        const {navigation} = this.props; 
           return(
            <SafeAreaView style={homestyle.container2}>
                <ScrollView contentContainerStyle={homestyle.scrollContainer}>
                <View style={homestyle.container}>
                    <View style={homestyle.header}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/account.png')} // Remplacez par le chemin de votre image
                                style={homestyle.logo2}
                            />
                        </TouchableOpacity>    

                        <View style={homestyle.headeritemright}>

                            <View style={homestyle.Conatiner}>

                                <View style={homestyle.backgroundCircle}>

                                </View>

                            </View>

                                

                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/images/notification.png')} // Remplacez par le chemin de votre image
                                    style={homestyle.notification}
                                />
                            </TouchableOpacity>

                                <View style={homestyle.counter}>
                                    <Text style={homestyle.index}>1</Text>
                                </View>

                            <View style={homestyle.Conatiner2}>

                                <View style={homestyle.backgroundCircle2}>

                                </View>

                            </View>

                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/images/support.png')} // Remplacez par le chemin de votre image
                                    style={homestyle.support}
                                />
                            </TouchableOpacity>

                              
                            <Text style={homestyle.UserText}>Utilisateur T_cash</Text>
                            <Image
                                source={require('../../assets/images/verified.png')}
                                style={homestyle.verified}
                            />
                            <Text style={homestyle.verifiedtext}>verified</Text>
                           
                          
                        </View>
                    </View>
                </View>
                {/* Partie supérieure */}
                
                    {/* Bannière de promotion */}
                    

                    {/* Bannière de promotion */}
                   
                    <View style={homestyle.promoContainer}>
                       
                        <Image
                            source={require('../../assets/images/eye.png')}
                            style={homestyle.eye}
                        />
                        
                        <Text style={homestyle.promoText}>T_cash Balance</Text>
                        <Text style={homestyle.promoDiscount}>32 132.2 FCFA</Text>
                            <Image
                                source={require('../../assets/images/t_cash.png')}
                                style={homestyle.tcash}
                            />
                    </View>
                 
                    {/* Liste des nouveaux livres */}

                    <View style={homestyle.container2}>

                        <View style={homestyle.backgroundCircle4}>

                        </View>

                    </View>


                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/plus.png')}
                            style={homestyle.plus}
                        />                        
                    </TouchableOpacity>

                        <View style={homestyle.container2}>
                            <View style={homestyle.backgroundCircle3}>
                            </View>
                        </View>

                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/transfert.png')}
                            style={homestyle.transfert}
                        />                       
                   </TouchableOpacity>

                    <Text style={homestyle.depositeText}>Deposite</Text>

                    <Text style={homestyle.transfertText}>transfer</Text>

                    <ScrollView contentContainerStyle={homestyle.scrollContainer}>
                        
                        <View style={homestyle.TransactionsContainer}>
                            <Text style={homestyle.headText}>Transactions</Text>
                            <Text style={homestyle.viewText}>View all</Text>
                            <View style={homestyle.container2}>
                                <View style={homestyle.backgroundCircle5}>
                                </View>
                            </View>
                            <TouchableOpacity 
                               
                                onPress={this. _navigateToPaieIndex.bind(this)}

                               >
                                <View>
                                    <Image
                                        source={require('../../assets/images/account.png')}
                                        style={homestyle.image1} />
                                        <Text style={homestyle.text}>T_cash Deposite</Text>
                                        <Text style={homestyle.text2}>Valery Yanick</Text>
                                        <Text style={homestyle.text3}>+11 000 FCFA</Text>
                                        <Text style={homestyle.text4}>12 hours ago</Text>
                                </View>
                            </TouchableOpacity>

                             <View style={homestyle.Conatiner2}>
                                    <View style={homestyle.backgroundCircle5}>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={this. _navigateToPaieIndex.bind(this)}>
                                <View>
                                    <Image
                                        source={require('../../assets/images/account.png')}
                                        style={homestyle.image1} />
                                        <Text style={homestyle.text}>T_cash Deposite</Text>
                                        <Text style={homestyle.text2}>Valery Yanick</Text>
                                        <Text style={homestyle.text3}>+11 000 FCFA</Text>
                                        <Text style={homestyle.text4}>12 hours ago</Text>
                                </View>
                            </TouchableOpacity>
                            
                             <View style={homestyle.Conatiner2}>
                                    <View style={homestyle.backgroundCircle5}>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={this. _navigateToPaieIndex.bind(this)}>
                                <View>
                                    <Image
                                        source={require('../../assets/images/account.png')}
                                        style={homestyle.image1} />
                                        <Text style={homestyle.text}>T_cash Deposite</Text>
                                        <Text style={homestyle.text2}>Valery Yanick</Text>
                                        <Text style={homestyle.text3}>+11 000 FCFA</Text>
                                        <Text style={homestyle.text4}>12 hours ago</Text>
                                </View>
                            </TouchableOpacity>
                             <View style={homestyle.Conatiner2}>
                                    <View style={homestyle.backgroundCircle5}>
                                </View>
                            </View>
                            <TouchableOpacity
                             onPress={this. _navigateToPaieIndex.bind(this)}>
                                <View>
                                    <Image
                                        source={require('../../assets/images/account.png')}
                                        style={homestyle.image1} />
                                        <Text style={homestyle.text}>T_cash Deposite</Text>
                                        <Text style={homestyle.text2}>Valery Yanick</Text>
                                        <Text style={homestyle.text3}>+11 000 FCFA</Text>
                                        <Text style={homestyle.text4}>12 hours ago</Text>
                                </View>
                            </TouchableOpacity>
                             <View style={homestyle.Conatiner2}>
                                    <View style={homestyle.backgroundCircle5}>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={this. _navigateToPaieIndex.bind(this)}>
                                <View>
                                    <Image
                                        source={require('../../assets/images/account.png')}
                                        style={homestyle.image1} />
                                        <Text style={homestyle.text}>T_cash Deposite</Text>
                                        <Text style={homestyle.text2}>Valery Yanick</Text>
                                        <Text style={homestyle.text3}>+11 000 FCFA</Text>
                                        <Text style={homestyle.text4}>12 hours ago</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                </ScrollView>

            </SafeAreaView>
        )
    }
  } 
  
  const mapDispatchToProps = (dispatch) => {
      return {
          ...bindActionCreators({
              switchHeaderAction
          }, dispatch),
      }
  };
  
  const mapStateToProps = (state) => {
      return {
          user_infos:state.auth.user_infos,
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps, null)(HomeIndex);