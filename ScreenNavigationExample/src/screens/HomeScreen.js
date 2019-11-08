import React from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
class HomeScreen extends React.Component {
    render(){
        return(
            <View>
                <TouchableOpacity 
                    onPress = {() => this.props.navigation.navigate('FlowerHome') }
                    style={styles.screenNavigatorButton}>
                    <Text style={styles.txtScreen}>Flowers Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress = {() => this.props.navigation.navigate('RandomColor')}
                   style={styles.screenNavigatorButton}>
                    <Text style={styles.txtScreen}>Colors Screen</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    screenNavigatorButton:{
        marginTop:10,
        height:45,
        alignItems:"center",
    },
    txtScreen:{
        color:"blue",
        fontSize:22,
        padding:10,
    },
});
export default HomeScreen;