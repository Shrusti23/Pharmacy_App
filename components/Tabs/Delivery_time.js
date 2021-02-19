import React from "react";

import SearchableDropdown from "react-native-searchable-dropdown";


const date = new Date();

  var hour = date.getHours();

  var TimeType = '';
  var TimeType1 = '';
  var TimeType2  = ''
  var TimeType3 = '';
  var TimeType4 = '';
  if(hour <= 7)
    {
 
      TimeType = 'am';
      TimeType1 = 'am';
      TimeType2 = 'am';
      TimeType3 = 'am';
      TimeType4 = 'am';
 
    }
    else if (hour === 8) {
 
      // If the Hour is Not less than equals to 11 then Set the Time format as pm.
      TimeType = 'am';
      TimeType1 = 'am';
      TimeType2 = 'am';
      TimeType3 = 'am';
      TimeType4 = 'pm';
 
    }
    else if (hour === 9) {
      TimeType = 'am';
      TimeType1 = 'am';
      TimeType2 = 'am';
      TimeType3 = 'pm';
      TimeType4 = 'pm';
    }
    else if (hour === 10) {
        TimeType = 'am';
        TimeType1 = 'am';
        TimeType2 = 'pm';
        TimeType3 = 'pm';
        TimeType4 = 'pm';
      }
    else if (hour === 11) {
        TimeType = 'am';
        TimeType1 = 'pm';
        TimeType2 = 'pm';
        TimeType3 = 'pm';
        TimeType4 = 'pm';
      }
    else {
        TimeType = 'pm';
        TimeType1 = 'pm';
        TimeType2 = 'pm';
        TimeType3 = 'pm';
        TimeType4 = 'pm';
    }



 
 
    // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
    if( hour > 12 )
    {
      hour = hour - 12;
      if(hour <= 7)
        {
    
            TimeType = 'pm';
            TimeType1 = 'pm';
            TimeType2 = 'pm';
            TimeType3 = 'pm';
            TimeType4 = 'pm';
    
        }
        else if (hour === 8) {
    
        // If the Hour is Not less than equals to 11 then Set the Time format as pm.
            TimeType = 'pm';
            TimeType1 = 'pm';
            TimeType2 = 'pm';
            TimeType3 = 'pm';
            TimeType4 = 'am';
    
        }
        else if (hour === 9) {
            TimeType = 'pm';
            TimeType1 = 'pm';
            TimeType2 = 'pm';
            TimeType3 = 'am';
            TimeType4 = 'am';
        }
        else if (hour === 10) {
            TimeType = 'pm';
            TimeType1 = 'pm';
            TimeType2 = 'pm';
            TimeType3 = 'am';
            TimeType4 = 'am';
        }
        else if (hour === 11) {
            TimeType = 'pm';
            TimeType1 = 'am';
            TimeType2 = 'am';
            TimeType3 = 'am';
            TimeType4 = 'am';
        }
        else {
            TimeType = 'am';
            TimeType1 = 'am';
            TimeType2 = 'am';
            TimeType3 = 'am';
            TimeType4 = 'am';
        }
    }
 
    // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format. 
    if( hour == 0 )
    {
        hour = 12;
    } 
var items = [
  //name key is must.It is to show the text in front
  { id: 1, name: `${hour}${TimeType}-${(hour+1)%12}${TimeType1} ` },
  { id: 2, name: `${(hour + 1) % 12}${TimeType1}-${(hour + 2) % 12}${TimeType2} ` },
  { id: 3, name: `${(hour + 2) % 12}${TimeType2}-${(hour + 3) % 12}${TimeType3} ` },
  { id: 4, name: `${(hour + 3) % 12}${TimeType3}-${(hour + 4) % 12}${TimeType4} ` },
];

const DeliveryTime = () => (
  <SearchableDropdown
    //On text change listener on the searchable input
    onItemSelect={(item) => alert(JSON.stringify(item))}
    //onItemSelect called after the selection from the dropdown
    containerStyle={{ paddingLeft: 75, paddingTop: 15, width:"18%" }}
    //suggestion container style
    textInputStyle={{
      //inserted text style
      padding: 6,
      borderWidth: 1,
      borderColor: "#ccc",
      backgroundColor: "#FAF7F6",
      borderRadius: 20
    }}
    itemStyle={{
      //single dropdown item style
      padding: 10,
      marginTop: 2,
      backgroundColor: "#F57C00",
      borderColor: "#bbb",
      borderWidth: 1,
      borderRadius: 20

    }}
    itemTextStyle={{
      //text style of a single dropdown item
      color: "#222",
    }}
    itemsContainerStyle={{
      //items container style you can pass maxHeight
      //to restrict the items dropdown hieght
      maxHeight: "60%",
    }}
    items={items}
    //mapping of item array
    placeholder=" Not Selected"
    //place holder for the search input
    resetValue={false}
    //reset textInput Value with true and false state
    underlineColorAndroid="transparent"
    //To remove the underline from the android input
  />
);

export default DeliveryTime;
