// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators, isPlainObject } from 'redux';
import { connect } from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import TransactionDetail from "../../components/Transaction/TransactionDetail";
import BankIndex from "../../components/Transaction/BankIndex";
import MomoIndex from "../../components/Transaction/MomoIndex";
import Deposit from "../../components/Transaction/Deposit";
import Withdraw from "../../components/Transaction/Withdraw";
import Transfer from "../../components/Transaction/Transfer";
import NotificationIndex from "../../components/Home/NotificationIndex";
import Support from "../../components/Profile/Support";
import SupportChat from "../../components/Profile/SupportChat";

const Stack = createStackNavigator();
class StackHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { navigation } = this.props;
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

                <Stack.Screen
                    name="Notification"
                    component={NotificationIndex}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Support"
                    component={Support}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="SupportChat"
                    component={SupportChat}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(StackHome);