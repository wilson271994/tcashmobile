import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from '../../assets/styles';
import 'moment/locale/fr';
import Swiper from 'react-native-swiper'
import { servicestyle } from '../../assets/styles/service';
import { favorit_book_list } from '../../assets/utils/data';

class ServiceBanner extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render(){
        const {is_loading} = this.props;
        return( 
            <View style={[servicestyle.container]}>
                {
                    favorit_book_list.length > 0 ?
                        <Swiper 
                            style={servicestyle.containerbanner}
                            showsButtons={false}
                            autoplay={true}
                            autoplayTimeout={5}
                            scrollEnabled
                            dot={false}
                            containerStyle={servicestyle.swiperstyle}>
                                {
                                    favorit_book_list ?
                                        favorit_book_list.map((item, i) => 
                                            <View style={servicestyle.containerbanner} key={i}>
                                                <ImageBackground
                                                    key={i}
                                                    source={item.cover}
                                                    style={servicestyle.backgroundimagebanner}
                                                />
                                                <Text numberOfLines={1} style={[servicestyle.bookname, styles.textBold]}>{item.name}</Text>
                                                <View style={servicestyle.catcontain}>
                                                    <Text style={[servicestyle.categoryproductproduct, styles.textBold]}>Management</Text>
                                                </View>
                                            </View>
                                    )
                                    :null
                                }
                        </Swiper>
                    :null
                }

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ServiceBanner);