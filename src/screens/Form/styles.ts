import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  form: {
    backgroundColor: '#00000077',
    borderRadius: 20,
    padding: 24,
    margin: 25,
  },
  selectInputText: {
    color: '#C3C3C3',
    marginBottom: 6,
  },
  selectInput: {
    height: 56,
    borderWidth: 1,
    borderColor: '#C16897',
    borderRadius: 50,
    marginBottom: 16,
    paddingHorizontal: 15,
  },
  selectInputPlaceholder: {
    color: '#C3C3C3'
  },
  buttonView: {
    marginTop: 20,
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: '#3D434D',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginRight: 40
  },
  buttonHeader: {
    height: 70,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  }
});
