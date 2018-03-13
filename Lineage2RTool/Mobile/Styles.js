import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainScrollView: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  codexView: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  codexInfoView: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },
  fourButtonView: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    borderColor: 'grey',
    borderWidth: 5
  },
  twoButtonView: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10
  },
  buttonView: {
    flex: 4,
    flexDirection: 'column',
    marginRight: 10
  },
  textInputView: {
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'stretch',
    margin: 5
  },
  expTextView:{
    alignSelf: 'stretch',
    margin: 5
  },
  expText:{
    fontSize: 20,
    alignSelf: 'center',
    color:'white',
  },
  buttonShortcut: {
    alignSelf: 'stretch'
  },
  baseText: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 50
  },
  picker:{
    backgroundColor: 'white',
    width: 'auto',
    margin: 10,
    alignSelf: 'stretch'
  },
  textStylePicker:{
    fontSize: 15,
    margin: 10
  },
  textInput:{
    color: 'white',
    marginLeft: 10
  },
  searchButton:{
    margin: 10,
    alignSelf: 'stretch',
    fontSize: 15
  }
});
