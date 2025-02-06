import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
      <view style={styles.box}>
       <Text style={styles.text}> Pathrick Gian</Text> <Text style={styles.text1}>De Guzman </Text>
      </view>
       
        
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  box:{
    backgroundColor:'green',
    padding: 30,
    textAlign: 'center',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 10,
    borderStyle:'solid',
  },
   text: {
    fontWeight: 'bold',
    
  },
  text1: {
    fontStyle: 'italic',
  },
});

export default App;