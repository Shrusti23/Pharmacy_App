import React, { Component } from 'react';
import { StyleSheet, View,Text,Image } from 'react-native';
import { Icon, Button } from "react-native-elements";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons,Entypo,Feather, FontAwesome5,Ionicons } from "@expo/vector-icons";


import bills from "../Screens/bills";
import Notifications from "../Tabs/notifications";
import inventory from "../Screens/inventory";
import users from "../Screens/users";
import Help_Support from "./Help_support";
import Customers from "./Customers";
import Earnings from "./Earnings";
import Deactivate from "../Tabs/Account_screen/Account_tabs/Deactivate";
import Get_alert from "../Tabs/Account_screen/Account_tabs/Get_alert";
import Two_factor from "../Tabs/Account_screen/Account_tabs/Two_factor";
import Delete from "../Tabs/Account_screen/Account_tabs/Delete";
import Deactivate_Account from "../Tabs/Account_screen/Account_tabs/Deactivate-Account";
import Password from "../Tabs/Account_screen/Account_tabs/Password";
import Change_password from "../Tabs/Account_screen/Change_password";
import WelcomeScreen from "../InitialScreens/WelcomeScreen"; 
import { TextInput } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
  // const navigation = useNavigation();
  const signout = async () =>{
    navigation.navigate("Welcome");
    //alert("Account Deleted");
   // const refreshToken = authStorage.getToken().refreshToken;
  console.log(refreshToken);
  const result = await authApi.signout(refreshToken);
   console.log(result.data);
  //authApi.signout(refreshToken);
 }
  function stackscreen() {
    return (
      <Stack.Navigator >

          <Stack.Screen
            name=" "
            component={bills}
            options={({ navigation }) => ({
              headerRight: () => (
                <View style={styles.iconright}>
               <Button
                  buttonStyle={{ backgroundColor: "white" }}
                  icon={<Ionicons name="md-notifications-outline" size={40} color="black" />}
                  onPress={() => navigation.navigate("Notifications")}
                  ></Button>
               </View>
            ),
            })}
          />
           
          <Stack.Screen name ="bills" component={bills}
          options={({ navigation }) => ({
              headerRight: () => (
                <View style={styles.iconright}>
               <Button
                  buttonStyle={{ backgroundColor: "white" }}
                  icon={<Ionicons name="md-notifications-outline" size={40} color="black" />}
                  onPress={() => navigation.navigate("notifications")}
                  ></Button>
               </View>
            ),
            })}/>
          <Stack.Screen name ="users" component={users} />
          <Stack.Screen name ="inventory" component={inventory}/>
          <Stack.Screen name ="Notifications" component={Notifications}/>
          <Stack.Screen name ="Help_Support" component={Help_Support}/>
          <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
          <Stack.Screen name="Customers" component={Customers}/>
          {/* Account screen inner tabs */}
          <Stack.Screen name="Earnings" component={Earnings}/>
          <Stack.Screen name="Deactivate" component={Deactivate}/>
          <Stack.Screen name="Get_alert" component={Get_alert}/>
          <Stack.Screen name="Two_factor" component={Two_factor}/>
          <Stack.Screen name="Deactivate-Account" component={Deactivate_Account}/>
          <Stack.Screen name="Delete" component={Delete}/>  
          <Stack.Screen name="Password" component={Password}/>
          <Stack.Screen name="Change_password" component={Change_password}/>  


          </Stack.Navigator>

    )} 
export default class Home extends Component {
  
render() {
// Side bar code
    return(
      <NavigationContainer independent={true}>
      <Drawer.Navigator  openByDefault
      drawerType={'permanent'}
 initialRouteName="bills">
     <Drawer.Screen
      name="bils"
      component={bills}
      options={{
        drawerLabel: "",
        drawerIcon: () => (
          <View style={styles.contain}>
                         <View style={styles.header}> 
              <Image
          source={require("../../assets/Medisend_pharmacy.png")}
          style={styles.image}
        ></Image>
        </View>
          </View>
        ),
      }}
    />
      <Drawer.Screen
        name="bills"
        component={stackscreen}
        options={{
          drawerLabel: "Order",
          drawerIcon: () => (
            <View style={styles.contain}>

              <Button
      buttonStyle={{ backgroundColor: "white" ,}}
      icon={<FontAwesome5 name="file-invoice-dollar" size={40} color="black" />}
      onPress={() => navigation.openDrawer("bills")}
      ></Button>
            </View>
          ),
        }}
      />
      <Drawer.Screen
      name="Customers"
      component={Customers}
      options={{
        drawerLabel: "Customers",
        drawerIcon: () => (
          <View style={styles.contain}>
            <Button
              buttonStyle={{ backgroundColor: "white" }}
              title={Customers}
              onPress={() => navigation.openDrawer("Customers")}
              icon={
              <FontAwesome5 name="id-badge" size={34} color="black" /> }
            />
          </View>
        ),
      }}
    />
    <Drawer.Screen
      name="Earnings"
      component={Earnings}
      options={{
        drawerLabel: "Earnings",
        drawerIcon: () => (
          <View style={styles.contain}>
            <Button
              buttonStyle={{ backgroundColor: "white" }}
              title={Earnings}
              onPress={() => navigation.openDrawer("Earnings")}
              icon={
              <MaterialIcons name="attach-money" size={34} color="black" /> }
            />
          </View>
        ),
      }}
    />
      <Drawer.Screen
      name="Inventory"
      component={inventory}
      options={{
        drawerLabel: "Inventory",
        drawerIcon: () => (
          <View style={styles.contain}>
            <Button
              buttonStyle={{ backgroundColor: "white" }}
              title={inventory}
              onPress={() => navigation.openDrawer("inventory")}
              icon={
                <Entypo name="box" size={34} color="black" />
              }
            />
          </View>
        ),
      }}
    />
      <Drawer.Screen
      name="users"
      component={users}
      options={{
        drawerLabel: "Account",
        drawerIcon: () => (
          <View style={styles.contain}>
            <Button
              buttonStyle={{ backgroundColor: "white" }}
              title={users}
              onPress={() => navigation.openDrawer("users")}
              icon={
                <MaterialIcons name="person-outline" size={40} color="black" />
              }
            />
          </View>
        ),
      }}
    />
    <Drawer.Screen
      name="Help_Support"
      component={Help_Support}
      options={{
        drawerLabel: "Help_Support",
        drawerIcon: () => (
          <View style={styles.contain}>
            <Button
              buttonStyle={{ backgroundColor: "white" }}
              title={Help_Support}
              onPress={() => navigation.openDrawer("Help_Support")}
              icon={
              <Feather name="help-circle" size={40} color="black" />          
    }
            />
          </View>
        ),
      }}
    />
    <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={({ navigation }) => ({
            drawerLabel: "Log Out",
            drawerIcon: () => (
              <View style={styles.Screen}>
                <Button
                  buttonStyle={{ backgroundColor: "white"}}
                  onPress={signout}
                  icon={
                    <MaterialCommunityIcons
                      name="logout"
                      size={40}
                      color="black"
                    />
                  }
                />
              </View>
            ),
          })}
        />
    </Drawer.Navigator> 
    </NavigationContainer>
    
       )
    }
}
 
const styles = StyleSheet.create({
  container:{
      flex: 1, 
       backgroundColor: '#fff' 
    },
    iconleft:{
        //top:100,
        flexDirection:"row",
        left:"600%"
        //alignSelf:"center"
    },
    iconright:{
       // top:100,
        flexDirection:"row",
        right:"100%"
    },
    image: {
      width: 140,
      height: 60,
     // marginBottom:100,
    },
    header:{
      marginBottom:50,
    },
    
    
})