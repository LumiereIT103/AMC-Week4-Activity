import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
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
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;