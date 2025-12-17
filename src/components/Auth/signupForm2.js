import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, Image, TextInput, Modal, TouchableOpacity, ActivityIndicator, ImageBackground, ScrollView, Linking } from 'react-native';
import { styles } from '../../assets/styles';
import Moment from 'moment';
import 'moment/locale/fr';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { store } from '../../reducers/store';
import { IS_AUTH_ERROR, IS_LOADING, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';

import { loginstyle } from '../../assets/styles/login';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import AwesomeAlert from 'react-native-awesome-alerts';
import { SignupAction } from '../../reducers/actions';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import { IS_AUTHENTICATED } from '../../reducers/actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';


const handleValidation = () => {
    if (!prenom || !numRue || !pays || !ville || !telephone || !typeCompte) {
        Alert.alert('Erreur', 'Tous les champs sont obligatoires.');
    } else {
        Alert.alert('Succès', 'Formulaire soumis avec succès !');
    }
};

const datagender = [
    { label: 'Masculin', value: 'Masculin' },
    { label: 'Féminin', value: 'Féminin' },
];

const countryselection = [

    { label: 'Cameroun', value: '47'},
    { label: 'Canada', value: '38' },
];

const cityselection = [
    { label: 'Douala', value: '3363' },
    { label: 'Bafang', value: '3380'},
    { label: 'Bafia', value: '3379'},
    { label: 'Bafoussam', value: '3378'},
    { label: 'Bafut', value: '3377'},
    { label: 'Bali', value: '3376'},
    { label: 'Bamenda', value: '3375'},
    { label: 'Pitoa', value: '3313'},
    { label: 'Bamusso', value: '3373'},
    { label: 'Bandjoun', value: '3372'},
    { label: 'Bagangté', value: '3371'},
    { label: 'Batouri', value: '3369'},
    { label: 'Blangwa', value: '3385'},
    { label: 'Bertoua', value: '3367'},
    { label: 'Bogo', value: '3366'},
    { label: 'Buea', value: '3365'},
    { label: 'Yaoundé', value: '3301'},
    { label: 'Muyuka', value: '3324'},
    { label: ' Mbouda', value: '3330'},
    { label: ' Mamfe', value: '3336 '},
    { label: 'Kumbo', value: '3343'},
    { label: 'Guider', value: '3350 '},
    { label: 'ontem', value: '3356'},
    { label: 'Ekondo Titi', value: '3359'},
    { label: 'Akonolinga', value: '3382 '},
    { label: ' Limbe', value: '3341'},
    { label: 'Yokadouma', value: '3300'},
    { label: 'Yagoua', value: '3302'},
    { label: 'Wum', value: '3303'},
    { label: 'Touboro', value: '3304'},
    { label: 'Tonga', value: '3305 '},
    { label: 'Tiko', value: '3307 '},
    { label: 'Tibati', value: '3308 '},
    { label: 'Tcholliré', value: '3309'},
    { label: 'Tchéboa', value: '3310'},
    { label: 'Souza Gare', value: '3311'},
    { label: 'Sangmélima', value: '3312'},
    { label: 'Penja', value: '3314 '},
    { label: 'Oku', value: '3315 '},
    { label: 'Okoa', value: '3317'},
    { label: 'Nkoteng', value: '3318 '},
    { label: 'Nkongsamba', value: '3319'},
    { label: 'Nkambe', value: '3320'},
    { label: 'Njombé', value: '3321'},
    { label: 'Ngaoundéré', value: '3322'},
    { label: 'Nanga Eboko', value: '3323'},
    { label: 'Mutengene', value: '3325'},
    { label: 'Mora', value: '3326'},
    { label: 'Mokolo', value: '3327'},
    { label: 'Melong', value: '3328 '},
    { label: 'Meïganga', value: '3329 '},
    { label: 'Mbanga', value: '3331'},
    { label: 'Mbandjok', value: '3333'},
    { label: 'Maroua', value: '3334 '},
    { label: 'Manjo', value: '3335'},
    { label: 'Magba', value: '3337'},
    { label: ' Maga', value: '3338'},
    { label: 'Loum', value: '3339'},
    { label: 'Lolodorf', value: '3340'},
    { label: 'Lagdo', value: '3342'},
    { label: ' Kumba', value: '3344'},
    { label: 'Kribi', value: '3345'},
    { label: 'Kousséri', value: '3346'},
    { label: 'Kekem', value: '3347 '},
    { label: 'Kaélé', value: '3348'},
    { label: 'Guidiguis', value: '3349'},
    { label: 'Garoua Boulaï',  value: '3351'},
    { label: 'Garoua', value: '3352'},
    { label: 'Fundong', value: '3353'},
    { label: 'Foumbot', value: '3354'},
    { label: 'Foumban', value: '3355'},
    { label: 'Figuil', value: '3357'},
    { label: 'Eséka', value: '3358'},
    { label: ' Edéa', value: '3360'},
    { label: ' Ebolowa', value: '3361'},
    { label: 'Dschang', value: '3362'},
    { label: 'Dizangué', value: '3364'},
    { label: 'Bogo', value: '3366'},
    { label: 'Ndop', value: '3374'},
    { label: ' Bélabo', value: '3368'},
    { label: ' Banyo', value: '3370'},
    { label: 'Ambam', value: ' 3381'},
    { label: 'Abong Mbang', value: '3383'},
    { label: 'Ngaoundal', value: '3384'},
    { label: 'Blangwa', value: '3385 '},
    { label: 'Airdrie', value: '2552'},
    { label: 'Ajax', value: ' 2553'},
    { label: 'Alliston', value: '2554'},
    { label: 'Alma', value: '2555'},
    { label: 'Aurora', value: '2557'},
    { label: 'Barrie', value: '2559'},
    { label: 'Beaconsfield', value: '2560'},
    { label: 'Beloeil', value: '2562'},
    { label: 'Blainville', value: '2563'},
    { label: 'Bracebridge', value: '2566'},
    { label: 'Brampton', value: '2567'},
    { label: 'Brant', value: '2569'},
    { label: 'Brantford', value: '2570'},
    { label: 'Brossard', value: '2572'},
    { label: 'Burnaby', value: '2574'},
    { label: 'Cambridge', value: '2577'},
    { label: 'Camrose', value: ' 2579'},
    { label: 'Candiac', value: '2580'},
    { label: 'Châteauguay', value: ' 2583'},
    { label: 'Chatham', value: '2584'},
    { label: 'Clarence-Rockland', value: '2586'},
    { label: 'Cobourg', value: '2587'},
    { label: 'Cochrane', value: '2588'},
    { label: 'Caledon', value: '2575'},
    { label: 'Coquitlam', value: '2592'},
    { label: 'Côte-Saint-Luc', value: '2595'},
    { label: 'Courtenay', value: '2596'},
    { label: 'Dartmouth', value: '2598'},
    { label: 'Deux-Montagnes', value: '2600'},
    { label: 'Dorval', value: '2603'},
    { label: 'Drummondville', value: '2604'},
    { label: 'Duncan', value: '2605'},
    { label: 'East Gwillimbury', value: '2606'},
    { label: 'Esquimalt', value: '2608'},
    { label: 'Fort Erie', value: '2610'},
    { label: 'Fort St. John', value: '2612'},
    { label: 'Gatineau', value: '2614'},
    { label: 'Granby', value: '2616'},
    { label: 'Grande Prairie', value: '2617'},
    { label: 'Grimsby', value: '2620'},
    { label: 'Hamilton', value: '2622'},
    { label: 'Joliette', value: '2624'},
    { label: 'Kanata', value: '2626'},
    { label: 'Kelowna', value: '2627'},
    { label: 'Kingston', value: '2629'},
    { label: 'Kirkland', value: '2630'},
    { label: 'La Prairie', value: '2634'},
    { label: 'LaSalle', value: '2635'},
    { label: 'Laval', value: '2637'},
    { label: 'Leamington', value: '2638'},
    { label: 'Les Coteaux', value: '2640'},
    { label: 'Lindsay', value: '2642'},
    { label: 'London', value: '2644'},
    { label: 'Longueuil', value: '2645'},
    { label: 'Magog', value: '2647'},
    { label: 'Maple Ridge', value: '2648'},
    { label: 'Mascouche', value: '2650'},
    { label: 'Midland', value: '2652'},
    { label: 'Milton', value: '2653'},
    { label: 'Mirabel', value: '2654'},
    { label: 'Mississauga', value: '2657'},
    { label: 'Mont-Royal', value: '2660'},
    { label: 'Mont-Saint-Hilaire', value: '2661'},
    { label: 'Moose Jaw', value: '2662'},
    { label: 'Nanaimo', value: '2664'},
    { label: 'Nepean', value: '2665'},
    { label: 'Niagara-on-the-Lake', value: '2670'},
    { label: 'Norfolk County', value: ' 2671'},
    { label: 'North Battleford', value: '2672'},
    { label: 'Oak Bay', value: '2676'},
    { label: 'Oakville', value: '2677'},
    { label: 'Orangeville', value: '2678'},
    { label: 'Oshawa', value: '2680'},
    { label: 'Owen Sound', value: '2682'},
    { label: 'Penticton', value: '2683'},
    { label: 'Petawawa', value: '2684'},
    { label: 'Pickering', value: '2686'},
    { label: 'Pointe-Claire', value: '2688'},
    { label: 'Port Colborne', value: '2690'},
    { label: 'Port Moody', value: '2692'},
    { label: 'Prince George', value: '2695'},
    { label: 'Quinte West', value: '2696'},
    { label: 'Regina', value: '2698'},
    { label: 'Richmond', value: '2700'},
    { label: 'Rouyn-Noranda', value: '2702'},
    { label: 'Saguenay', value: '2703'},
    { label: 'Saint-Constant', value: '2706'},
    { label: 'Sainte-Julie', value: '2709'},
    { label: 'Sainte-Thérèse', value: '2710'},
    { label: 'Saint-Hyacinthe', value: '2712'},
    { label: 'Saint-Jérôme', value: '2714'},
    { label: 'Saint-Lazare', value: '2716'},
    { label: 'Saint-Lin-Laurentides', value: '2717'},
    { label: 'Saint-Michel', value: '2718'},
    { label: 'Sarnia', value: '2720'},
    { label: 'Saskatoon', value: '2721'},
    { label: 'Sept-Îles', value: '2723'},
    { label: 'Shawinigan', value: '2724'},
    { label: 'Sherwood Park', value: '2726'},
    { label: 'Spruce Grove', value: '2728'},
    { label: 'Steinbach', value: '2732'},
    { label: 'Stouffville', value: '2733'},
    { label: 'Stratford', value: '2734'},
    { label: 'Surrey', value: '2736'},
    { label: 'Swift Current', value: '2737'},
    { label: 'Terrace', value: '2739'},
    { label: 'Thorold', value: '2741'},
    { label: 'Timmins', value: '2743'},
    { label: 'Toronto', value: '2744'},
    { label: 'Tsawwassen', value: ' 2746'},
    { label: 'Uxbridge', value: ' 2747'},
    { label: 'Val-d\'Or', value: '2748'},
    { label: 'Vanier', value: '2750'},
    { label: 'Vaughan', value: '2753'},
    { label: 'Victoria', value: '2755'},
    { label: 'Wasaga Beach', value: '2757'},
    { label: 'Waterloo', value: '2758'},
    { label: 'West End', value: '2760'},
    { label: 'Westmount', value: '2761'},
    { label: 'White Rock', value: '2763'},
    { label: 'Windsor', value: '2764'},
    { label: 'Yorkton', value: '2768'},
    { label: 'Québec', value: '2771'},
    { label: 'Lévis', value: '2772'},
    { label: 'Rimouski', value: '2773'},
    { label: 'Rivière-du-Loup', value: '2774'},
    { label: 'Aylmer', value: '2776'},
    { label: 'Saint-Georges', value: '2779'},
    { label: 'Buckingham', value: '2780'},
    { label: 'Thetford-Mines', value: '2781'},
    { label: 'Ladner', value: '2784'},
    { label: 'Walnut Grove', value: '2785'},
    { label: 'Fergus', value: '2786'},
    { label: 'Ancaster', value: '2787'},
    { label: 'Willowdale', value: '2789'},
    { label: 'Fallingbrook', value: '2791'},
    { label: 'Valley East', value: '2792'},
    { label: 'Boucherville', value: '2565'},
    { label: 'Colwood', value: '2590'},
    { label: 'Kenora', value: '2628'},
    { label: 'Kitchener', value: '2631'},
    { label: 'North Cowichan', value: ' 2674'},
    { label: 'Vaudreuil-Dorion', value: ' 2752'},
    { label: 'Conception Bay South', value: '2591'},
    { label: 'Saint-Bruno-de-Montarville', value: '2705'},
    { label: 'Sainte-Catherine', value: '2707'},
    { label: 'Ottawa', value: '2681'},
    { label: 'Peterborough', value: '2685'},
    { label: 'Port Alberni', value: '2689'},
    { label: 'Greater Sudbury', value: '2618'},
    { label: 'Greater Napanee', value: '2619'},
    { label: 'Montréal', value: '2659'},
    { label: 'New Glasgow', value: '2666'},
    { label: 'Niagara Falls', value: '2669'},
    { label: 'Pitt Meadows', value: '2687'},
    { label: 'Prince Edward', value: '2694'},
    { label: 'St. Alber', value: '2730'},
    { label: 'St. Thomas', value: '2735'},
    { label: 'Vancouver', value: '2749'},
    { label: 'Winnipeg', value: '2765'},
    { label: 'Port Coquitlam', value: '2691'},
    { label: 'Prince Albert', value: '2693'},
    { label: 'Red Deer', value: '2697'},
    { label: 'Repentigny', value: '2699'},
    { label: 'Richmond Hill', value: '2701'},
    { label: 'Boisbriand', value: '2564'},
    { label: 'Bowmanville', value: '29003'},
    { label: 'Brandon', value: '2568'},
    { label: 'Brockville', value: '2571'},
    { label: 'Burlington', value: '2573'},
    { label: 'Calgary', value: '2576'},
    { label: 'Campbell River', value: '2578'},
    { label: 'Chambly', value: '2581'},
    { label: 'Charlottetown', value: '2582'},
    { label: 'Chilliwack', value: '2585'},
    { label: 'Collingwood', value: '2589'},
    { label: 'Corner Brook', value: ' 2593'},
    { label: 'Cranbrook', value: '2597'},
    { label: 'Delta', value: '2599'},
    { label: 'Dieppe', value: '2601'},
    { label: 'Dollard-Des Ormeaux', value: '2602'},
    { label: 'Edmonton', value: '2607'},
    { label: 'Etobicoke', value: '2609'},
    { label: 'Fort McMurray', value: '2611'},
    { label: 'Riverview', value: '29006'},
    { label: 'Saint-Basile-le-Grand', value: '2704'},
    { label: 'Fredericton', value: '2613'},
    { label: 'Glace Bay', value: '2615'},
    { label: 'Guelph', value: '2621'},
    { label: 'Halton Hills', value: '29004'},
    { label: 'Huntsville', value: '2623'},
    { label: 'Kamloops', value: '2625'},
    { label: 'Kingsville', value: '29005'},
    { label: 'Langford', value: '2632'},
    { label: 'Saint-Charles-Borromée', value: '29007'},
    { label: 'Sainte-Catherine', value: '2708'},
    { label: 'Saint-Eustache', value: '2711'},
    { label: 'Saint-Jean-sur-Richelieu', value: '2713'},
    { label: 'Saint John', value: '2715'},
    { label: 'Salaberry-de-Valleyfield', value: '2719'},
    { label: 'Sault Ste. Marie', value: '2722'},
    { label: 'Sherbrooke', value: '2725'},
    { label: 'Sorel-Tracy', value: '2727'},
    { label: 'Squamish', value: '2729'},
    { label: 'St. Catharines', value: '2731'},
    { label: 'Strathroy', value: '29008'},
    { label: 'Tecumseh', value: '2738'},
    { label: 'Terrebonne', value: '2740'},
    { label: 'Thunder Bay', value: '2742'},
    { label: 'Tillsonburg', value: '29009'},
    { label: 'Trois-Rivières', value: '2745'},
    { label: 'Varennes', value: '2751'},
    { label: 'Vernon', value: '2754'},
    { label: 'Victoriaville', value: '2756'},
    { label: 'Welland', value: '2759'},
    { label: 'Whitchurch-Stouffville', value: '29010'},
    { label: 'Whitehorse', value: '2762'},
    { label: 'Woodstock', value: '2766'},
    { label: 'Yellowknife', value: '2767'},
    { label: 'Halifax', value: '2769'},
    { label: 'Langley', value: '2633'},
    { label: 'L\'Assomption', value: '2633'},
    { label: 'Leduc', value: '2639'},
    { label: 'Lethbridge', value: '2641'},
    { label: 'Lloydminster', value: '2643'},
    { label: 'Lutes Mountain', value: '2646'},
    { label: 'Markham', value: '2649'},
    { label: 'Medicine Hat', value: '2651'},
    { label: 'Miramichi', value: '2655'},
    { label: 'Mission', value: '2656'},
    { label: 'Moncton', value: '2658'},
    { label: 'Mount Pearl', value: '2663'},
    { label: 'Newmarket', value: '2667'},
    { label: 'New Westminster', value: '2668'},
    { label: 'North Bay', value: '2673'},
    { label: 'North Vancouver', value: '2675'},
    { label: 'Orillia', value: '2679'},
    { label: 'Abbotsford', value: '2551'},
    { label: 'Amos', value: '2556'},
    { label: 'Baie-Comeau', value: '2558'},
    { label: 'Belleville', value: '2561'},
    { label: 'St. John\'s', value: '2770'},
    { label: 'Sydney', value: '2775'},
    { label: 'L\'Ancienne-Lorette', value: '2777'},
    { label: 'Edmundston', value: '2778'},
    { label: 'West Kelowna', value: '2782'},
    { label: 'Saint-Augustin-de-Desmaures', value: '2783'},
    { label: 'West Vancouver', value: '2788'},
    { label: 'Lower Sackville', value: '2790'},
    
];

class signUpForm2 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            gender: '',
            country: '',
            city: '',
            street: '',
            password1: '',
            password2: '',
            acceptCondition: false,
            password1Visible: false,
            password2Visible: false,
            confidFocus: false,
            is_alert: false,
            alert_title: '',
            alert_subtitle: ''
        }
    };

    componentDidMount(){
        this._RequestPersistDataForm2();
        store.dispatch({type:IS_LOADING, value:false})
    }

     _RequestPersistDataForm2 = async () => {
        const form2Data = await AsyncStorage.getItem('form2Data');
        if(form2Data !== undefined){
            const dataObject = JSON.parse(form2Data);
            if(dataObject !== null){
                this.setState({
                    gender          : dataObject.gender,
                    country         : dataObject.country,
                    city            : dataObject.city,
                    street          : dataObject.street,
                    password1       : dataObject.password1,
                    password2       : dataObject.password2,
                    acceptCondition : dataObject.acceptCondition
                })
            }
        }
    }

    _onChangeGender = (val) => {
        if (val !== '') {
            this.setState({ gender  : val.value })
        }
    }

    _onChangeCountry = (val) => {
        if (val !== '') {
            this.setState({ country : val.value })
            
        }
    }

    _onChangeCity = (val) => {
        if (val !== '') {
            this.setState({ city : val.value })
        }
    }

    _onChangeStreet = (val) => {
        if (val !== '') {
            this.setState({ street : val })
        }
    }

    _onChangePassword1 = (val) => {
        if (val !== '') {
            this.setState({ password1 : val })
        }
    }

    _onChangePassword2 = (val) => {
        if (val !== '') {
            this.setState({ password2 : val })
        }
    }

    _togglePass1Visible = () => {
        this.setState({ password1Visible: !this.state.password1Visible });
    }

    _togglePass2Visible = () => {
        this.setState({ password2Visible: !this.state.password2Visible });
    }

    _renderDropdownLabel = () => {
        if (this.state.confidValue || this.state.confidFocus) {
            return (
                <Text style={[poststyle.label, this.state.confidFocus && { color: 'white' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    _onChangeAcceptCondition = () => {
        this.setState({ acceptCondition: !this.state.acceptCondition });
    }

    _emailValidation = () => {
        const { email } = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            return false;
        }
        return true;
    }
    _navigateToForm1 = async () => {
        const { navigation } = this.props;
        navigation.navigate("SignUpForm1");
    }
    _passwordValidation = () => {
        const { password1, password2 } = this.state;
        if (password1 != password2) {
            return false;
        }
        return true;
    }

    _acceptConditionValidation = () => {
        const { acceptCondition } = this.state;
        if (acceptCondition) {
            return true;
        }
        return false;
    }

    _usernameValidation = () => {
        const { username } = this.state;
        let reg = /^[a-zA-Z0-9.\_$@*!]{3,30}$/;
        if (reg.test(username) === false) {
            return false;
        }
        return true;
    }

    _navigateToPreloadPage = () => {
        const { navigation } = this.props;
        navigation.navigate('Preload');
    }

    _authSignup = async () => {
        const { root_navigation } = this.props;
        const { country, city, password1, password2, street, gender, acceptCondition } = this.state;
        if (
            country !== '' &&
            city !== '' &&
            password1 !== '' &&
            password2 !== '' &&
            street !== '' &&
            gender !== '' &&
            acceptCondition !== false &&
            this._passwordValidation() &&
            this._acceptConditionValidation()
        ) {
            //persist form2 in local storage
            const form2Data = {
                country         : country,
                city            : city,
                street          : street,
                password1       : password1,
                password2       : password2,
                gender          : gender,
                acceptCondition : acceptCondition,
            }
            await AsyncStorage.setItem('form2Data', JSON.stringify(form2Data));


            //GET FORM_1 AND FORM_2 DATA
            var username        = '';
            var first_name      = '';
            var last_name       = '';
            var email           = '';
            var phone           = '';
            var dateofbirth     = '';

            const form1 = await AsyncStorage.getItem('form1Data');
            if(form1 !== undefined){
                const dataForm1 = JSON.parse(form1)
                
                username    = dataForm1.username;
                first_name   = dataForm1.first_name;
                last_name    = dataForm1.last_name;
                email       = dataForm1.email;
                dateofbirth = dataForm1.dateofbirth;
                phone = dataForm1.phone;
                
            }

            const Form1Form2 = {
                country         : country,
                city            : city,
                street          : street,
                password1       : password1,
                password2       : password2,
                gender          : gender,
                acceptCondition : acceptCondition,
                username        : username,
                first_name      : first_name,
                last_name       : last_name,
                email           : email,
                dateofbirth     : dateofbirth,
                phone           : phone,
                navigation      : root_navigation,       
            };
            SignupAction(Form1Form2);
            this.scrollListReftop.scrollToEnd({ animated: true });
        }
        // else if(username === ''){
        //     this.setState({is_alert:true});
        //     this.setState({alert_subtitle:'Erreur de donnée!'})
        //     this.setState({alert_subtitle:'Veuillez sqisir votre '})
        // }
        else if(!this._usernameValidation()){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Nom d\'utilisateur invalid. Le nom d\'utilisateur ne doit pas contenir d\'espace ni de tirai.'})
        }else if(password1 === ''){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Veuillez saisir votre mot de passe.'})
        }else if(password2 === ''){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Veuillez confirmer votre mot de passe.'})
        }else if(!this._passwordValidation()){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Les mots de passe sont différents.'})
        }
        //else if(email === ''){
        //     this.setState({is_alert:true});
        //     this.setState({alert_subtitle:'Erreur de donnée!'})
        //     this.setState({alert_subtitle:'Veuillez saisir votre adresse email.'})
        // }
        else if(!this._emailValidation()){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Votre adresse email est incorrect.'})
        }else if(!this._acceptConditionValidation()){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Veuillez lire et accepter les conditions d\'utilisation et la police de confidentialité.'})
        }else if(gender === ''){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Veuillez sélectionner votre sexe.'})
        }else if(country === ''){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Veuillez sélectionenr votre pays.'})
        }else if(city === ''){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Veuillez saisir votre mot de passe.'})
        }else if(street === ''){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Veuillez saisir votre quartier.'})
        }
    }

    _closeAlert = () => {
        this.setState({ is_alert: false });
    }

    _redirectPolicy = (url) => {
        Linking.openURL(url);
    }

    render() {
        const { is_loading } = this.props;
        const {
            password1Visible,
            password2Visible,
            acceptCondition,
            confidFocus,
            gender,
            country,
            city,
            street,
            password1,
            password2,
            is_alert,
            alert_title,
            alert_subtitle
        } = this.state;
        return (
            <ScrollView ref={(ref) => { this.scrollListReftop = ref }}>
                <ImageBackground source={require('../../assets/images/background.jpg')} style={[loginstyle.itemslidersignup]}>
                    <View style={loginstyle.containersignup}>
                        <TouchableOpacity
                            onPress={this._navigateToForm1}>
                            <Image style={loginstyle.backstyle1} source={require('../../assets/images/back.png')} />
                        </TouchableOpacity>
                        <Image source={require('../../assets/images/t_cash.png')} style={loginstyle.image1} />
                        <Text style={[styles.textBold, loginstyle.titlesignup]}>Créer un Compte</Text>
                        <Text style={[styles.textBold, loginstyle.title]}>Vous y êtes presque.</Text>

                        <View style={loginstyle.selectcontainer}>
                            <Dropdown
                                style={[loginstyle.dropdown, confidFocus && { borderColor: 'white' }]}
                                placeholderStyle={[loginstyle.placeholderStyle, styles.text]}
                                selectedTextStyle={[loginstyle.selectedTextStyle, styles.text]}
                                itemTextStyle={[loginstyle.itemTextStyle, styles.text]}
                                containerStyle={loginstyle.containeritemdrop}
                                iconStyle={loginstyle.iconStyle}
                                dropdownPosition='auto'
                                data={datagender}
                                labelField="label"
                                valueField="value"
                                placeholder={!confidFocus ? 'Choisir votre sexe...' : '...'}
                                value={gender !== undefined && gender !== '' ? gender : ''}
                                onFocus={() => this.setState({ confidFocus: true })}
                                onBlur={() => this.setState({ confidFocus: false })}
                                onChange={val=> this._onChangeGender(val)}
                                renderLeftIcon={() => (<Foundation name='male-female' style={loginstyle.dropdownicon} />)}
                            />
                        </View>

                        <View style={loginstyle.selectcontainer}>
                            
                            <Dropdown
                                style={[loginstyle.dropdown, confidFocus && { borderColor: 'white' }]}
                                placeholderStyle={[loginstyle.placeholderStyle, styles.text]}
                                selectedTextStyle={[loginstyle.selectedTextStyle, styles.text]}
                                itemTextStyle={[loginstyle.itemTextStyle, styles.text]}
                                containerStyle={loginstyle.containeritemdrop}
                                iconStyle={loginstyle.iconStyle}
                                dropdownPosition='auto'
                                data={countryselection}
                                labelField="label"
                                valueField="value"
                                placeholder={!confidFocus ? 'Choisir votre Pays' : '...'}
                                value={country !== undefined && country !== '' ? country : ''}
                                onFocus={() => this.setState({ confidFocus: true })}
                                onBlur={() => this.setState({ confidFocus: false })}
                                onChange={val=> this._onChangeCountry(val)}
                                renderLeftIcon={() => (<Foundation name= 'mountains' style={loginstyle.dropdownicon} />)}
                            />
                        </View>

                        <View style={loginstyle.selectcontainer}>
                            <Dropdown
                                style={[loginstyle.dropdown, confidFocus && { borderColor: 'white' }]}
                                placeholderStyle={[loginstyle.placeholderStyle, styles.text]}
                                selectedTextStyle={[loginstyle.selectedTextStyle, styles.text]}
                                itemTextStyle={[loginstyle.itemTextStyle, styles.text]}
                                containerStyle={loginstyle.containeritemdrop}
                                iconStyle={loginstyle.iconStyle}
                                dropdownPosition='auto'
                                data={cityselection}
                                labelField="label"
                                valueField="value"
                                placeholder={!confidFocus ? 'Choisir votre Ville' : '...'}
                                value={city !== undefined && city !== '' ? city : ''}
                                onFocus={() => this.setState({ confidFocus: true })}
                                onBlur={() => this.setState({ confidFocus: false })}
                                onChange={val=> this._onChangeCity(val)}
                                renderLeftIcon={() => (<Foundation name= 'marker' style={loginstyle.dropdownicon} />)}
                            />
                        </View>

                        <View style={loginstyle.blocinupt2}>
                            <TextInput
                                style={[loginstyle.inputtextsignup1, styles.text]}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor='#B1B1B1'
                                placeholder='Votre rue'
                                onChangeText={(val) => { this._onChangeStreet(val) }}
                                editable={is_loading ? false : true}
                                value={street !== undefined && street !=='' ? street : ''}  

                            />
                        </View>

                        <View style={loginstyle.blocinupt2}>
                            <TextInput
                                style={[loginstyle.inputtextsignup1, styles.text]}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor='#B1B1B1'
                                placeholder='Mot de passe'
                                secureTextEntry={!password1Visible}
                                onChangeText={(val) => { this._onChangePassword1(val) }}
                                editable={is_loading ? false : true}
                                value={password1 !== undefined && password1 !== '' ? password1 : ''}
                                
                            />
                            <View style={loginstyle.blockhidepass}>
                                <TouchableOpacity
                                    disabled={is_loading ? true : false}
                                    onPress={this._togglePass1Visible}>
                                    <Entypo
                                        name={password1Visible ? 'eye-with-line' : 'eye'}
                                        style={loginstyle.iconhidepasssiginup} />
                                </TouchableOpacity>
                            </View>
                            <View style={loginstyle.bloccriterierspass}>
                                <Text style={[styles.text, loginstyle.passwordcritariers]}> - Le mot de passe doit avoir aumoins 6 charactères.</Text>
                                <Text style={[styles.text, loginstyle.passwordcritariers]}> - Doit contenir une lettre majuscule.</Text>
                                <Text style={[styles.text, loginstyle.passwordcritariers]}> - Doit contenir un nombre ou un charactère spécial.</Text>
                            </View>
                        </View>

                        <View style={loginstyle.blocinupt2}>
                            <TextInput
                                style={[loginstyle.inputtextsignup1, styles.text]}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor='#B1B1B1'
                                placeholder='Confirmez Mot de passe'
                                secureTextEntry={!password2Visible}
                                onChangeText={(val) => { this._onChangePassword2(val) }}
                                editable={is_loading ? false : true}
                                value={password2 !== undefined && password2 !== '' ? password2 : ''}
                            />
                            <View style={loginstyle.blockhidepass}>
                                <TouchableOpacity
                                    disabled={is_loading ? true : false}
                                    onPress={this._togglePass2Visible}>
                                    <Entypo
                                        name={password2Visible ? 'eye-with-line' : 'eye'}
                                        style={loginstyle.iconhidepasssiginup} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={loginstyle.containercondition}>
                            <TouchableOpacity
                                style={loginstyle.checkbtn}
                                onPress={this._onChangeAcceptCondition}>
                                {
                                    acceptCondition ?
                                        <FontAwesome name='check' style={loginstyle.checkicon} />
                                        :
                                        <Text></Text>
                                }
                            </TouchableOpacity>


                            <Text style={[styles.text, loginstyle.conditiontext]}>
                                En créant votre compte, vous acceptez les
                                <TouchableOpacity onPress={this._redirectPolicy.bind(this, 'https://japapmessenger.com/terms/terms')}>
                                    <Text style={[styles.text, loginstyle.conditionlink]}> conditions </Text>
                                </TouchableOpacity>
                            </Text>
                        </View>

                        <TouchableOpacity
                            disabled={is_loading ? true : false}
                            style={loginstyle.btnsignup}
                            onPress={this._authSignup}
                            value={acceptCondition ? false : true}>
                            {
                                is_loading ?
                                    <View style={loginstyle.loaderbtn}>
                                        <ActivityIndicator size="small" color="#fff" />
                                    </View>
                                    :
                                    <Text style={[styles.textBold, loginstyle.textbtnsubmit]}>Suivant 2/3</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                {/* Manage Error Alert */}
                <AwesomeAlert
                    show={false}
                    title={alert_title}
                    titleStyle={[styles.textBold, styles.titlealert]}
                    message={alert_subtitle}
                    messageStyle={[styles.text, styles.descriptionalert]}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="Corriger"
                    confirmButtonStyle={[styles.text, styles.btnalert]}
                    confirmButtonColor="#060064"
                    onConfirmPressed={this._closeAlert}
                />
            </ScrollView>
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
        is_loading: state.loader.is_loading,
        root_navigation: state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(signUpForm2);