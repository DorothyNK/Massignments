import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Image, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EvilIcons from '@expo/vector-icons/EvilIcons';


const Whatsaap = () => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.parent}>
      
    <View>
      <Text style={{fontSize: 35,fontWeight:'bold', marginBottom: 10,}}>Chats</Text>

      <View style={{ flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(235, 231, 231, 1)",
    borderRadius: 12,
    marginRight: 22,

    paddingLeft:3,
    padding: 3, }}>
      <EvilIcons name="search" size={24} color="black" style={{width: 20, height: 20, 
      }} />  
      <TextInput style={{fontSize:17, padding:6, fontWeight:'400',

      }}
      placeholder='Ask Meta AI or Search'
      placeholderTextColor='grey'/>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
       <TouchableOpacity  style={{ width: 40, alignItems: "center", justifyContent: "center", padding: 5.5,
        borderRadius: 25, borderWidth: 0.5, borderColor:'grey', marginTop:20,}}>
         <Text style={{fontSize: 15, fontWeight:'600',marginRight:5, color:'grey'}}> All</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{width: 105, alignItems: "center", justifyContent: "center", padding: 6,
        borderRadius: 25, borderWidth: 0.5, borderColor:'grey', marginTop:20,}}>
         <Text style={{fontSize: 14, fontWeight:'600', marginRight:5, color:'grey'}}> Unread 250</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{ width: 105, alignItems: "center", justifyContent: "center", padding: 6,
        borderRadius: 25, borderWidth: 0.5, borderColor:'grey', marginTop:20,}}>
         <Text style={{fontSize: 14, fontWeight:'600', marginRight:5, color:'grey' }}> Favorites 20</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{ width: 105, alignItems: "center", justifyContent: "center", padding: 6,
        borderRadius: 25, borderWidth: 0.5, borderColor:'grey', marginTop:20,}}>
         <Text style={{fontSize: 14, fontWeight:'600', marginRight:5, color:'grey' }}> Groups 98</Text>
       </TouchableOpacity>
      </View>
     <View>
    <TouchableOpacity style={{marginTop:20,}} >
      <Text style={{fontSize:15, fontWeight:'600', marginBottom:2}}>NATIONAL BANK TAF'25</Text>
      <Text style={{color:'grey', fontWeight:'500',marginBottom:7}}>Baaba Otiwaa: Thank you very much🤗</Text>
    </TouchableOpacity>

    <View style={{ height: 0.2, backgroundColor: 'grey', marginRight: 10}}></View>


     <TouchableOpacity style={{marginTop:20,}} >
       
      <Text style={{fontSize:15, fontWeight:'600',marginBottom:2}}>Wonderful Ramseyer</Text>
      <Text style={{marginBottom:7}}>VP Felicia: You miss you loose oo ❗❗❗</Text>
    </TouchableOpacity>

<View style={{ height: 0.2, backgroundColor: 'grey', marginRight: 10}}></View>

    <TouchableOpacity style={{marginTop:20,}} >
      <Text style={{fontSize:16, fontWeight:'600',marginBottom:2}}> Makarios🤗</Text>
      <Text style={{marginBottom:7}}> Any3miiiii m3ni ok33??</Text>
    </TouchableOpacity>

    <View style={{ height: 0.2, backgroundColor: 'grey', marginRight: 10}}></View>


     <TouchableOpacity style={{marginTop:20,}} >
           
          <Text style={{fontSize:15, fontWeight:'600',marginBottom:2}}>TAF Ghana Nashnal & Rgnl</Text>
          <Text style={{marginBottom:7}}>Emmanuel: Please do well to join us for J-reach🙏</Text>
        </TouchableOpacity>

        <View style={{ height: 0.2, backgroundColor: 'grey', marginRight: 10}}></View>
    
        
        <TouchableOpacity style={{marginTop:20,}} >
           
          <Text style={{fontSize:15, fontWeight:'600', marginBottom:2}}>DCIT LEVEL 400</Text>
          <Text style={{marginBottom:7}}>Val: DCIT 312 results on mis❗❗❗</Text>
        </TouchableOpacity>
      
      <View style={{ height: 0.2, backgroundColor: 'grey', marginRight: 10}}></View>
        
        <TouchableOpacity style={{marginTop:20,}} >
           
          <Text style={{fontSize:16, fontWeight:'600', marginBottom:2}}>Deron Odei😊</Text>
          <Text style={{marginBottom:7}}> How are youuuu?</Text>
        </TouchableOpacity>
    
        <View style={{ height: 0.2, backgroundColor: 'grey', marginRight: 10}}></View>
        <TouchableOpacity style={{marginTop:20,}} >
           
          <Text style={{fontSize:15, fontWeight:'600', marginBottom:2}}>XCESS GRACEE</Text>
          <Text style={{marginBottom:7}}>GodsPraise: Hey Fam👋,Kindly join today's prayer meeting via the link above</Text>
        </TouchableOpacity>
        <View style={{ height: 0.2, backgroundColor: 'grey', marginRight: 10}}></View>
        <TouchableOpacity style={{marginTop:20,}} >
           
          <Text style={{fontSize:16, fontWeight:'600', marginBottom:2}}>Revised Ladies Caucus</Text>
          <Text style={{marginBottom:7}}>Sta Abii: The monday is elegantly sophisticated❤️️</Text>
        </TouchableOpacity>
    
        <View style={{ height: 0.2, backgroundColor: 'grey', marginRight: 10}}></View>
        
        
        <TouchableOpacity style={{marginTop:20 }} >   
          <Text style={{fontSize:16, fontWeight:'600',marginBottom:2}}>Claudiaaa✨</Text>
          <Text style={{marginBottom:7}} >Happy birthdayyyy girlll</Text>
        </TouchableOpacity>
    <View style={{ height: 0.2, backgroundColor: 'grey', marginRight: 10}}></View>
       
        <TouchableOpacity style={{marginTop:20}}>  
         <Text style={{fontSize:16, fontWeight:'600',marginBottom:2}}>Kurtiz Agyeman</Text>
          <Text>God bless you Kurtizz🙏</Text>
        </TouchableOpacity>


  
</View>
    
    </View>
    
    </SafeAreaView>
    </ScrollView>
    
  )
}

export default Whatsaap

const styles = StyleSheet.create({
   parent: {
   
    marginTop: 40,
    paddingLeft: 20,
    
    
    
  },

})