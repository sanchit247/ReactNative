
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]

  function UserDetailCell({title}){
      return (
            <TouchableOpacity style = {styles.userDetailCell} onPress = {() => Alert.alert(title)}>
                <Text style = {styles.title}>{title}</Text>
            </TouchableOpacity>
      );
  }

  const UserTable = () => {
      return(
          <FlatList 
            style = {styles.userTable}
            data = {Data}
            renderItem = {({item}) => <UserDetailCell title = {item.title}/>}
            keyExtractor={item => item.id}
          />
      );
  }

  const styles = StyleSheet.create({
    userDetailCell:{
        backgroundColor: '#f9c22f',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    userTable:{
        flex: 1,
        backgroundColor:"#c9a21f",
    },
    seperator:{
      height:1,
      width:"80%",
      marginRight:"auto",
      backgroundColor:"black",
    },
    title: {
        fontSize: 20,
      },
  });

  export default UserTable