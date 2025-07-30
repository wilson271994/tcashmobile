import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View } from 'react-native';
import { styles } from '../../assets/styles';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import { store } from '../../reducers/store';
import Moment from 'moment';
import { Picker } from '@react-native-picker/picker'; // Pour les listes déroulantes
import 'moment/locale/fr';
import cover from '../../assets/images/biblio.jpg';
import { servicestyle } from '../../assets/styles/service';
import { filterstyle } from '../../assets/styles/filter';
import { Icon } from 'react-native-elements';

class SearchFilter extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render(){
        const {is_loading} = this.props;
        return( 
            <SafeAreaView style={servicestyle.container}>
                <View style={[filterstyle.container2]}>
                    <ScrollView contentContainerStyle={filterstyle.scrollContainer}>

                
                        <View style={styles.cadre}>

                                {/* Groupe de filtres: Âge limite */}

                                <Text style={filterstyle.Text}>Âge limite</Text>
                            <View style={filterstyle.container}>
                                <Picker
                                    selectedValue={this.state.ageLimit}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ ageLimit: itemValue })
                                    }
                                    style={filterstyle.picker}
                                    >
                                    <Picker.Item label="-5" value="-5" />                            
                                    <Picker.Item label="5" value="5" />
                                    <Picker.Item label="6" value="6" />
                                    <Picker.Item label="7" value="7" />
                                    <Picker.Item label="8" value="8" />
                                    <Picker.Item label="9" value="9" />
                                    <Picker.Item label="10" value="10" />
                                    <Picker.Item label="11" value="11" />
                                    <Picker.Item label="12" value="12" />
                                    <Picker.Item label="12+" value="12+" />

                                {/* ... autres options */}

                                </Picker>
                            </View>

                                {/* Groupe de filtres: Durée audio */}

                                <Text style={filterstyle.Text}>Durée audio</Text>
                            <View style={filterstyle.container}>   
                                <Picker
                                    selectedValue={this.state.duration}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ duration: itemValue })
                                    }
                                    style={filterstyle.picker}
                                    >
                                    <Picker.Item label="10 min" value="10 min" />
                                    <Picker.Item label="15 min" value="15 min" />
                                    <Picker.Item label="16-42 min" value="16-42 min" />
                                    <Picker.Item label="43-59 min" value="43-59 min" />
                                    <Picker.Item label="1 heure" value="1 heure" />
                                    <Picker.Item label="1 heure + " value="1 heure +" />

                                    
                                    {/* ... autres options */}

                                </Picker>
                            </View>



                            <Text style={filterstyle.Text}>Language</Text>
                            <View style={filterstyle.container}>
                                <Picker
                                    selectedValue={this.state.ageLimit}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ ageLimit: itemValue })
                                    }
                                    style={filterstyle.picker}
                                    >
                                    <Picker.Item label="Arabe" value="Arabe" />
                                    <Picker.Item label="Bahasa" value="Bahasa" />
                                    <Picker.Item label="Deutsh" value="Deutsh" />
                                    <Picker.Item label="English" value="English" />  
                                    <Picker.Item label="Espagnol" value="Espagnol" />                          
                                    <Picker.Item label="Français" value="French" />
                                    <Picker.Item label="Japonais" value="Japanesse" />
                                    <Picker.Item label="Portugais" value="Portugess" />
                                                                      
                                {/* ... autres options */}

                                </Picker>
                            </View>




                            <Text style={filterstyle.Text}>Catégorie</Text>
                            <View style={filterstyle.container}>
                                <Picker
                                    selectedValue={this.state.ageLimit}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ ageLimit: itemValue })
                                    }
                                    style={filterstyle.picker}
                                    >
                                    <Picker.Item label="Payant" value="Payant" />                            
                                    <Picker.Item label="Gratuit" value="Gratuit" />
                                    <Picker.Item label="Tout" value="Tout" />
                                    
                                {/* ... autres options */}

                                </Picker>
                            </View>




                            <Text style={filterstyle.Text}>Tranche de prix</Text>
                            <View style={filterstyle.container}>
                                <Picker
                                    selectedValue={this.state.ageLimit}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ ageLimit: itemValue })
                                    }
                                    style={filterstyle.picker}
                                    >
                                    <Picker.Item label="500 XAF" value="500" />                            
                                    <Picker.Item label="1000 XAF" value="1000" />
                                    <Picker.Item label="1000-1500 XAF" value="1000-1500" />
                                    <Picker.Item label="1500-2000 XAF" value="1500-2000" />
                                    <Picker.Item label="2000-3000 XAF" value="2000-3000" />
                                    <Picker.Item label="3000 XAF +" value="3000+" />
                                  
                                {/* ... autres options */}

                                </Picker>
                            </View>

                        </View>
                            {/* ... (autres groupes de filtres) */}

                        
                            <View style={filterstyle.footerlogin}>
                            <TouchableOpacity 
                                disabled={is_loading ? true : false}
                                style={filterstyle.btnsubmit} 
                                onPress={this._authSignin}>
                            {
                                is_loading ?
                                    <View style={filterstyle.loaderbtn}>
                                        <ActivityIndicator size="small" color="#fff" />
                                    </View>
                                :
                                    <Icon name='add'/>
                            }
                            </TouchableOpacity>
                        </View>
                    </ScrollView> 
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

export default connect(mapStateToProps, mapDispatchToProps, null)(SearchFilter);