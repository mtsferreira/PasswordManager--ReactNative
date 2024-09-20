import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E3E3',
    borderWidth: 1,
    paddingLeft: 22,
    marginBottom: 15,
    borderRadius: 50
  },
  content: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  title: {
    fontSize: 17,
    lineHeight: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  site: {
    color: '#CCC',
    fontSize: 15,
  },
  email: {
    color: '#FFF',
    fontSize: 15,
  },
  password: {
    color: '#C2006B',
    fontSize: 15,
  },
  button: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#E3E3E3',
    borderRadius: 50,
  }
});
