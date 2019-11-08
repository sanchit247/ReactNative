import React from 'react';
import {
    Text,
} from 'react-native';

class FlowerDetailScreen extends React.Component{
    render(){
        return(
            <Text>{this.props.navigation.getParam('flowerName')}</Text>
        );
    } 
}
export default FlowerDetailScreen