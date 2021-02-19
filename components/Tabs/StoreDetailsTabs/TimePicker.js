import React, { useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import {Picker} from '@react-native-picker/picker';

const TimePicker = () => {
  const [selectedValue, setSelectedValue] = useState("12:00");
  const [selectedValue1, setSelectedValue1] = useState("12:00");
  const [selectedValue3, setSelectedValue3] = useState("AM");
  const [selectedValue4, setSelectedValue4] = useState("AM");



  return (
    <View style={styles.container}>
     <View> <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 60,borderWidth:0 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="12:00" value="12:00" />
        <Picker.Item label="12:30" value="12:30" />
        <Picker.Item label="1:00" value="1:00" />
        <Picker.Item label="1:30" value="1:30" />
        <Picker.Item label="2:00" value="2:00" />
        <Picker.Item label="2:30" value="2:30" />
        <Picker.Item label="3:00" value="3:00" />
        <Picker.Item label="3:30" value="3:30" />
        <Picker.Item label="4:00" value="4:00" />
        <Picker.Item label="4:30" value="4:30" />
        <Picker.Item label="5:00" value="5:00" />
        <Picker.Item label="5:30" value="5:30" />
        <Picker.Item label="6:00" value="6:00" />
        <Picker.Item label="6:30" value="6:30" />
        <Picker.Item label="7:00" value="7:00" />
        <Picker.Item label="7:30" value="7:30" />
        <Picker.Item label="8:00" value="8:00" />
        <Picker.Item label="8:30" value="8:30" />
        <Picker.Item label="9:00" value="9:00" />
        <Picker.Item label="9:30" value="9:30" />
        <Picker.Item label="10:00" value="10:00" />
        <Picker.Item label="10:30" value="10:30" />
        <Picker.Item label="11:00" value="11:00" />
        <Picker.Item label="11:30" value="11:30" />
      </Picker></View>
      <View  style={{bottom:"21.5%", left:"5%" }}>
        <Picker
          selectedValue={selectedValue3}
          style={{ height: 50, width: 50,borderWidth:0}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
          >
          <Picker.Item label="AM" value="AM" />
          <Picker.Item label="PM" value="PM" />
        </Picker>
      </View>
      <View  style={{bottom:"41%", left:"9%" }}> <Text style={{fontSize:30}}>-</Text></View>
      
      <View style={{bottom:"58.5%", left:"13%" }}><Picker
        selectedValue={selectedValue1}
        style={{ height: 50, width: 60,borderWidth:0}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
      >
        <Picker.Item label="12:00" value="12:00" />
        <Picker.Item label="12:30" value="12:30" />
        <Picker.Item label="1:00" value="1:00" />
        <Picker.Item label="1:30" value="1:30" />
        <Picker.Item label="2:00" value="2:00" />
        <Picker.Item label="2:30" value="2:30" />
        <Picker.Item label="3:00" value="3:00" />
        <Picker.Item label="3:30" value="3:30" />
        <Picker.Item label="4:00" value="4:00" />
        <Picker.Item label="4:30" value="4:30" />
        <Picker.Item label="5:00" value="5:00" />
        <Picker.Item label="5:30" value="5:30" />
        <Picker.Item label="6:00" value="6:00" />
        <Picker.Item label="6:30" value="6:30" />
        <Picker.Item label="7:00" value="7:00" />
        <Picker.Item label="7:30" value="7:30" />
        <Picker.Item label="8:00" value="8:00" />
        <Picker.Item label="8:30" value="8:30" />
        <Picker.Item label="9:00" value="9:00" />
        <Picker.Item label="9:30" value="9:30" />
        <Picker.Item label="10:00" value="10:00" />
        <Picker.Item label="10:30" value="10:30" />
        <Picker.Item label="11:00" value="11:00" />
        <Picker.Item label="11:30" value="11:30" />
      </Picker></View>

      <View  style={{bottom:"80%", left:"18%" }}>
        <Picker
          selectedValue={selectedValue4}
          style={{ height: 50, width: 50,borderWidth:0}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
          >
          <Picker.Item label="AM" value="AM" />
          <Picker.Item label="PM" value="PM" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 40,
    alignItems: "center"
  }
});

export default TimePicker;