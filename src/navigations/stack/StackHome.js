// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators, isPlainObject } from 'redux';
import { connect } from 'react-redux';
import { store } from "../../reducers/store";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text, ActivityIndicator, Image, View } from "react-native";
import { styles } from "../../assets/styles/index";
import IconFA from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from "../../screens/Home";
import { switchHeaderAction } from "../../reducers/actions";
import TransactionDetail from "../../components/Transaction/TransactionDetail";
import BankIndex from "../../components/Transaction/BankIndex";
import MomoIndex from "../../components/Transaction/MomoIndex";
import Deposit from "../../components/Transaction/Deposit";
import Withdraw from "../../components/Transaction/Withdraw";
import Transfer from "../../components/Transaction/Transfer";
const Stack = createStackNavigator();

class StackHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    _backHome = () => {
        const { root_navigation } = this.props;
        switchHeaderAction(true);
        root_navigation.goBack();

    }

    _filterSearch = (text) => {

    }

    ToggleSearchBar = () => {
        const { navigation } = this.props;
        console.log('yesssssssssssss')
    }

    _backToMenu = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        const { page_title, is_loading, user_basket, chat_info } = this.props;
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name=" "
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="TransactionDetail"
                    component={TransactionDetail}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Deposit"
                    component={Deposit}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Transfer"
                    component={Transfer}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Withdraw"
                    component={Withdraw}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Bank"
                    component={BankIndex}
                    options={{
                        headerShown: false,
                    }}
                />


                <Stack.Screen
                    name="Momo"
                    component={MomoIndex}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>




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
        page_title: state.navigation.page_title,

        is_loading: state.loader.is_loading,
        root_navigation: state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(StackHome);