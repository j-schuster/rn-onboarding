import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class EventsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>EventsScreen</Text>
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

export default EventsScreen;