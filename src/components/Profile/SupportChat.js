import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View } from 'react-native';
import { styles } from '../../assets/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import { store } from '../../reducers/store';
import Moment from 'moment';
import { Picker } from '@react-native-picker/picker'; // Pour lesupportchatstyles listes déroulantes
import 'moment/locale/fr';
import Swiper from 'react-native-swiper'
import cover from '../../assets/images/biblio.jpg';
import { supportchatstyle } from '../../assets/styles/supportchat';


class SupportChat extends PureComponent {

    constructor(props){
        super(props); 
        this.state = {
            is_loading:false,
            searchText : 
            '',
        };

    };

    render(){
        const {is_loading} = this.props;
        return( 
            <SafeAreaView style={supportchatstyle.container}>
                <View style={[supportchatstyle.container2]}>
                    <ScrollView contentContainerStyle={supportchatstyle.scrollContainer}>

                        

                        <View style={styles.cadre}>
                            <View style={supportchatstyle.container3}>
                                <TouchableOpacity>
                                    <Text style={supportchatstyle.Text1}>ghfhr</Text>
                               </TouchableOpacity>
                            </View>
                        </View>

                     
                            
                    </ScrollView> 

                     <View></View>
                    <View style={supportchatstyle.inputSearch}>
                        <TextInput
                            style={supportchatstyle.SearchBar}
                            placeholderTextColor='#fff'
                            value={this.state.searchText}
                            placeholder='Message'   
                            
                            
                            autoCapitalize="none" 
                            autoCorrect={false}
                            onChangeText={(val) => {this.setState({handleChangeText:val})}}
                            editable={is_loading ? false : true}

                       />


                        <TouchableOpacity   style={supportchatstyle.btnsubmit1} >
                            <Icon name='image' size={20}  color="#000" style={supportchatstyle.image} />
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity 
                                disabled={is_loading ? true : false}
                                style={supportchatstyle.btnsubmit} 
                                onPress={this._authSignin}>
                            {
                                is_loading ?
                                    <View style={supportchatstyle.loaderbtn}>
                                        <ActivityIndicator size="small" color="#fff" />
                                    </View>
                                :
                            <Icon name='send' size={20}  color="#1B497D" style={supportchatstyle.icons} />
                            }
                            </TouchableOpacity>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps, null)(SupportChat);