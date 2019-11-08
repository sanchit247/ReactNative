import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';
const CreateRandomColor = () =>{
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255); 
    return `rgb(${red},${green},${blue})`;
};
const RandomColorsScreen =() => {
        const [colors,setColor] = useState([]);
        console.log(colors.length);
        return(
           <View style={styles.container}>
               <TouchableOpacity 
                onPress = {()=> setColor([...colors,CreateRandomColor()])}
                style={styles.addButton}
                >
                   <Text style={{ color:"white"}}>Add Color</Text>
               </TouchableOpacity>
               <FlatList
                keyExtractor = {() => {colors}}
                    data = {colors}
                    renderItem = {(color) => {
                       console.log(color.item);
                        return (
                            <View style={{width:100,height:100,backgroundColor:color.item,marginTop:10,}}></View>
                       )}
                    }
               />
           </View>
        );
};

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    addButton:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        backgroundColor:"rgb(0,123,255)",
        height:45,
        width:"80%",
    },
});
export default RandomColorsScreen;