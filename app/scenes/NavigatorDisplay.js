import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight, StyleSheet } from 'react-native';

export default class NavigatorDisplay extends Component {
  render() {
  //create route here
  const routes = [
    {title: 'Welcome to Refactory!', index: 0},
    {title: 'Do you have any question???', index: 1},
    {title: 'Please contact us at refacory.id', index: 2},
    {title: 'or wanna send e-mail???', index: 3},
    {title: 'We are here: help@refactory.id', index: 4},
    {title: "THANK YOU ~('0'~)   (~'0')~", index: 5},
  ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            }

            else if (route.index === 1) {
              navigator.push(routes[2]);
            }

            else if (route.index === 2) {
              navigator.push(routes[3]);
            }

            else if (route.index === 3) {
              navigator.push(routes[4]);
            }

            else if(route.index === 4) {
              navigator.push(routes[5]);
            } 

            else {
              navigator.popToTop();
            }
          }}>
          <Text style={styles.text}>{route.title}</Text>
          </TouchableHighlight>
        }
        style={styles.nav}
      />
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'red',
    padding: 30
  },
  text: {
    color: 'skyblue',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})