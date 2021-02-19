import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight} from "react-native";

import { Icon, Header } from 'react-native-elements';


export default function Notifications() {
    var [ isPress, setIsPress ] = React.useState(false);

    var touchProps = {
      activeOpacity: 1,
      underlayColor: '#DDDDDD',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
    };
    return (

      <div style={{backgroundColor: "white", flex:1}}>
        
        <View style={styles.container}> 
          <View styles={{left: 50}}>
            <Text style={styles.day}>Today</Text>
          </View> 
          <View style={styles.containerOrder}>
            <TouchableHighlight {...touchProps}>
              <Text style={styles.orders}>John Doe sent in a new order</Text>  
            </TouchableHighlight>
          </View>
          <View style={styles.containerOrder}>
            <TouchableHighlight {...touchProps}>
              <Text style={styles.orders}>Kevin Li sent in a new order</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.container}> 
          <View styles={{left: 50}}>
            <Text style={styles.day}>Yesterday</Text>
          </View> 
          <View style={styles.containerOrder}>
            <TouchableHighlight {...touchProps}>
              <Text style={styles.orders}>John Doe sent in a new order</Text>  
            </TouchableHighlight>
          </View>
          <View style={styles.containerOrder}>
            <TouchableHighlight {...touchProps}>
              <Text style={styles.orders}>Kevin Li sent in a new order</Text>
            </TouchableHighlight>
          </View>
        </View>
      
        
      </div>

    
      
     
      

    );
}

const styles = StyleSheet.create({
    day: {
      height: 27,
      width: '100%',
      borderRadius: null,
      fontWeight: 8,
      fontSize: 30,
      
      fontFamily: 'Amiko-Regular'
    },

    container: {
      marginTop: 20,
      left: 50
    },

    containerOrder: {
      marginTop: 20,
      
    },



    orders: {
      fontFamily: 'Amiko-Regular',
      marginTop: 10     
    }

    

})