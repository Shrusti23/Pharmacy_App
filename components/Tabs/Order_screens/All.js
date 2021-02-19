import React, { useState } from 'react';
import { StyleSheet, View,Text, Picker } from 'react-native';
import { DataTable } from 'react-native-paper';
import Select from "../picker";

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
export default function All() {
    
    return(
        <View style={styles.container}>
      <View Style={styles.row}>
         {/* <View > <Text style={styles.header}> Status</Text> </View>
         <View > <Text style={styles.header}> Order No</Text> </View>
         <View > <Text style={styles.header}> Items</Text> </View>
         <View > <Text style={styles.header}> Customer</Text> </View>
         <View > <Text style={styles.header}> Type</Text> </View>
         <View > <Text style={styles.header}> Total</Text> </View>
         <View > <Text style={styles.header}> Date</Text> </View> */}

       </View>
     <Calendar
  markingType={'period'}
  markedDates={{
    '2012-05-15': {marked: true, dotColor: '#50cebb'},
    '2012-05-16': {marked: true, dotColor: '#50cebb'},
    '2012-05-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
    '2012-05-22': {color: '#70d7c7', textColor: 'white'},
    '2012-05-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
    '2012-05-24': {color: '#70d7c7', textColor: 'white'},
    '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'},
  }}
/>
      </View> 
       )
    }

 
const styles = StyleSheet.create({
  
  container:{
      flex: 1, 
      padding: 18, 
       backgroundColor: '#fff' 
    },
  row: {  
    borderColor: '#DCDCDC',
    width:"100%",
    height:170,
    borderBottomWidth: 1,
     },
  header: { 
      fontSize:25,    
     fontWeight:"700",
    fontFamily:"Amiko-Regular",
    color:"grey",

},


});