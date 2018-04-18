import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 40 }}>This will be a screen that shows a tutorial</Text>
        <Button title="proceed to auth" onPress={() =>  this.props.navigation.navigate('Main')}/>
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

export default WelcomeScreen;