import React from "react";
import { Button } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../Screens/Homescreen";
import WelcomeScreen from "./WelcomeScreen";
import Forgot_Password from "./Forgot__Password";
import Reset_Password from "./Reset_Passowrd";
import RegisterScreen from "./RegisterScreen";
import LookUpPharmacy from "./LookUpPharmacy";
import Verification from "./Verification";
import InsuranceQuestion from "./InsuranceQuestion";
import EnterPharamcyDetails from "./EnterPharmacyDetails";
import Terms from "./Terms";
import Verification2 from "./Verification2";
import Complete from "./Complete";
import Success from "./Success";

const Stack = createStackNavigator();
const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        headerShown: false,
        title: "Sign In",
        headerTitleStyle: {
          color: "black",
          fontFamily: "Amiko-Bold",
          fontSize: 25,
        },
        headerTintColor: "#EA8867",
      }}
    />
    <Stack.Screen name="Forgot_Password" component={Forgot_Password}  options={{ headerShown: false }}/>
    <Stack.Screen name="Reset_Password" component={Reset_Password}  options={{ headerShown: false }}/>
    <Stack.Screen name="Success" component={Success}  options={{ headerShown: false }}/>
   <Stack.Screen name="Register Screen" component={RegisterScreen}  options={{ headerShown: false }}/>
   <Stack.Screen name="LookUpPharmacy" component={LookUpPharmacy}  options={{ headerShown: false }}/>
   <Stack.Screen name="EnterPharmacyDetails" component={EnterPharamcyDetails}  options={{ headerShown: false }}/>
   <Stack.Screen name="InsuranceQuestion" component={InsuranceQuestion}  options={{ headerShown: false }}/>
   <Stack.Screen name="Terms and agreement" component={Terms}  options={{ headerShown: false }}/>
   <Stack.Screen name="Verification" component={Verification}  options={{ headerShown: false }}/>
   <Stack.Screen name="Verification2" component={Verification2}  options={{ headerShown: false }}/>
   <Stack.Screen name="Complete" component={Complete}  options={{ headerShown: false }}/>

  </Stack.Navigator>
);
export default Navigator;
