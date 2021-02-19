/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
 TextInput
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons'; 

export default function Search () {
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <EvilIcons name="search" size={28} color="black" />
        <View style={styles.viewStyle1}>

        <TextInput
                name=" Search"
                placeholder="Search" 
                style={styles.inputText}
              />
      </View>
      </View>

    );
  
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    //marginHorizontal: 400,
  //  height:100,
  //  backgroundColor: 'white',
    bottom:30,
    left:800,
    //marginVertical:400,
   // marginTop: Platform.OS == 'ios' ? 30 : 0,
  },
  viewStyle1: {
    justifyContent: 'center',
  
    bottom:35,
    left:40,
   
  },
  textStyle: {
    padding: 10,
  },
  inputText: {
    height: 50,
    color: "black",
    fontSize:20,
    fontFamily: "Amiko-Regular",
    left:"5%",
   // bottom:200,


  },
});
