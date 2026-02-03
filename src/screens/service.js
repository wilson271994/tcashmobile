import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { SafeAreaView, Platform, Text } from 'react-native';
import { styles } from '../assets/styles/index.js';
import {ServiceListAction} from '../reducers/actions/index.js';
import ServiceIndex from '../components/Service/ServiceIndex.js';

class Service extends PureComponent {
    constructor(props){
        super(props); 
        state = {}
    };

    componentDidMount(){
        this._fechtData();  
    } 

    _fechtData = async () => {
        const {user_token} = this.props; 
        ServiceListAction(user_token);
    }  
 
    render(){
        const {navigation} = this.props; 
        return(
            <ServiceIndex 
                navigation={navigation} 
            />
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            ServiceListAction
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        user_infos  : state.auth.user_infos,
        user_token  : state.auth.user_token
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Service);