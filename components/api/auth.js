import client from "./client";
//initial screen calls
const login = (email, password) =>
  client.post("/account/login", { email, password });
  
  const signup =(email,password) => client.post("account/signup", {email,password});

  const lookup=(email,name,npi,state,zipcode)=> client.post("account/lookup",{email,name,npi,state,zipcode});

  const addContact =(email,address,apartmentnumber,city,postalcode,countrycode,phonenumber,website)=>
  client.post("account/addContact",{email,address,apartmentnumber,city,postalcode,countrycode,phonenumber,website});

  // Store detail screen calls
  const address=( address,apartmentnumber,city,state,postalcode)=>client.put("account/address", 
  {address,apartmentnumber,city,state,postalcode});

  const phonenumber=(countrycode,phonenumber) => client.put("address/phonenumber", {countrycode,phonenumber});
  const website=(website)=>client.put("address/website", {website});
  export default {
    addContact,
    login,
    lookup,
    signup,
    address,
    phonenumber,
    website,
};
