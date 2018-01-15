import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dashboard_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    color: '#424242',
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#424242'
  },
  search: {
    height: 50,
    padding: 4,
    width:240,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 4,
    color: '#424242'
  },
  button: {
    height: 45,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#52B6AC',
    borderColor: '#52B6AC',
    borderRadius: 2,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center'
  },
  image: {
    height: 350,
    width: 320
  },
  dashboardText: {
    marginTop: 200
  }
});
