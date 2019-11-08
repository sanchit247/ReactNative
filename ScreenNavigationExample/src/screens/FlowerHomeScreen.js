import React from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const FlowerData = [
    {flowerPic:"Rose", flowerName:"Rose",flowerId:"1",},
    {flowerPic:"Marigold", flowerName:"Marigold",flowerId:"2",},
    {flowerPic:"Sunflower", flowerName:"Sunflower",flowerId:"3",},
    {flowerPic:"Rose", flowerName:"Rose2",flowerId:"4",},
    {flowerPic:"Marigold", flowerName:"Marigold2",flowerId:"5",},
    {flowerPic:"Sunflower", flowerName:"Sunflower2",flowerId:"6",},
    
];
const FlowerListCell = (props) =>{
    let imgUrl;
    if (props.flowerId == "1" || props.flowerId == "4"){
        imgUrl = require('../../src/img/Rose.jpeg');
    }
    else{
        if (props.flowerId == '2' || props.flowerId == '5'){
            imgUrl = require('../../src/img/Marigold.jpeg');
        }
        else{
            imgUrl = require('../../src/img/Sunflower.jpeg');
        }
    }
    return(
        <TouchableOpacity
            onPress={()=> props.navigation.navigate('FlowerDetail',{
                flowerName:props.flowerName,
            })}
        >
            <View style={styles.container}>
                <Image  source={imgUrl} style={[styles.flowerCellImg, styles.alignVerticleCenter]}/>
                <Text style={[styles.alignVerticleCenter,styles.flowerCellText]}>{props.flowerName}</Text>
            </View>
        </TouchableOpacity>
    );
};
const FlowerHomeScreen = (props) =>{
    return(
        <SafeAreaView>
            <FlatList 
                keyExtractor = {flower => flower.flowerId}
                style = {styles.flowerFlatList}
                data = {FlowerData}
                renderItem = {({item}) => <FlowerListCell flowerName = {item.flowerName} flowerPic = {item.flowerPic} navigation={props.navigation} flowerId={item.flowerId} />}
            />
        </SafeAreaView>
    );
    
};

const styles = StyleSheet.create({
    flowerFlatList:{
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        paddingTop:15,
    },
    container:{
        width:"90%",
        height:70,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:5,
        marginBottom:15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        backgroundColor:"white",
        flexDirection:"row",
    },
    flowerCellText:{
        marginLeft:20,
    },
    flowerCellImg:{
        height:60,
        width:60,
        resizeMode:"contain",
        marginLeft:5,
       
    },
    alignVerticleCenter:{
        marginTop:"auto",
        marginBottom:"auto",
    },
});

export default FlowerHomeScreen;