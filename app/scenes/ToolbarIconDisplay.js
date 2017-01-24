import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  ToolbarAndroid
} from 'react-native'
  
export default class ToolbarIconDisplay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
      		title="Refactory"
          logo={{uri: 'https://refactory.id/images/Refactory--logo-9-white-2.png', width: 150, height: 50}}
          titleColor= 'white'
      		style={styles.toolbar} />
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.image}
            source={{uri: 'https://refactory.id/images/Refactory--logo-9-white-2.png'}} />
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
 image: {
    width: 400,
    height: 170,
    margin: 50,
  },
  toolbar: {
   	height: 60,
    backgroundColor: 'skyblue',
  },
});