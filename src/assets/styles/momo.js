import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const momostyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 10,
  },
  backArrow: {
    fontSize: 28,
    color: '#333',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 10,
  },
  closeText: {
    fontSize: 28,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginVertical: 20,
    lineHeight: 22,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#6dcabb',
    marginBottom: 10,
    fontWeight: '600',
  },
  phoneInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  phoneContent: {
    flex: 1,
  },
  selectedName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedNumber: {
    fontSize: 14,
    color: '#666',
  },
  phonePlaceholder: {
    fontSize: 16,
    color: '#999',
  },
  phoneArrow: {
    fontSize: 24,
    color: '#6dcabb',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 60,
  },
  currency: {
    fontSize: 18,
    color: '#888',
    marginRight: 10,
  },
  amountInput: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  gratuitText: {
    fontSize: 16,
    color: '#888',
  },
  visibilityToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  visibilityText: {
    fontSize: 14,
    color: '#888',
  },
  eyeIcon: {
    marginLeft: 8,
    fontSize: 18,
  },
  codeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
  },
  codeIcon: {
    fontSize: 20,
    color: '#6dcabb',
    marginRight: 10,
  },
  codeInput: {
    flex: 1,
    fontSize: 16,
    color: '#999',
  },
  arrivalText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 30,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  continueButton: {
    backgroundColor: '#6dcabb',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
