import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import Account from "../Tabs/Account_screens/Account";
import StoreDetails from "../Tabs/Account_screens/Store_details";
import InsuranceAcceptance from "../Tabs/Account_screens/Insurance";
import MedisendSupplies from "../Tabs/Account_screens/packaging";

export default function users() {
    return (
      <Tab.Navigator
      initialRouteName="Store Details"
      tabBarOptions={{
        //activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Store Details" component={StoreDetails} />
      <Tab.Screen name="Insurance " component={InsuranceAcceptance} />
      <Tab.Screen name="Packaging" component={MedisendSupplies} />
          </Tab.Navigator>

    );
}
