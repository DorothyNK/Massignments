
import { Text, View , StyleSheet,TextInput, TouchableOpacity} from "react-native"


const Index =() =>{
  return ( 
    <View style ={styles.parent}>
   
  <Text style ={styles.text}> Welcome to my Login Page👋</Text>
  <TextInput style={styles.ptext} placeholder="Please enter your name....."
  /> <TextInput style={styles.ptext1} placeholder="Please enter your password"

  />
 
  <TouchableOpacity>
     <Text style ={styles.text1}> Login</Text>
  </TouchableOpacity>

  </View>
  
  ) 
}
  export default Index


const styles = StyleSheet.create ({

  parent:{
  
   
    
  },
  text: {
    color: 'blue',
    fontFamily: 'bold',
    fontSize : 23,
    marginLeft: 10,
    marginTop: 160,
    alignSelf: 'center',

    

  },

  ptext: {
    paddingLeft:40,
    marginTop: 30, 
    borderWidth: 1,
    marginRight : 60,
    marginLeft: 50,
    padding: 10,
    fontSize: 15,  
    borderRadius: 10,
    
  },

   ptext1: {
    paddingLeft:40,
    marginTop: 30,
    borderWidth: 1,
    marginRight : 60,
    marginLeft: 50,
    padding: 10,
    fontSize: 15,  
    borderRadius: 10,
    
  },

    text1: {
    color: 'blue',
    fontFamily: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius : 11,
    fontSize : 17,
    marginLeft: 150,
    padding: 6,
    marginRight :150,
    marginTop: 23,
    backgroundColor: 'violet',
    marginBottom: 60,
    
   
    

  },




  

  
  

  
  


});

