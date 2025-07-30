import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { TouchableOpacity, View, Modal, Text, TextInput, ImageBackground , Button} from 'react-native';
import { styles } from '../../../assets/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview';
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { supportstyle } from '../../../assets/styles/support';

const dataconfid = [
    {label:'Commercial', value:1},
    {label:'Technique', value:2}
] 

const datacat = [
    {value:'2', label:'Cars and Vehicles'},
    {value:'3', label:'Comedy'},
    {value:'4', label:'Economics and Trade'},
    {value:'5', label:'Education'},
    {value:'6', label:'Entertainment'},
    {value:'7', label:'Movies & Animation'},
    {value:'8', label:'Gaming'},
    {value:'9', label:'History and Facts'},
    {value:'10', label:'Live Style'},
    {value:'11', label:'Natural'},
    {value:'12', label:'News and Politics'},
    {value:'13', label:'People and Nations'},
    {value:'14', label:'Pets and Animals'},
    {value:'15', label:'Places and Regions'},
    {value:'16', label:'Science and Technology'},
    {value:'17', label:'Sport'},
    {value:'18', label:'Travel and Events'},
    {value:'1', label:'Other'}
]

class CreateJob extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            groupcoverValue:{},
            groupnameValue:'',
            grouplinkValue:'',
            groupdescriptionValue:'',
            confidValue:1,
            confidLabel:'Public',
            isFocusConfid:false,
            catValue:2,
            catLabel:'Cars and Vehicles',
            isFocusCat:false,
            is_alert:false,
            alert_title:'',
            alert_subtitle:'',
        }
    };

    state = {
        selectedImage: null,
      };

      chooseImage = () => {
        const options = {
          title: 'Sélectionner une image',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
      
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
      
              this.setState({
                selectedImage: source,
              });
            }
          });
        };

    componentDidMount(){}

    _openPickupImage = () => {
        MultipleImagePicker.openPicker({
            mediaType:'image',
            singleSelectedMode:true
        })
        .then((data) => {
            let image = {
                'name':data.fileName,
                'uri': 'file://' + data.realPath,
                'type':data.mime,
                'info_file':data.type
            }
            this.setState({coverPubValue:image});
        })
        .catch((error) => {
            console.log(error)
        })
    }

    _handleFocusConfid = () => {
        const {isFocusConfid} = this.state;
        this.setState({isFocusConfid:!isFocusConfid});
    }

    _handleConfid = (item) => {
        this.setState({
            confidValue:item.value,
            confidLabel:item.label
        })
    }

    _handleFocusCat = () => {
        const  {isFocusCat} = this.state;
        this.setState({isFocusCat:!isFocusCat});
    }

    _handleCat = (item) => {
        this.setState({
            catValue:item.value,
            catLabel:item.label
        })
    }

    _handleNameGroup = (value) => {
        const {groupnameValue} = this.state;
        this.setState({
            grouplinkValue:groupnameValue.split(' ').join(''),
            groupnameValue:value
        })
    }

    _createGroup = () => {
        const {groupdescriptionValue, grouplinkValue, groupnameValue, catValue, confidValue} = this.state;
        const {_handleModalClose} = this.props;
        if(grouplinkValue && groupnameValue && catValue && confidValue && groupdescriptionValue){
            const data = {
                group_name:grouplinkValue,
                group_title:groupnameValue,
                about:groupdescriptionValue,
                category:catValue,
                privacy:confidValue
            } 
        }else{
            this.setState({
                is_alert:true,
                alert_title:'Formulaire non valide!',
                alert_subtitle:'Veuillez remplir tous les champs'
            })
        }
        _handleModalClose();
    }

    _handleCloseAlert = () => {
        this.setState({is_alert:false});
    }

    render(){
        const {
            _closeModalTicketCreation,
            isVisibleTckCrModal
        } = this.props;
        const {
            groupcoverValue,
            isFocusCat,
            isFocusConfid,
            confidLabel,
            confidValue,
            catValue,
            catLabel,
            is_alert,
            alert_title,
            alert_subtitle,
            grouplinkValue,
            groupnameValue,
            groupdescriptionValue
        } = this.state;
        return( 
            <Modal
                    animationType='none'
                    transparent
                    visible={isVisibleTckCrModal}
                    onRequestClose={_closeModalTicketCreation}
                >
                <ScrollView style={supportstyle.modalContainer}>
                    <View >
                        <View >
                            <Text style={supportstyle.entetelogin1}>
                                Nouveau Ticket
                            </Text>
                        </View>
                        <TouchableOpacity 
                            onPress={_closeModalTicketCreation}
                            >
                            <AntDesign name='closecircle'  />
                        </TouchableOpacity>
                    </View>

                    <View style={supportstyle.loginbox}>
                        <View>
                            <Text style={supportstyle.entetelogin}>TItre du problème</Text>
                            <TextInput
                                style={supportstyle.inputtextlogin}
                                placeholder={ 'Nom du groupe...'}
                                onChangeText={(value) => this._handleNameGroup(value)}
                            />
                        </View>

                        <View>
                            <Text style={supportstyle.entetelogin}>Desscrtiption</Text>
                            <TextInput
                                style={supportstyle.inputtextlogin}
                                placeholder={ 'Décrire votre problème...'}
                                onChangeText={(value) => this._handleNameGroup(value)}
                            />
                        </View>

                        <View >
                            <Text style={supportstyle.entetelogin}>Service </Text>
                            <Dropdown
                                dropdownPosition='auto'
                                data={dataconfid}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocusConfid ? 'Selectionner...' : '...'}
                                style={supportstyle.select}
                                value={confidValue}
                                onFocus={() => this._handleFocusConfid(true)}
                                onBlur={() => this._handleFocusConfid(false)}
                                onChange={item => this._handleConfid(item)}
                                renderLeftIcon={() => (
                                    <FontAwesome5
                                        color={isFocusConfid ? 'blue' : 'black'}
                                        name="user-shield"
                                        size={20}
                                    />
                                )}
                            />
                        </View>
                        <View style={supportstyle.image}>
                            {this.state.selectedImage && <Image source={this.state.selectedImage} style={{ width: 200, height: 200 }} />}
                            <Button title="Associer une image" onPress={this.chooseImage}  />
                        </View>
                    </View>
              
              <View style={supportstyle.footerlogin}> 
                    <TouchableOpacity 
                        style={supportstyle.btn}
                        >
                        <Text style={supportstyle.textbtnsubmit}>
                            
                            Envoyer
                            
                        </Text>
                        <MaterialCommunityIcons size={25}  color='#ECB818' name='send' style={supportstyle.icon} />
                    </TouchableOpacity>
                </View>
                <AwesomeAlert
                    show={is_alert}
                    title={alert_title}
                    titleStyle={[styles.textBold, styles.titlealert]}
                    message={alert_subtitle}
                    messageStyle={[styles.text, styles.descriptionalert]}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="Ok"
                    confirmButtonStyle={[styles.text, styles.btnalert]}
                    confirmButtonColor="#060064"
                    onConfirmPressed={this._handleCloseAlert}
                />
                </ScrollView>
            </Modal>

        )
    }


} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(CreateJob);