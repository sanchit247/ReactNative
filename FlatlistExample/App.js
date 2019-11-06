/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  
} from 'react-native/Libraries/NewAppScreen';

import UserTable from './userTable/userTable';
const App = () => {

  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor = {"#f9c22f"}/> */}
      <SafeAreaView>
      
        <View style = {styles.container}>
        <StatusBar backgroundColor={'red'} barStyle={'dark-content'} translucent={false} />
          <UserTable/>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    
  },
  statusBar:{
    backgroundColor:"#f9c22f",
  },
  seperator:{
    height:1,
    width:"80%",
    marginRight:"auto",
    backgroundColor:"black",
  }
});

export default App;
