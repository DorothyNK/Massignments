
import { Text, View , StyleSheet,TextInput} from "react-native"


const Login =() =>{
  return ( 
    <View>
   
  <Text style ={styles.text}> Welcome to my login page </Text>
  <TextInput style={styles.ptext} placeholder="Please enter your name"/>
  
  

  </View>
  
  ) 
}
  export default Login


const styles = StyleSheet.create ({

  text: {
    color: 'blue',
    fontFamily: 'bold',
    fontSize : 10,

  },

  ptext: {
    padding:20,
    margin: 10,
    borderRadius: 10,
    
  },




  

  
  

  
  


});

