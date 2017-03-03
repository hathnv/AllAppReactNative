import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class AsyncAwait extends Component {

  func01 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("func01"),
          resolve(true)
      }, 5000);
    });
  }

  func02 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("func02"),
          resolve(false)
      }, 1000);
    });
  }

  onDoAsyncAwait = async () => { // async func () {}
    const func1 = await this.func01(); // tra ve obj Promise
    console.log(func1);
    const func2 = await this.func02();
    console.log(func2);

  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Do AsyncAwait"
          onPress={this.onDoAsyncAwait}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AsyncAwait', () => AsyncAwait);
