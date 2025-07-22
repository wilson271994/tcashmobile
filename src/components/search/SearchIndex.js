import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, TextInput, StyleSheet, Modal, Platform, SafeAreaView, Button, ActivityIndicator, ImageBackground, FlatList, ScrollView, Linking, TouchableHighlight, Slider} from 'react-native';
import  {homestyle}  from '../../assets/styles/home.js';
import Moment from 'moment';
import 'moment/locale/fr';
import { store } from '../../reducers/store';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {switchHeaderAction} from '../../reducers/actions/index.js';
import {searchstyle} from '../../assets/styles/search.js';


class SearchIndex extends PureComponent {
    constructor(props){
        super(props); 
        this.state = {
            is_loading:false,
            searchText : 
            '',
        };

    };

    handleChangeText = (text) => {
        this.setState({ searchText: text });
    };

    componentDidMount(){
        this._fechtData();
    } 

    
    _navigateToSearchFilter = () => {
        const {navigation} = this.props; 
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('SearchFilter');
    }

    _navigateToReadIndex = () => {
        const {navigation} = this.props; 
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('ReadIndex');
    }

    _closeAlert = () => {
        this.setState({
            is_alert:false,
            is_loading:false
        });
        store.dispatch({type:IS_AUTH_ERROR, value:false});
    }

    _fechtData = async () => {
        await switchHeaderAction(true);  
    } 
 
  render(){
    const {is_alert, alert_title, alert_subtitle, is_loading} = this.state;
      const {navigation} = this.props; 
      return(
        <SafeAreaView style={searchstyle.container2}>
            <View style={searchstyle.container}>

                <View style={searchstyle.header}>
                    <View style={searchstyle.headeritemleft}>
                        <Image
                            source={require('../../assets/images/logo.png')} // Remplacez par le chemin de votre image
                            style={homestyle.logo2}
                        />
                    </View>

                    <View style={[searchstyle.searchcontainer, searchstyle.headeritemmidle]}>
                        <View style={searchstyle.inputSearch}>
                            <TextInput
                                style={searchstyle.SearchBar}
                                placeholderTextColor='#fff'
                                onChangeText={this.handleChangeText}
                                value={this.state.searchText}
                                placeholder='Recherche...'
                            />
                            <Icon name='search' style={searchstyle.searchIcons} />
                        </View>
                        <View style={searchstyle.btnfiltersearch}>
                            <TouchableOpacity
                                    onPress={this._navigateToSearchFilter.bind(this)}

                                    style={searchstyle.filter}>
                                <Image
                                    source={require('../../assets/images/filter.jpg')} // Remplacez par le chemin de votre image
                                    style={searchstyle.btnfiltericon}
                                />
                             </TouchableOpacity>
                    </View>
                </View>
                
                    <View style={searchstyle.headeritemright}>
                        <TouchableOpacity>
                                <Image
                                    source={require('../../assets/images/notification.png')} // Remplacez par le chemin de votre image
                                    style={homestyle.notification}
                                />
                        
                        </TouchableOpacity>

                       
                        <TouchableOpacity>
                                 <Image
                                    source={require('../../assets/images/panier.png')} // Remplacez par le chemin de votre image
                                    style={homestyle.panier1}
                                /> 
                            </TouchableOpacity>

                            <View style={homestyle.counter1}>
                                <Text style={homestyle.index}>0</Text>
                            </View>
                            
                    </View>

                </View>
            </View>

            <ScrollView horizontal>
                <View style={{ flexDirection: 'row', padding:10,width:'100%' }}>
                            
                    <TouchableOpacity style={searchstyle.propositions}>
                        <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>Tous</Text>              
                        </View>
                    </TouchableOpacity>
                          
                    <TouchableOpacity style={searchstyle.propositions}>
                         <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>Sciences</Text>              
                        </View>
                    </TouchableOpacity>
                          
                    <TouchableOpacity style={searchstyle.propositions}>
                        <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>Chemistry</Text>              
                        </View>
                    </TouchableOpacity>
                          
                    <TouchableOpacity style={searchstyle.propositions}>
                        <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>History</Text>              
                        </View>
                    </TouchableOpacity>
                          
                    <TouchableOpacity style={searchstyle.propositions}>
                        <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>50% </Text>              
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={searchstyle.propositions}>
                        <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>50%</Text>              
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={searchstyle.propositions}>
                        <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>50%</Text>              
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={searchstyle.propositions}>
                        <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>50%</Text>              
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={searchstyle.propositions}>
                        <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>50%</Text>              
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={searchstyle.propositions}>
                        <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>50%</Text>              
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={searchstyle.propositions}>
                        <View style={searchstyle.choice}>
                            <Text style={searchstyle.choiceText}>50%</Text>              
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView> 
            <ScrollView contentContainerStyle={searchstyle.scrollContainer}>
                <View style={searchstyle.bookContainer}>
                    <View style={homestyle.bookList}>
                        {Array(50).fill(0).map((_, index) => (
                                
                            <TouchableOpacity key={index} style={homestyle.bookItem}>
                                <Icon name="book-outline" size={40} color="#000" />
                                <View style={homestyle.bookDetails}>
                                    <Text style={homestyle.bookTitle}>L'art de la cuisine...</Text>
                                    <Text style={homestyle.bookDescription}>Apprendre à cuisiner...</Text>
                                </View>
                                <TouchableOpacity
                                    style={homestyle.readButton}
                                    onPress={this._navigateToReadIndex.bind(this)}> 

                                    <Text style={homestyle.readButtonText}>Lire</Text>
                                </TouchableOpacity>

                                <View style={homestyle.icons}>
                                <TouchableOpacity onPress={() => setCount(count + 1)}>
                                    <Icon name="thumbs-up-outline" size={18} color="#000" />
                                    </TouchableOpacity>
                                    <Icon name="heart-outline" size={18} color="#000" />
                                    <Icon name="share-social" size={18} color="#000" />                                  
                                </View>
                                    
                            </TouchableOpacity>
                                
                                ))}
                            
                            </View>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps, null)(SearchIndex);