import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text,  Image,SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../assets/styles';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import { store } from '../../reducers/store';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import Swiper from 'react-native-swiper';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons.js';
import { searchstyle } from '../../assets/styles/search';
import cover from '../../assets/images/biblio.jpg';
import { homestyle } from '../../assets/styles/home';
import { filterstyle } from '../../assets/styles/filter';
import { filestyle } from '../../assets/styles/file';
import {switchHeaderAction} from '../../reducers/actions/index.js';


class BookDetail extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    _navigateToReadIndex = () => {
        const {navigation} = this.props; 
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('ReadIndex');
    }

    render(){
        const {navigation} = this.props;
        return( 
            <SafeAreaView style={filestyle.container}>
                <ScrollView>
                   
                <View style={searchstyle.container}>
                    <View style={searchstyle.header}>
                        <Image
                            source={require('../../assets/images/logo.png')} // Remplacez par le chemin de votre image
                            style={homestyle.logo2}
                        />
                        <View style={homestyle.headeritemright}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/images/notification.png')} // Remplacez par le chemin de votre image
                                    style={homestyle.notification}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/images/panier.png')} // Remplacez par le chemin de votre image
                                    style={homestyle.panier}
                                />
                            </TouchableOpacity>

                            <View style={homestyle.counter}>
                                <Text style={homestyle.index}>0</Text>
                            </View>

                        </View>
                    </View>
                </View>

               <View style={filestyle.container}>
                <Text style={filestyle.Text}>Ajoutez vos propres fichiers</Text>
               </View>

               <TouchableOpacity>

                    <View style={styles.cadre}>
                        <View style={filestyle.container4}>

                        <View style={filestyle. searchcontainer}> 
                        
                            <Image source={require('../../assets/images/biblio.jpg')} style={filestyle.icons4} />
                            <Text style={filestyle.Title}>Supports</Text> 
                
                            <TouchableOpacity 
                                style={filestyle.readButton}
                                onPress={this._navigateToReadIndex.bind(this)}>
                                    
                                <Text style={filestyle.readButtonText}>Lire</Text>
                            </TouchableOpacity>

                        </View>

                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.cadre}>
                        <View style={filestyle.container4}>
                            
                        <View style={filestyle. searchcontainer}> 
                        
                            <Image source={require('../../assets/images/biblio.jpg')} style={filestyle.icons4} />
                            <Text style={filestyle.Title}>Supports</Text> 
                    
                            <TouchableOpacity 
                                style={filestyle.readButton}
                                onPress={this._navigateToReadIndex.bind(this)}>
                                    
                                <Text style={filestyle.readButtonText}>Lire</Text>
                            </TouchableOpacity>

                        </View>

                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.cadre}>
                        <View style={filestyle.container4}>
                            
                        <View style={filestyle. searchcontainer}> 
                        
                            <Image source={require('../../assets/images/biblio.jpg')} style={filestyle.icons4} />
                            <Text style={filestyle.Title}>Supports</Text> 

                            <TouchableOpacity 
                                style={filestyle.readButton}
                                onPress={this._navigateToReadIndex.bind(this)}>
                                    
                                <Text style={filestyle.readButtonText}>Lire</Text>
                            </TouchableOpacity>

                        </View>

                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.cadre}>
                        <View style={filestyle.container4}>
                          
                        <View style={filestyle. searchcontainer}> 
                        
                            <Image source={require('../../assets/images/biblio.jpg')} style={filestyle.icons4} />
                            <Text style={filestyle.Title}>Supports</Text> 
                        
                            <TouchableOpacity 
                                style={filestyle.readButton}
                                onPress={this._navigateToReadIndex.bind(this)}>
                                    
                                <Text style={filestyle.readButtonText}>Lire</Text>
                            </TouchableOpacity>

                        </View>                          
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.cadre}>
                        <View style={filestyle.container4}>
                            
                        <View style={filestyle. searchcontainer}> 
                        
                            <Image source={require('../../assets/images/biblio.jpg')} style={filestyle.icons4} />
                            <Text style={filestyle.Title}>Supports</Text> 

                            <TouchableOpacity 
                                style={filestyle.readButton}
                                onPress={this._navigateToReadIndex.bind(this)}>
                                    
                                <Text style={filestyle.readButtonText}>Lire</Text>
                            </TouchableOpacity>

                        </View>

                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.cadre}>
                        <View style={filestyle.container4}>
                            
                        <View style={filestyle. searchcontainer}> 
                        
                            <Image source={require('../../assets/images/biblio.jpg')} style={filestyle.icons4} />
                            <Text style={filestyle.Title}>Supports</Text> 
                
                            <TouchableOpacity 
                                style={filestyle.readButton}
                                onPress={this._navigateToReadIndex.bind(this)}>
                                    
                                <Text style={filestyle.readButtonText}>Lire</Text>
                            </TouchableOpacity>

                        </View>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View style={styles.cadre}>
                    <View style={filestyle.container4}>
                        
                    <View style={filestyle. searchcontainer}> 
                        
                        <Image source={require('../../assets/images/biblio.jpg')} style={filestyle.icons4} />
                        <Text style={filestyle.Title}>Supports</Text> 
                
                        <TouchableOpacity 
                            style={filestyle.readButton}
                            onPress={this._navigateToReadIndex.bind(this)}>
                                
                            <Text style={filestyle.readButtonText}>Lire</Text>
                        </TouchableOpacity>

                    </View>
                    </View>
                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                <View style={styles.cadre}>
                    <View style={filestyle.container4}>
                        
                    <View style={filestyle. searchcontainer}> 
                        
                        <Image source={require('../../assets/images/biblio.jpg')} style={filestyle.icons4} />
                        <Text style={filestyle.Title}>Supports</Text> 
                
                        <TouchableOpacity 
                            style={filestyle.readButton}
                            onPress={this._navigateToReadIndex.bind(this)}>
                                
                            <Text style={filestyle.readButtonText}>Lire</Text>
                        </TouchableOpacity>

                    </View>
                    </View>
                </View>
                </TouchableOpacity>


                <TouchableOpacity>
                    <View style={styles.cadre}>
                        <View style={filestyle.container4}>
                            
                        <View style={filestyle. searchcontainer}> 
                            
                            <Image source={require('../../assets/images/biblio.jpg')} style={filestyle.icons4} />
                            <Text style={filestyle.Title}>Supports</Text> 
                    
                            <TouchableOpacity 
                                style={filestyle.readButton}
                                onPress={this._navigateToReadIndex.bind(this)}>
                                    
                                <Text style={filestyle.readButtonText}>Lire</Text>
                            </TouchableOpacity>

                        </View>
                        </View>
                    </View>
                </TouchableOpacity>


                </ScrollView>


                <TouchableOpacity 
                        style={filestyle.btn}
                        onPress={this._openModalTicketCreation}>
                        <Icon name="add-outline" size={30} style={filestyle.icons}/>
                    </TouchableOpacity>


            </SafeAreaView>
        )
    }

                                                                                                                                                                  
} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(BookDetail);