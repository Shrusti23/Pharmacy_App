import React, { useState } from 'react';
import { StyleSheet, View,Text, Picker } from 'react-native';
import { DataTable } from 'react-native-paper';
import Select from "../picker";

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
export default function Completed() {
    const [choosenLabel, setChoosenLabel] = useState('Current');
    const [choosenIndex, setChoosenIndex] = useState('2');

    return(
        <View style={styles.container}>
        <Text style={styles.header}> Orders</Text>  
        
       {/* <View style={styles.orders}>
           <Text style={styles.orders}> Orders</Text> 
           </View> */}
      <Select/>
      
        <DataTable style={styles.table_container}>
        <DataTable.Header style={styles.head}>
            
          <DataTable.Title style={styles.title} text> Status</DataTable.Title>
          <DataTable.Title style={styles.title} >Order No</DataTable.Title>
          <DataTable.Title style={styles.title} >Items</DataTable.Title>
          <DataTable.Title style={styles.title} >Customer</DataTable.Title>
          <DataTable.Title style={styles.title} >Type</DataTable.Title>
          <DataTable.Title style={styles.title} >Total</DataTable.Title>
          <DataTable.Title style={styles.title3} >Date</DataTable.Title>
        </DataTable.Header>
    
        <DataTable.Row >
          <DataTable.Cell style={styles.row}>New</DataTable.Cell>
          <DataTable.Cell style={styles.row} >1232323259</DataTable.Cell>
          <DataTable.Cell style={styles.row} >01</DataTable.Cell>
          <DataTable.Cell style={styles.row}>John Li </DataTable.Cell>
          <DataTable.Cell style={styles.row} >OTC Prescription</DataTable.Cell>
          <DataTable.Cell style={styles.row} >$30</DataTable.Cell>
          <DataTable.Cell style={styles.row1} >10/02/2020  5:45PM</DataTable.Cell>
        </DataTable.Row>
    
        <DataTable.Row>
        <DataTable.Cell style={styles.row}>New</DataTable.Cell>
          <DataTable.Cell style={styles.row} >1232323269</DataTable.Cell>
          <DataTable.Cell style={styles.row} >02</DataTable.Cell>
          <DataTable.Cell style={styles.row}>Smith Samsung</DataTable.Cell>
          <DataTable.Cell style={styles.row} > Prescription</DataTable.Cell>
          <DataTable.Cell style={styles.row} >$23</DataTable.Cell>
          <DataTable.Cell style={styles.row1} >12/02/2020  3:45PM</DataTable.Cell>

        </DataTable.Row>
        <DataTable.Row>
        <DataTable.Cell style={styles.row}>In Progress</DataTable.Cell>
          <DataTable.Cell style={styles.row} >1232323229</DataTable.Cell>
          <DataTable.Cell style={styles.row} >03</DataTable.Cell>
          <DataTable.Cell style={styles.row}>Jane Wilde</DataTable.Cell>
          <DataTable.Cell style={styles.row} > OTC Prescription</DataTable.Cell>
          <DataTable.Cell style={styles.row} >$43</DataTable.Cell>
          <DataTable.Cell style={styles.row1} >02/02/2020  3:45PM</DataTable.Cell>

        </DataTable.Row>
        <DataTable.Row>
        <DataTable.Cell style={styles.row}>In Progress</DataTable.Cell>
          <DataTable.Cell style={styles.row} >1233323269</DataTable.Cell>
          <DataTable.Cell style={styles.row} >02</DataTable.Cell>
          <DataTable.Cell style={styles.row}>Monica K</DataTable.Cell>
          <DataTable.Cell style={styles.row} > Prescription</DataTable.Cell>
          <DataTable.Cell style={styles.row} >$23</DataTable.Cell>
          <DataTable.Cell style={styles.row1} >12/02/2020  3:45PM</DataTable.Cell>

        </DataTable.Row>
     </DataTable>  

     

      </View> 
       )
    }

 
const styles = StyleSheet.create({
  table_container: {  
      borderWidth:1, 
      borderColor:"grey", 
      top:"20%",
       backgroundColor: '#fff',
       bottom: '10%'
    },
  container:{
      flex: 1, 
      padding: 18, 
       backgroundColor: '#fff' 
    },
  head: {  
      height: 45, 
      color: "#949494",
      fontSize:18  
    },
  title: {  
       borderEndWidth:1, 
       borderColor:"grey", 
       alignSelf:"center"  
    },
  title3: { 
      fontSize: 15, 
      alignSelf:"center" 
     },
  row: {  
      borderEndWidth:1,
      borderColor:"grey", 
      textAlign: 'center',
     },
  header: { 
      fontSize:30,    
     fontWeight:"700",
    fontFamily:"Amiko-Regular" },
  orders:{
    fontSize:30,
    fontWeight:"700",
    // top:300,
    left:100,
    fontFamily:"Amiko-Regular",
    
  },
  pick:{
  justifyContent: 'center',
  flexDirection: 'column',
  padding:10,
 // bottom:800,
},
text: {
  fontSize: 25,
  fontFamily:"Amiko-Regular",
  alignSelf: 'center',
},
});