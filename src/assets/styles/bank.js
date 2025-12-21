import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const bankstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: 15,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 30,
    overflow: 'hidden',
  },
  tabActive: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  tabInactive: {
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  tabTextActive: {
    color: '#6dcabb',
    fontWeight: 'bold',
  },
  tabTextInactive: {
    color: '#999',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  amountCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  amountInput: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    width: 150,
  },
  currencyFlag: {
    alignItems: 'flex-end',
  },
  currencyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  countryText: {
    fontSize: 14,
    color: '#666',
  },
  balanceText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 20,
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  feeLabel: {
    fontSize: 16,
    color: '#666',
  },
  feeValue: {
    fontSize: 16,
    color: '#999',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 16,
    color: '#666',
  },
  minAmountText: {
    fontSize: 14,
    color: '#e74c3c',
    textAlign: 'center',
    marginTop: 10,
  },
  recipientText: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  recipientCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },
  recipientAmountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recipientAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  recipientAmountText: {
    fontSize: 14,
    color: '#666',
  },
  exchangeRateText: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  currencySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  currencyInput: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  currencyDropdown: {
    alignItems: 'flex-end',
  },
  currencyDropdownText: {
    fontSize: 18,
    color: '#27ae60',
    fontWeight: 'bold',
  },
  countryDropdownText: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    padding: 20,
  },
  continueButton: {
    backgroundColor: '#6dcabb',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

