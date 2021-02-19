
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/Screens/Homescreen";
import Navigator from "./components/InitialScreens/Navigator";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import AuthContext from "./components/authorization/reactContext";
export default function App() {
  const [user, setUser] = useState();


  let [fontsLoaded] = useFonts({
    "Amiko-Bold": require("./assets/fonts/Amiko-Bold.ttf"),
    "Amiko-Regular": require("./assets/fonts/Amiko-Regular.ttf"),
    "Amiko-SemiBold": require("./assets/fonts/Amiko-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1 }}>
    <AuthContext.Provider value={{ user, setUser }}>
    <NavigationContainer>
    {user ? <HomeScreen /> : <Navigator />}        
    </NavigationContainer>
    </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
