import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';

import Forecast from './forecast';
import OpenWeatherMap from "./open_weather_map";

class WeatherProject extends Component{
    constructor(props){
        super(props);
        this.state = {
            zip:"",
            foreCast:null,
        };
    }
    _handleTextChange = (event) => {
            let zip = event.nativeEvent.text;
            OpenWeatherMap.fetchForecast(zip).then(forecast => {
                this.setState({ foreCast: forecast }); 
                console.log(this.state)
            });
        };
    render(){
        let content = null;
        if (this.state.foreCast !== null){
            content = (
                <Forecast
                city = {this.state.foreCast.city}
                description = {this.state.foreCast.desc}
                temp = {this.state.foreCast.temp}
               />
            );
        }
        return(
            <SafeAreaView>
                <View> 
                    <ImageBackground style = {styles.backgroundImg} source={require('./flowers.png')}>
                        <View style={styles.overlay}>
                            <View style = {styles.container}>
                                <Text style = {styles.textLabel}>Current weather for: {this.state.zip}</Text>
                                <TextInput style = {styles.zipCode} selectionColor={"black"} onSubmitEditing = {this._handleTextChange}/>
                            </View>
                            {content}
                        </View>
                    </ImageBackground>
               </View>
            </SafeAreaView>
            
        );
    }
}
const styles = StyleSheet.create({
    backgroundImg:{
        resizeMode:"cover",
        backgroundColor:"red",
        height:"100%",

    },
    overlay:{
        backgroundColor:"#ffffff",
        opacity:0.5,
        height:200,
    },
    container:{
        
        marginTop:10,
       flexDirection:"row", 
        width:"90%",
        marginLeft:"auto",
        marginRight:"auto",
        
       
    },
    
    textLabel:{
        flex:3,
        textAlign:"center",
       
        padding:5,
    },
    zipCode:{
        borderWidth:1,
        borderBottomColor:"black",
        borderTopColor:"transparent",
        borderRightColor:"transparent",
        borderLeftColor:"transparent",
        flex:2,
        padding:5,
    },
  });
  
export default WeatherProject;