import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SellScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SellScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SellScreen;