// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View } from "react-native";
import Profil from "../screens/Profil";
import UpdateProfil from "../components/Profile/Forms/UpdateProfil";
import UpdateKYC from "../components/Profile/Forms/UpdateKYC";
import UpdateNotify from "../components/Profile/Forms/UpdateNotify";
import SupportFaq from "../components/Profile/SupportFaq";

class AuthNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        } 
    }

    render() {
        const { 
            is_profil_home,
            is_profil_update_info,
            is_profil_update_kyc,
            is_profil_update_notif,
            is_profil_faq, 
            is_profil_referal
        } = this.props;
        return (
            <View style={{ flex:1 }}>
                {
                    is_profil_home ?
                        <Profil />
                    :null
                }
                {
                    is_profil_update_info ?
                        <UpdateProfil />
                    :null
                }
                {
                    is_profil_update_kyc ? 
                        <UpdateKYC />
                    :null
                }
                {
                    is_profil_update_notif ?
                        <UpdateNotify />
                    :null
                }
                {
                    is_profil_faq ?
                        <SupportFaq />
                    :null
                }
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_profil_home          : state.navigation.is_profil_home,
        is_profil_update_info   : state.navigation.is_profil_update_info,
        is_profil_update_notif  : state.navigation.is_profil_update_notif,
        is_profil_update_kyc    : state.navigation.is_profil_update_kyc,
        is_profil_faq           : state.navigation.is_profil_faq,
        is_profil_referal       : state.navigation.is_profil_referal
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AuthNavigation);