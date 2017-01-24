import React, {Component} from 'react'
import {
  Platform,
  Switch,
  Text,
  View,
  StyleSheet
} from 'react-native'

export default class SwitchDisplay extends Component {
  state = {
    eventSwitchIsOn: false
  };

  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.title}>
      	Switch Toggle</Text>
      	<Text style={styles.text}>
      	This is disabled toggle</Text>
        <Switch
          disabled={true}
          style={styles.switch}/>
        <Text style={styles.text}>
        This is enabled toggle</Text>
        <Text style={styles.text}>{this.state.eventSwitchIsOn ? 'Active' : 'Inactive'}</Text>
      	  <Switch
          onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
          style={styles.switch}
          value={this.state.eventSwitchIsOn}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: 'skyblue'
	},
	switch: {
	  	margin: 20,
	  	height: 100,
	},
	title: {
		fontSize: 50,
		color: 'red',
		marginBottom: 50,
		fontWeight: 'bold'
	},
	text: {
		margin: 10,
		fontSize: 20
	},
})