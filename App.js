import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'}}
          style={{width: 400, height: 400}}
        />
        <Text>
          Hello World, React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
