import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { SafeAreaView, Platform, Text } from 'react-native';
import { styles } from '../assets/styles/index.js';
import {checkAuthDataAction, switchHeaderAction} from '../reducers/actions';
import HomeIndex from '../components/Home/HomeIndex.js';

class Home extends PureComponent {
    constructor(props){
        super(props); 
        state = {}
    };

    componentDidMount(){
        this._fechtData();
    } 

    _fechtData = async () => {
        await switchHeaderAction(true);  
        await checkAuthDataAction();
    } 

    render(){
        const {navigation} = this.props; 
        return(
            <SafeAreaView style={styles.container}>
                <HomeIndex 
                    navigation={navigation} 
                /> 
            </SafeAreaView>
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            switchHeaderAction,
            checkAuthDataAction
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Home);