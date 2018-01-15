import React, { Component } from 'react';
import styles from '../Stylesheets/dashboard';
import { Text, Image, View, TextInput, TouchableHighlight, ActivityIdicator } from 'react-native';

class Dashboard extends Component {
  static navigationOptions = ({navigation})=>({
    title: `${navigation.state.params.userInfo.name}`,
  });

  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      height: 80,
      flex: 1
    }

    if(btn === 0) {
      obj.backgroundColor = '#48BBEC'
    } else if(btn === 1) {
      obj.backgroundColor = '#E77AAE'
    } else {
      obj.backgroundColor = '#758BF4'
    }

    return obj
  }

  openProfile() {
    const { params } = this.props.navigation.state
    this.props.navigation.navigate('Profile', {userInfo: params.userInfo})
  }

  openRepos() {
    const { params } = this.props.navigation.state
    this.props.navigation.navigate('Repositories', {userInfo: params.userInfo})
  }

  openNotes() {
    const { params } = this.props.navigation.state
    this.props.navigation.navigate('AddNotes', {userInfo: params.userInfo})
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Image 
            style={styles.image} 
            source={{uri: params.userInfo.avatar_url}} />
        <TouchableHighlight
            style={this.makeBackground(0)}
            onPress={this.openProfile.bind(this)}
            underlayColor="#88D4F5">
            <Text style={styles.buttonText}> View profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={this.makeBackground(1)}
            onPress={this.openRepos.bind(this)}
            underlayColor="#88D4F5">
            <Text style={styles.buttonText}> Show Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={this.makeBackground(2)}
            onPress={this.openNotes.bind(this)}
            underlayColor="#88D4F5">
            <Text style={styles.buttonText}> Add Notes </Text>
        </TouchableHighlight>
      </View>
    )
  }
};

export default Dashboard
