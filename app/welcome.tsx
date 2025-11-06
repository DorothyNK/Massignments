import { Link } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View, Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Index = () => {
  
  return (
    <SafeAreaView style={styles.parent}>
      <View>
        <Text style={styles.text}>Welcome back!
        </Text>

        <Text style={styles.subtext}>
          Sign in to pick up where you left off.
        </Text>
          <TextInput
          style={styles.phone}
          placeholder="Phone number"
          placeholderTextColor= 'grey' />

        <TextInput
          style={styles.pass}
          placeholder="Password" 
          placeholderTextColor='grey' />

        <View style={styles.fp}>
          <Text style={styles.lasttext}>Forgot password?</Text>
          <Text style={styles.reset}>Reset</Text>
        </View>

        <View style={styles.linecontainer}>
        <View style={styles.line}></View>
         <Text style={styles.ortext}>or</Text>
          <View style={styles.line}></View>
          </View>

        <TouchableOpacity style={styles.google}>
         <Image
          source={require("../assets/images/google.png")}
          style={styles.gicon}/>
          <Text style={styles.googletext}> Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebook}>
          <Image
          source={require("../assets/images/facebook.png")}
          style={styles.ficon}/>
          <Text style={styles.facebooktext}>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.login}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>

         <View style={styles.account}>
        <Text style={styles.accounttext}>Don't have an account?</Text>
        <Text style={styles.signuptext}>Signup</Text>
      </View>
      </View>

     <TouchableOpacity>
          <Link href= {'/'}style ={styles.text1}> Home Page</Link>
       </TouchableOpacity>
      
          

        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  parent: {
    marginTop: 46,
  },


  text: {
    fontWeight: '800',
    fontSize: 27,
    letterSpacing: 0.4,
    marginLeft: 25,
    marginBottom: 7,
  },
  subtext: {
    color: "grey",
    fontSize: 13.5,
    marginLeft: 25,
    marginBottom: 53,
  },
  phone: {
    padding: 16, 
    marginLeft: 25, 
    marginRight: 39, 
    borderRadius: 6, 
    marginBottom: 14, 
    borderWidth: 1, 
    borderColor: "white", 
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)', 
    backgroundColor: 'white', 
    fontSize: 12.5, 
    fontWeight:'400',
    
  },
  pass: {
    padding: 16,
    marginLeft: 25,
    marginRight: 39,
    borderRadius: 6,
    marginTop: 13,
    borderWidth: 1,
    borderColor: "white",
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    fontSize: 12.5,
    fontWeight:'400',
  },

  lasttext: {
    fontSize: 13.5,
    color: 'grey',
    fontWeight:'500',
    marginRight: 1.5,
   
  },
  reset: {
  fontSize: 12,
  color: "red",
  fontWeight: "800", 
  },

fp:{
 flexDirection: "row",
  justifyContent: "flex-end",
  width: "100%",
  paddingRight: 38,
  marginTop: 11,

},


  line: {
  flex: 1,
    height: 1.4,
    backgroundColor: 'black',
  },

  linecontainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginRight: 30,
    marginLeft: 20,

  },

  ortext:{
    marginHorizontal: 5,
    color: 'grey',
    fontSize: 12,
    fontWeight: "500",

  },

  google:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    marginLeft: 19,
    marginRight: 28,
    borderRadius:30,
    marginBottom: 22,
    marginTop: 26,
    borderWidth: 1,
    borderColor: "white",
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    
  },

   googletext: {
    fontWeight: "600",
    fontSize: 15,
  },

    gicon: {
    width: 21,
    height: 21,
    marginRight: 12,
    resizeMode: "contain",
  },

  facebook:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
     padding: 14,
    marginLeft: 19,
    marginRight: 28,
    borderRadius:30,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "white",
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },

   ficon: {
    width: 40,
    height: 25,
    marginRight: 10,
    resizeMode: "contain",
  },


 

  facebooktext: {
    fontWeight: "600",
    fontSize: 15,
  
  },

   login:{
    padding: 16,
    marginLeft: 20,
    marginRight: 30,
    borderRadius: 7,
    marginBottom: 14,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#1d3257',
    justifyContent:'center',
    alignItems:'center'
  },

  logintext:{
    fontWeight: "700",
    fontSize: 15,
    color:'white',
    
    
  },

  account:{
  flexDirection: "row",
  justifyContent: 'center',
  alignContent:'center',
  width: "100%",
  marginTop: 38,

  },

  accounttext:{
    fontSize: 16,
    color: 'grey',
    fontWeight:'400',
    marginRight: 2.4,

  },

  signuptext:{
    fontSize: 13,
  color: "#105de3",
  fontWeight: "600", 

  },


   text1: {
    color: 'blue',
    fontFamily: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    fontSize : 15,
    marginLeft: 150,
    marginRight :150,
    marginTop: 100,
    
  },

 
  
 
});

export default Index;



