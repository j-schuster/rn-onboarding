import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AsyncStorage } from "react-native";

import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
//  async componentWillMount(){
//   AsyncStorage.removeItem('fb_token');

//  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AuthScreen</Text>
        <Button title="login with fb" onPress={() => this.props.facebookLogin()}/>
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

const mapStateToProps = ({ auth }) => {
  return {
    token: auth.token
  }
}

export default connect(mapStateToProps, actions)(AuthScreen);