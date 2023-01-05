import { StyleSheet, Text, View, SafeAreaView, Button,Alert, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header:{
    fontSize: 40,
    fontFamily: 'monospace',
  },
  bottomTextLeft:{
    position: 'absolute',
    bottom:0,
    marginBottom: 20,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
  album:{
    marginTop: '20%',
    marginBottom: '2%',
    height: '35%',
    width: '35%',
    resizeMode:'contain',
    bottom:0,
  },
  topAlbum:{
    height: '35%',
    width: '35%',
    resizeMode:'contain',
    alignSelf:'flex-start'
  },
  buttonStyle:{
    fontFamily: 'monospace',
    color: "#000000"
  },
  button2Style:{
    alignSelf: 'flex-end',
    backgroundColor:"black",
    borderRadius: 5,
    padding: 10,
    margin: 5
  },
  album_2:{
    width: '35%',
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'center',
    alignContent: 'center',
    //resizeMode: 'contain',

  },
  styleTestJS:{
    fontSize: 30,
    position: 'absolute',
  },
  screen2:{
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal:250,
    marginVertical:200,
  },
  

});

export { styles }
