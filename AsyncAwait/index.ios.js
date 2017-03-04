import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Animated
} from 'react-native';

export default class AsyncAwait extends Component {

  state = {
    box1Value: new Animated.Value(0),
    box2Value: new Animated.Value(100)
  }

  // func01 = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log("func01"),
  //         resolve(true)
  //     }, 5000);
  //   });
  // }

  // func02 = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log("func02"),
  //         resolve(false)
  //     }, 1000);
  //   });
  // }

  moveBox1 = async () => {
    return new Promise((resolve, reject) => {
      Animated.timing(
        this.state.box1Value,
        {
          toValue: 100,
          duration: 3000
        }
      ).start(() => {
        console.log("moveBox1");
        resolve(true);
      });
      reject(false);
    });
  }

  moveBox2 = async () => {
    return new Promise((resolve, reject) => {
      Animated.timing(
        this.state.box2Value,
        {
          toValue: 200,
          duration: 1000
        }
      ).start(() => {
        console.log("moveBox2");
        resolve(true);
      });
    });
  }

  onDoAsyncAwait = async () => { // async func () {}
    // const func1 = this.func01(); // tra ve obj Promise

    // const func2 = this.func02();

    // console.log(await func1);
    // console.log(await func2);

    try {
      let url_1 = await fetch('https://jsonplaceholder.typicode.com/users');

      let url_2 = await fetch('https://jsonplaceholder.typicode.com/albums');

      // await this.moveBox1();
      // await this.moveBox2();

      Promise.all([url_1, url_2]).then(result => console.log(result));

    } catch (err) {
      console.log(err);
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box1, { top: this.state.box1Value }]} />
        <Animated.View style={[styles.box2, { top: this.state.box2Value }]} />
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
    backgroundColor: '#F5FCFF',
  },
  box1: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    left: 0
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  }
});

AppRegistry.registerComponent('AsyncAwait', () => AsyncAwait);
