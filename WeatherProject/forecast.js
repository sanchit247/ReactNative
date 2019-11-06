import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class Forecast extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.mainText}>City : {this.props.city}</Text>
                <Text style={styles.descText}>Visibility : {this.props.description}</Text>
                <Text style = {styles.temp}>Temperature: {Number((this.props.temp -32) * 5/9).toFixed(1)} C</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:100,
        marginTop:10,
       
    },
    mainText:{
        flex:1,
        textAlign:"center",
    },
    descText:{
        flex:1,
        textAlign:"center",
    },
    temp:{
        flex:1,
        textAlign:"center",
    },
  
  });

export default Forecast