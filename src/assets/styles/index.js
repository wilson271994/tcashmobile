import {StyleSheet, Dimensions} from 'react-native';
import { SearchBar } from 'react-native-elements';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
      
        backgroundColor: '#F5F5F5',
    },

    // debut

  
    backText:{
        position: 'absolute',
        left: 150,
        top: 17
    },
    text:{
        fontFamily:'BaarSophia',
        
    },
    textHeader:{
        fontWeight: 'bold',
        fontSize: 38,
        top: -10,
        right: 50
    },
    textItalic:{
        fontFamily:'BaarSophiaItalic',
    }, 
    textItalicBold:{
        fontFamily:'BaarSophiaBolditalic',
    },
    toasttitle1:{
        fontSize:25
    },
    logo:{
        width:165,
    },
    logologin:{
        width:'100%',
        height:100
    },
    bodyflatlist:{
        marginTop:10
    },
    imagecarousel:{
        height:130,
        width:200,
        marginLeft:10,
        marginRight:10
    },
    flatlistbox:{
        marginTop:10,
    },
    boximage:{
        borderRadius:10,
    },
    titleflalist:{
        fontSize:20,
        color:'#000',
        marginTop:10,
        marginBottom:10
    },
    containeritemflat:{
        marginLeft:10,
        marginTop:10,
        marginBottom:10,
        width:190
    },
    itemtitleflatlist:{
        fontSize:18,
        color:'#000',
    },
    category:{
        fontSize:17,
        color:'#666',
        marginTop:10
    },
    countryhour:{
        fontSize:16,
        color:'#666',
    },
    labelitem:{
        fontSize:16,
        color:'#666',
        marginTop:5
    },
    dotseparator:{
        fontSize:30,
        color:'#666',
    },
    backgroundVideo:{
        height:130,
        width:200,
    },
    playbtn:{
        position:'absolute',
        top:50,
        left:95
    },
    iconplaybtn:{
        fontSize:40,
        color:'#fff'
    },
    playbtnpod:{
        position:'absolute',
        top:-10,
        right:20,
    },
    iconplaybtnpod:{
        fontSize:30,
        color:'#fff'
    },
    playbtndetail:{
        position:'absolute',
        top:80,
        left:'43%'
    },
    iconplaybtndetail:{
        fontSize:70,
        color:'#fff'
    },
    modalVideoContainer:{
        backgroundColor:'#000',
        height:200,
        margin:20,
        top:250,
        borderRadius:10
    },
    backgroundModalVideo:{
        height:200,
        width:'100%',
        borderRadius:10,
        position:'absolute' 
    },
    iconclosemodal:{
        fontSize:25,
        color:'#fff'
    },
    buttonModalClose:{
        position:'absolute',
        top:5,
        right:5,
        zIndex:999
    },
    iconcloseaudiomodal:{
        fontSize:25,
        color:'#000'
    },
    buttonModalAudioClose:{
        position:'absolute',
        top:25,
        right:25,
        zIndex:999
    },
    card:{
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.6,
        backgroundColor:"#fff",
        elevation: 8
    },
    modalAudioContainer:{
        backgroundColor:'#fff',
        height: 80,
        margin:20,
        top:'85%',
        borderRadius:50,
    },
    playaudiobtn:{
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },
    iconplayaudiobtn:{
        fontSize:50,
        color:'#000'
    },
    logocoveraudio:{
        height:50,
        width:50,
        borderRadius:10,
        position:'absolute',
        right:10,
        top:-20,
    },
    boxpodcastflatlist:{
        height:'auto',
        width:200,
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
        marginTop:20,
        paddingBottom:10

    },
    titlepodcastflatlist:{
        marginTop:20
    },
    boxaudioplayer:{
        flexDirection:'row'
    },
    coveraudioplayer:{
        height:50,
        width:50,
        borderRadius:100,
        margin:10
    },
    marqueeaudiotitle:{
        width:100
    },
    marqueetext:{
        fontSize:20,
        marginTop:20
    },
    bodyrecom:{
        flexDirection:'row',
        height:300,
        marginTop:10,
        marginBottom:20
    },
    box1pub:{
        width:'48%',
        borderRadius:10,
        marginRight:10
    },
    box2pub:{
        marginTop:-20,
        height:150,
        marginBottom:20,
        borderRadius:10
    },
    imagepub1:{
        width:'100%',
        height:200,
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    imagepub2:{
        width:'100%',
        borderRadius:5,
        height:150,
    },
    titlepub1:{
        marginTop:215,
        marginLeft:10,
        fontSize:20,
        color:'#000'
    },
    titlepub2:{
        fontSize:18,
        padding:10, 
        color:'#fff',
        marginTop:100
    },
    cardpub2:{
        height:160,
        borderRadius:10
    },
    angleleft:{
        fontSize:25,
        color:'#000',
    },
    btnbackscreen:{
        position:"absolute",
        left:5,
        padding:10,
        borderRadius:100,
        width:45
    },
    btnpublish:{
        backgroundColor:'#778CDF',
        padding:10,
        marginRight:10,
        borderRadius:5,
        width:70
    },
    btnpublishtext:{
        color:'#fff',
        fontSize:14
    },
    titleliveplayer:{
        fontSize:20,
        color:'#000',
        marginLeft:50
    },
    titledetail:{
        fontSize:16,
        color:'#000',
        marginLeft:50,
        width:300,
        height:60,
        paddingTop:20
    },
    titlepage:{
        fontSize:18,
        color:'#000',
        marginLeft:50,
        height:60,
        paddingTop:20
    },

    /**Banner CSS */
    imagebanner :{
        height:200, 
    }, 
    bulletActivestyle:{
        backgroundColor:'#2f2574'
    },
    titlebanner :{
        fontSize:30,
        color:'#fff',
        top:100,
        left:10
    },

    //Mange Footer Feed
    feedbloc:{
        flexDirection:'row',
        padding:5,
        marginLeft:-2,
        marginRight:5,
        marginTop:5,
    },
    itemfeedicon:{
        fontSize:18,
        color:'#999' 
    },
    itemfeed:{
        paddingRight:15,
        flexDirection:'column'
    },
    badgefeed:{
        fontSize:18,
    },

    //manage Style alert
    stylebtnconfirm:{
        backgroundColor:'#2f2574',
        marginLeft:10,
        fontFamily:'Riegraf-Bold', 
    },
    styletextbtn:{
        color:'#fff',
        fontFamily:'Riegraf-Regular', 
        fontSize:16
    },
    styletitle:{
        color:'#666',
        fontSize:18,
        textAlign:'center',
        fontFamily:'Riegraf-Bold',
    },
    styledescription:{
        fontFamily:'Riegraf-Regular', 
        fontSize:16,
        textAlign:'center' 
    },
    pagetitle:{
        marginLeft:20
    },
    titlealert:{
        color:'#000',
        textAlign:'center'
    },
    descriptionalert:{
        color:'#000'
    },
    importlabel:{
        color:'red'
    },

    //HomePage
    

    //menu
    swipablepanelbarstyle:{
        height:50,
        backgroundColor:'#1F497D'
    },
    swipablepanelcloseicon:{
        backgroundColor:'#1F497D',
    },
    iconmenu1:{
        width:30,
        height:30
    },
    iconmenu2:{
        width:30,
        height:30,

    },

    //Style Principal Menu
    iconmenup:{
        width:30,
        height:30
    },
    backbtn:{
        width:40,
        height:40
    },

});