import * as React from 'react';
import { Modal, Portal, Button, Provider,RadioButton } from 'react-native-paper';
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);
      const [checked, setChecked] = React.useState('first');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle1 = {backgroundColor: 'white',  padding: "11%", marginHorizontal:"35%",};

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle1}>
        
        <View style={styles.row3}>
                   <Text style={{fontFamily:"Amiko-Bold", fontSize:20,color:"white",textAlign:"center"}}>Delete account</Text>
                   <Text style={{fontFamily:"Amiko-Bold", fontSize:18,color:"white",textAlign:"center"}}>Are you sure you want to delete your account?</Text>
                 </View>   
                 <View style={{marginVertical:1"1%" left:"10.5%"}}> 
          <RadioButton
             value="first"
             status={ checked === 'first' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('first')}
            />    
            <View  style={{left:40, bottom:30}}><Text style={styles.text1}>Email pharmacy@gmail.com</Text></View>
            </View>
            <View style={{marginVertical:1"1%", left:"10.5%"}}> 
          <RadioButton
             value="first"
             status={ checked === 'first' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('first')}
            />    
            <View  style={{left:40, bottom:30}}><Text style={styles.text1}>Email pharmacy@gmail.com</Text></View>
            </View>
            <View style={{marginVertical:1"1%", left:"10.5%"}}> 
          <RadioButton
             value="first"
             status={ checked === 'first' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('first')}
            />    
            <View  style={{left:40, bottom:30}}><Text style={styles.text1}>Email pharmacy@gmail.com</Text></View>
            </View>
            <View style={{marginVertical:1"1%", left:"10.5%"}}> 
          <RadioButton
             value="first"
             status={ checked === 'first' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('first')}
            />    
            <View  style={{left:40, bottom:30}}><Text style={styles.text1}>Email pharmacy@gmail.com</Text></View>
            </View>
        
        </Modal>
      </Portal>
      <Button style={{marginVertical: "1%"}} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
};
const styles = StyleSheet.create({
  row3: {
    borderColor: '#DCDCDC',
    width:"300%",
    height:"40%",
    bottom:"100%",
    right:"100%",
    borderBottomWidth: 1,
    textAlign:"center",
    backgroundColor:"#FB9B7A",
  },
  buttonsContainer4: {
    flexDirection: "row",
    position: "absolute",
    bottom: "12%",
    left:"38%",
    padding: [13, 0, 0, 4],
    width: 100,
    height: 47,
    backgroundColor: "#6396E3",
    borderRadius: 5,
    justifyContent: "center",
  },
  login: {
    width: "45%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    //backgroundColor: "rgba(130,130,130,1)",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    // fontFamily: "Amiko",
    fontSize: 12,
    fontWeight: "bold",
   // lineHeight: 20,
  },
})

export default MyComponent;