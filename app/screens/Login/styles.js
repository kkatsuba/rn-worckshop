import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
    flex: 1,
    paddingHorizontal: 50,
    alignItems: 'stretch'
  },
  backButtonContainer: {
    justifyContent: 'center'
  },
  backButton: {
    color: '#fff'
  },
  logoContainer: {
    alignItems: 'center'
  },
  titleText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#21242c',
    borderRadius: 60,
    alignItems: 'center',
    padding: 10,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  inputIcon: {
    color: '#71757f',
    fontSize: 30
  },
  input: {
    color: '#fff',
    fontSize: 25
  },
  inputItem: {
    marginTop: 20
  },
  errorMessage: {
    textAlign: 'center',
    color: '#e74c3c',
    fontSize: 20,
    marginVertical: 10
  }
});
