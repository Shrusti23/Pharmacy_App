import React from "react";
import { Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const OtpFormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  style,
  ...rest
}) => (
  <View style={styles.smallInputContainer}>
    <Input
      {...rest}
      leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
      // leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor="grey"
      name={name}
      placeholder={placeholder}
      style={{width:80, height:65,fontSize:20,
        fontFamily:"Amiko-Regular",
        fontWeight:"600",}}
    />
  </View>
);

export default OtpFormInput;

const styles = StyleSheet.create({
  smallInputContainer: {
    width: 100,
    margin: 15,
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
    height: 65,
  },
  
});
