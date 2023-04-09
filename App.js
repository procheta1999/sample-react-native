import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import NewPage from './NewPage';
import Name from './Name';

export default function App() {
  const [count, setCount]= useState(0);
  const onClick=()=>{
    setCount(count+1);
  }
  const onRefresh=()=>{
    setCount(0);
  }
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title="Click Me" onPress={onClick}/>
      <Text>The button has been clicked {count} times</Text>
      <Button title="Refresh" onPress={onRefresh} disabled={count==0}/>
      <NewPage/>
      <Name name="Procheta"/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
