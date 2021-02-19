// import React, { Component } from "react";
// import { View, Text, StyleSheet } from "react-native";

// import { Icon, Header } from 'react-native-elements';


// // Shopping Cart Screen
// export default function Privacy() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Inventory</Text>
//       </View>
//     );
// }
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Benzedrex Nasal Decongestant Inhaler (1 oz)',
    ndc: '47390-0982', 
    img: require('./images/image2.png'),
    price: '$10.94',
    category: 'Prescription'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Benzedrex Nasal Decongestant Inhaler (1 oz)',
    ndc: '47390-0982', 
    img: require('./images/image2.png'),
    price: '$10.94',
    category: 'OTC'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Benzedrex Nasal Decongestant Inhaler (1 oz)',
    ndc: '47390-0982', 
    img: require('./images/image2.png'),
    price: '$10.94',
    category: 'OTC'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Benzedrex Nasal Decongestant Inhaler (1 oz)',
    ndc: '47390-0982', 
    img: require('./images/image2.png'),
    price: '$10.94',
    category: 'OTC'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Benzedrex Nasal Decongestant Inhaler (1 oz)',
    ndc: '47390-0982', 
    img: require('./images/image2.png'),
    price: '$10.94',
    category: 'OTC'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Benzedrex Nasal Decongestant Inhaler (1 oz)',
    ndc: '47390-0982', 
    img: require('./images/image2.png'),
    price: '$10.94',
    category: 'OTC'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Benzedrex Nasal Decongestant Inhaler (1 oz)',
    ndc: '47390-0982', 
    img: require('./images/image2.png'),
    price: '$10.94',
    category: 'OTC'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Benzedrex Nasal Decongestant Inhaler (1 oz)',
    ndc: '47390-0982', 
    img: require('./images/image2.png'),
    price: '$10.94',
    category: 'OTC'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Benzedrex Nasal Decongestant Inhaler (1 oz)',
    ndc: '47390-0982', 
    img: require('./images/image2.png'),
    price: '$10.94',
    category: 'OTC'
  },
];

const categoryList = [
  {label: 'All (default)', value: 'all'},
  {label: 'Allergy, Asthma, & Sinus', value: 'Allergy, Asthma, & Sinus'},
  {label: 'Cough, Cold & Flu', value: 'Cough, Cold & Flu'},
  {label: 'Diabetic Care', value: 'Diabetic Care'},
]
const subcategoryList = [
  {label: 'Nasal spray', value: 'nasal spray'},
  {label: 'Antihistamines', value: 'antihistamines'},
]

const typeList = [
  {label: 'Prescription', value: 'prescription'},
  {label: 'OTC', value: 'otc'},
]

const sortbyList = [
  {label: 'Alphabetical', value: 'alpha'},
  {label: 'By NDC', value: 'ndc'},
]

const renderItem = ({item}) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.cardInfo}>
      <Image style={styles.cardImage} source={item.img} resizeMode='contain'/>
      <View style={styles.cardRightSide}>
        <View style={styles.cardTitle}>
          <Text style={{fontFamily: 'Amiko-Bold'}}>{item.title}</Text>
        </View>
        <View style={styles.cardNDCandOTC}>
          <Text style={styles.ndcText}>{item.ndc}</Text>
          {item.category == 'Prescription'? <Text style={[styles.categoryText, {backgroundColor: '#F4C4BA'}]}>{item.category}</Text>: <Text style={styles.categoryText}>{item.category}</Text>}
        </View>
      </View>
    </View>
    <View style={styles.separator} />
    <View style={styles.price}>
      <Text style={{color: '#7198D4', fontFamily: 'Amiko-SemiBold', alignSelf: 'center'}}>{item.price}</Text>
    </View>
  </TouchableOpacity>
);

export default class Inventory extends Component {

  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>

              <Text style={styles.name}>
                Inventory
              </Text>

              <TouchableOpacity style={{marginLeft: 'auto', flexDirection: 'row', backgroundColor: '#FB9B7A', alignItems: 'center', borderRadius: 5}}>
                <Icon name="plus" size={20} color="#fff" style={{padding: 5,}}/>
                <Text style={{color: '#fff', fontSize: 15, fontFamily: 'Amiko-Bold', marginHorizontal: 5, textAlign: 'center'}}>Add Medicine</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topbar}>
            <View style={styles.leftTopbar}>
              {/* Category dropdown */}
              <DropDownPicker
                    items={categoryList}
                    defaultValue={null}
                    placeholder='Category'                  
                    containerStyle={{marginLeft: 15, height: 40, width:150, maxWidth: 150, flex:1}}
                    style={{backgroundColor: '#fff', flex:1}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                        flex: 1
                    }}
                    dropDownStyle={{backgroundColor: '#fff', fontFamily: 'Amiko-Regular'}}
                    onChangeItem={item => this.setState({
                        category: item.value
                    })}
                    selectedLabelStyle={styles.dropdownlabelText}
                    labelStyle={styles.dropdownlabelText}
                    searchable={true}
                    searchableStyle={{flex:1, fontFamily: 'Amiko-Regular', fontSize: 10}}
              />
              {/* Subcategory dropdown */}
              <DropDownPicker
                    items={subcategoryList}
                    defaultValue={null}
                    placeholder='Subcategory'                  
                    containerStyle={{marginLeft: 15, height: 40, width:150, maxWidth: 150, flex:1}}
                    style={{backgroundColor: '#fff', flex:1}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                        flex: 1
                    }}
                    dropDownStyle={{backgroundColor: '#fff', fontFamily: 'Amiko-Regular'}}
                    onChangeItem={item => this.setState({
                        category: item.value
                    })}
                    selectedLabelStyle={styles.dropdownlabelText}
                    labelStyle={styles.dropdownlabelText}
                    searchable={true}
                    searchableStyle={{flex:1, fontFamily: 'Amiko-Regular', fontSize: 10}}

              />
              {/* Type dropdown */}
              <DropDownPicker
                    items={typeList}
                    defaultValue={null}
                    placeholder='Type'                  
                    containerStyle={{marginLeft: 15, height: 40, width:100, maxWidth: 100, flex:1}}
                    style={{backgroundColor: '#fff', flex:1}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                        flex: 1
                    }}
                    dropDownStyle={{backgroundColor: '#fff', fontFamily: 'Amiko-Regular'}}
                    onChangeItem={item => this.setState({
                        category: item.value
                    })}
                    selectedLabelStyle={styles.dropdownlabelText}
                    labelStyle={styles.dropdownlabelText}
                    searchable={true}
                    searchableStyle={{flex:1, fontFamily: 'Amiko-Regular', fontSize: 10, width: 100}}

              />
              {/* Sortby dropdown */}
              <DropDownPicker
                    items={sortbyList}
                    defaultValue={null}
                    placeholder='Sort by'                  
                    containerStyle={{marginLeft: 15, height: 40, width:100, maxWidth: 100, flex:1}}
                    style={{backgroundColor: '#fff', flex:1}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                        flex: 1
                    }}
                    dropDownStyle={{backgroundColor: '#fff', fontFamily: 'Amiko-Regular'}}
                    onChangeItem={item => this.setState({
                        category: item.value
                    })}
                    selectedLabelStyle={styles.dropdownlabelText}
                    labelStyle={styles.dropdownlabelText}
                    searchable={true}
                    searchableStyle={{flex:1, fontFamily: 'Amiko-Regular', fontSize: 10, width: 100}}

              />
            </View>
            <View style={styles.rightTopbar}>
              <SearchBar
                placeholder="Search"
                onChangeText={this.updateSearch}
                value={this.state.search}
                lightTheme={true}
                inputStyle={{fontFamily: "Amiko-Regular", fontSize: 12, borderColor: '#fff', maxHeight: 30, maxWidth: 90, padding: 0}}
                inputContainerStyle={{maxHeight: 30, maxWidth: 150, margin: 0, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E2E2E2', borderBottomWidth: 1, padding: 0}}
                containerStyle={{padding: 0, backgroundColor: '#fff', flex: 1, paddingBottom: 0, borderTopWidth:0, borderBottomWidth: 0}}
                
              />
              <TouchableOpacity>
                <Icon name="align-justify" size={20} color="#AEAEAE" style={{padding: 5}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <Icon name="grid" size={20} color="#AEAEAE" style={{padding: 5}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <FlatList style={{margin:5, flex:1}}
              data={DATA}
              numColumns={3}
              keyExtractor={(item, index) => item.id }
              renderItem={renderItem}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header:{
    backgroundColor: "#FFF",
  },
  headerContent:{
    padding:30,
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:30,    
    fontWeight:"700",
    fontFamily:"Amiko-Regular" },
  topbar: {
    flex: 1,
    maxHeight: 50,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftTopbar: {
    flex: 1,
    flexDirection: 'row'
  },
  rightTopbar: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: 250,
    // alignSelf: 'flex-end',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  bodyContent:{
    paddingTop:40,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox:{
    backgroundColor: "#fff",
    width:100,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  icon: {
    width:60,
    height:60,
  },
  info:{
    fontSize:22,
    color: "#696969",
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10,
    margin: 10, 
  },
  price: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10
  },
  cardInfo: {
    flex: 3,
    flexDirection: 'row',
  },
  cardImage: {
    flex: 1,
    padding: 10, 
    width: "auto",
    height: '50%',
    alignSelf: 'center'
  },
  cardRightSide: {
    flex: 3,
    flexDirection: 'column',
    padding: 10,
  },
  cardTitle: {
    flex: 1,
    padding: 10,

  },
  cardNDCandOTC: {
    marginTop: 10,
    flex: 1, 
    flexDirection: 'row',
    padding: 10,
  },
  categoryText: {
    alignSelf: 'flex-end',
    // padding: 10,
    color: '#2E2E2E',
    backgroundColor: '#C9D7E4',
    borderRadius: 20,
    paddingHorizontal: 6,
    fontFamily: 'Amiko-SemiBold',
    fontSize: 12,
  },
  ndcText: {
    color:'#9C9EA3', 
    fontFamily: "Amiko-Regular", 
    fontSize: 13, 
    flex: 1,
    alignSelf: 'flex-end'
  },
  separator: {
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    
  },
  dropdownlabelText: {
    color: 'black',
    fontFamily: 'Amiko-Regular', 
    fontSize: 10
  }
});
 
