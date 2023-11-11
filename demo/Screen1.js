import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Input, Image, TextInput, TouchableOpacity } from 'react-native';
export default function Screen1() {
    const [show,setShow] = useState(1);
    const [data, setData] = useState([]);
    const [hover,setHover] = useState(0);
    useEffect(() => {
        fetch('https://6548892add8ebcd4ab230b71.mockapi.io/donus')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
    
            })
      }, []);

  return (
    <View style={styles.container}>
      <View style ={styles.header}>
        <Text style={{color:'grey', fontSize:19, marginLeft:20}}>Welcome Jala!</Text>
        <Text style={{color:'black', fontSize:25, fontWeight:'bold',marginLeft:20, marginTop:5}}>Choice you Best food</Text>
      </View>
        <TextInput style={styles.headerInput} placeholder='Search food'></TextInput>
        <View style={styles.bodytouch}>
            <TouchableOpacity style={{backgroundColor:hover===1?'#F1B000':'white'}} onMouseEnter={() => setHover(1)}  onMouseLeave={() => setHover(0)} >
                <Text style={styles.touch}>Donus</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:hover===2?'#F1B000':'white'}} onMouseEnter={() => setHover(2)}  onMouseLeave={() => setHover(0)}>
            <Text style={styles.touch}>Pink Donus</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:hover===3?'#F1B000':'white'}} onMouseEnter={() => setHover(3)}  onMouseLeave={() => setHover(0)}>
            <Text style={styles.touch}>Floating</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'column'}}>
        {data.map((item) => { return(
            <View style={{backgroundColor:'#F4DDDD',marginTop:15}}>
            <Image style={styles.img} source={{uri:item.image}}></Image> 
            <Text style={{color:'black', fontSize:15}}>{item.name}</Text>
            <Text style={{color:'black', fontSize:15}}>{item.detail}</Text>
            <Text style={{color:'black', fontSize:15}}>{item.price}</Text>
            <Image style={styles.icon} source={{uri:item.plus}}></Image> 

            </View>
        )})}
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    width:'100%',
    height:80
  },
  headerInput:{
    width:'80%',
    height:50,
    borderColor:'grey',
    borderWidth:1,
    marginLeft:20,
    color:'grey',
    padding:20
  },
  touch:{
      width:110,
      height:40,
      borderWidth:1,
      borderColor:'grey',
      borderRadius:10,
      fontWeight:'bold',
      fontSize:20,
      textAlign:'center',
      justifyContent:'center'
  },
  bodytouch:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:30,
      borderRadius:10,
  },
  img:{
      width:100,
      height:100
  },
  icon:{
    width:30,
    height:30,
    alignSelf:'flex-end'
}
});
