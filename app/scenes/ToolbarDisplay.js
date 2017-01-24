import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  ToolbarAndroid
} from 'react-native'
  
export default class ToolbarDisplay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
      		title="Refactory"
          titleColor= 'white'
      		style={styles.toolbar} />
          <View style={{alignItems: 'center', justifyContent:'center'}}>
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
   	height: 50,
    backgroundColor: 'skyblue',
  },
});