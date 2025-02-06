import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Clean the floor of your room',
  },
  {
    id: '2',
    title: 'Water the Plants',
  },
  {
    id: '3',
    title: 'Doom Scroll for 2 hours',
  },
  {
    id: '4',
    title: 'Eat your Breakfast',
  },
  {
    id: '5',
    title: 'Manood ng Movies',
  },
  {
    id: '6',
    title: 'Tumunganga',
  },
  {
    id: '7',
    title: 'Manood ng Movies',
  },
 
];

const DATA1 = [
   {
    id: '8',
    title: 'Kumain Tanghalian',
  },
  {
    id: '9',
    title: 'magbantay Tindahan',
  },
  {
    id: '10',
    title: 'Pagmasdan yung halaman',
  },
  {
    id: '11',
    title: 'Pakialaman yung Halaman ',
  },
  {
    id: '12',
    title: 'Mangulit ng tao',
  },
  {
    id: '13',
    title: 'Mag ML',
  },
  {
    id: '14',
    title: 'Maligo ',
  },
]
const DATA2 = [
   {
    id: '15',
    title: 'Kumain Tanghalian',
  },
  {
    id: '16',
    title: 'Mangupal',
  },
  {
    id: '17',
    title: 'Kumain',
  },
  {
    id: '18',
    title: 'Manginis',
  },
  {
    id: '19',
    title: 'Tignan Halaman',
  },
  {
    id: '20',
    title: 'Pray',
  },
  {
    id: '21',
    title: 'Ml ',
  },
  {
    id: '22',
    title: 'Review',
  },
  {
    id: '23',
    title: 'Hilamos ',
  },
  {
    id: '24',
    title: 'Tulog',
  },
  {
    id: '25',
    title: 'Maligo ',
  },
]

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>   
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Morning </Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.header}> Tanghali </Text>
      <FlatList
        data={DATA1}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.header}> Gabi </Text>
      <FlatList
        data={DATA2}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    textAlign:'center',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderStyle:'solid',
    borderWidth: 2,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default App;