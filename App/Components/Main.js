import React, { Component } from 'react';
import {Keyboard} from 'react-native'
import styles from '../Stylesheets/stylesheet';
import { getBiodata } from '../Utils/RestApiService';
import { Text, View, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: ''
    }
  }

  static navigationOptions = {
    title: 'Github Notetaker',
    headerTitleStyle: { alignSelf: 'center' },
  };

  handleChange(event) {
    this.updateState(event.nativeEvent.text, false, '');
  }

  updateState(username, isLoading, error) {
    this.setState({ username: username, isLoading: isLoading, error: error});
  }

  handleSubmit() {
    Keyboard.dismiss()
    this.updateState(this.state.username, true, '')

    if(this.state.username.length === 0){
      this.updateState('', false, 'Username is empty')
      return
    }
    getBiodata(this.state.username)
      .then((res) => {
        if(res.message === 'Not Found') {
          this.updateState(this.state.username, false, 'User not found')
        }
        else {
          this.props.navigation.navigate('Dashboard', {userInfo: res});
          this.updateState('', false, '')
        }
      })
  }

  render() {
    var showError = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Search for a github user</Text>
        <TextInput
          style={styles.search}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}></TextInput>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large"/>
        {showError}
      </View>
    );
  }
}
