import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ChatScreen from './screen/Chatscreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChatScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
  },
});

export default App;
