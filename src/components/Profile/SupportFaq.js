import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Text, TouchableOpacity, View, Image, FlatList, ActivityIndicator, RefreshControl, ImageBackground } from 'react-native';
import { styles } from '../../assets/styles';
import { supportstyle } from '../../assets/styles/support';
import { FaqListAction } from '../../reducers/actions';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import HTMLView from 'react-native-htmlview';

class SupportFaq extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            refreshing          : false,
            visibleFaqContent   : false,
            selectedItem        : ''
        }
    };

    componentDidMount(){
        this._fechtData();
    }

    _fechtData = () => {
        const {user_token} = this.props;
        FaqListAction(user_token);
    }

    _onRefresh = async () => { 
        this.setState({refreshing:true}) 
        this._fechtData().then(() => {this.setState({refreshing:false})})
    }

    _backToHome = () => {
        const {root_navigation} = this.props;
        root_navigation.goBack();
    }

    _toggleContentFaq = (data) => {
        const {visibleFaqContent} = this.state;
        this.setState({
            visibleFaqContent   : !visibleFaqContent,
            selectedItem        : data
        });
    }

    _renderItem = (item) => {
        const {visibleFaqContent, selectedItem} = this.state;
        return (
            <View style={supportstyle.faqItemcard}>
                <View style={supportstyle.faqItem}>
                    <View style={supportstyle.fapitemtext}>
                        <Text style={supportstyle.faqquestiontext}>{item.subject}</Text>
                        <Text style={supportstyle.conversationTime}>{item.label}</Text>
                    </View>
                    <View style={supportstyle.faqbtncontainer}>
                        <TouchableOpacity onPress={this._toggleContentFaq.bind(this, item)}
                            style={supportstyle.faqbtn}>
                            
                            {
                                visibleFaqContent && selectedItem.id === item.id ? 
                                    <FontAwesome5Icon name='angle-up' style={supportstyle.faqbtnicon} />
                                :
                                    <FontAwesome5Icon name='angle-down' style={supportstyle.faqbtnicon} />
                            }
                                
                        </TouchableOpacity>
                    </View>
                </View>

                {
                    visibleFaqContent && selectedItem.id === item.id ? 
                        <View style={supportstyle.containerdetailfaq}>
                            <Text style={[styles.textBold, supportstyle.titledetailfaq]}>{item.title}</Text>
                            <HTMLView 
                                value={item.content}
                            />
                        </View>
                    :null
                }
            </View>
        )
    }

    _renderEmpty = () => {
        return (
            <View style={supportstyle.emptycard}>
                <Text style={[styles.text]}>Aucune donnée pour l'instant.</Text>
            </View>
        )
    }

    _renderFooter = () => {
        const {is_loading} = this.props;
        if (!is_loading) return null;
        return (
            <View style={supportstyle.footerlist}> 
                <ActivityIndicator size="small" />
            </View>
        );
    };

    render(){
        const {is_loading, faq_list} = this.props;
        const {refreshing} = this.state;
        return( 
            <View style={supportstyle.container}>
                <ImageBackground 
                    source={require('../../assets/images/background.jpg')} 
                    style={styles.backgroundapp}
                    resizeMode="cover"
                >
                    <View style={supportstyle.headefaq}>
                            <TouchableOpacity 
                                onPress={this._backToHome}
                                style={supportstyle.backbtn}>
                                <Image source={require('../../assets/images/back.png')} style={supportstyle.backicon} />
                            </TouchableOpacity>
                        <Text style={[styles.textBold, supportstyle.headerTitle]}>Questions fréquentes</Text>
                    </View>
                    <View>
                        <FlatList 
                            data={faq_list}
                            renderItem={({item, index}) => this._renderItem(item, index)}
                            keyExtractor={(items, index) => index.toString()}
                            refreshControl={ 
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={this._onRefresh}
                                    colors={['#6aa7d7', '#ffa200']}
                                />
                            }
                            ListFooterComponent={this._renderFooter}
                            ListEmptyComponent={this._renderEmpty}
                        />
                    </View>
                </ImageBackground>
            </View>
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
        root_navigation     : state.navigation.root_navigation,
        is_loading          : state.loader.is_loading,
        user_token          : state.auth.user_token,
        faq_list            : state.list.faq_list
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(SupportFaq);