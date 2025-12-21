import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const rechargestyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  closeButton: {
    padding: 10,
  },
  closeText: {
    fontSize: 28,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 20,
  },
  section: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  currency: {
    fontSize: 18,
    color: '#888',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  gratuitText: {
    fontSize: 16,
    color: '#888',
  },
  visibilityToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  visibilityText: {
    color: '#888',
    fontSize: 14,
  },
  eyeIcon: {
    marginLeft: 5,
    fontSize: 16,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
  },
  paymentLogo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentNumber: {
    fontSize: 16,
    color: '#333',
  },
  paymentProvider: {
    fontSize: 14,
    color: '#888',
  },
  changeButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  changeText: {
    color: '#6dcabb',
    fontWeight: 'bold',
  },
  radioGroup: {
    marginTop: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  radioOptionSelected: {
    borderColor: '#5eb3a5',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#5eb3a5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 5,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6dcabb',
  },
  radioContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  radioLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  radioTitle: {
    fontWeight: 'bold',
    color: '#333',
  },
  radioDescription: {
    color: '#666',
    fontSize: 13,
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#6dcabb',
    margin: 20,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
