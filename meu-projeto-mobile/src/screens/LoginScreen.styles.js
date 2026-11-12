// src/screens/LoginScreen.styles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../constants/theme'; // Importando o nosso root global

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary, // #1e3932
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCard: {
    width: '100%',
    minHeight: '80%',
    backgroundColor: Colors.backgroundWhite, // #FFFFFF
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 65,
    height: 65,
    marginBottom: 2,
  },
  brandTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textDark, // #000000
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textDark, // #000000
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: -24,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: Colors.borderLight, // #CCCCCC
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: Colors.backgroundWhite, // #FFFFFF
  },
  checkboxChecked: {
    backgroundColor: Colors.primary, // #1e3932
    borderColor: Colors.primary,     // #1e3932
  },
  checkboxLabel: {
    fontSize: 12,
    color: Colors.textGray, // #6d6d6d
  },
  forgotContainer: {
    marginTop: 2,
    marginBottom: 26,
  },
  forgotText: {
    fontSize: 12,
    color: Colors.textGray, // #6d6d6d
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.divider, // #DDDDDD
  },
  orText: {
    marginHorizontal: 16,
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.textDark, // #000000
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.divider, // #DDDDDD
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: Colors.backgroundWhite, // #FFFFFF
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  socialIconPng: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  socialText: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.socialText, // #333333
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
    marginTop: 30,
  },
  signupText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primary, // #1e3932
    marginTop: 30,
  },
  passwordWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -30 }],
    zIndex: 10,
    padding: 4,
  },
});