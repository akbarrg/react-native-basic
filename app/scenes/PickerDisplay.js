import React, {Component} from 'react'
import {Text, Picker, StyleSheet, View, Image} from 'react-native'

export default class PickerDisplay extends Component {
	state = {
    	partner: "Choose partner"
  	};

	render () {
		return(
			<View>
				<Text style={styles.title}>
				Partnership</Text>
				<View style={styles.picker}>
				<Picker
				  style={{height: 50}}
				  selectedValue={this.state.partner}
				  onValueChange={(part) => this.setState({partner: part})}>
				  <Picker.Item label="KellerWilliams" value="KW" />
				  <Picker.Item label="MuseJam" value="MJ" />
				  <Picker.Item label="BixBox" value="BixBox" />
				  <Picker.Item label="AsiaCommerce.net" value="AC" />
				  <Picker.Item label="Tiket.com" value="Tiket" />
				  <Picker.Item label="kudo" value="kudo" />
				</Picker>
				</View>
				<Text style={styles.title}>
				Media partner</Text>
				<View style={styles.picker}>
				<Picker
				  style={{height: 50}}
				  selectedValue={this.state.language}
				  onValueChange={(lang) => this.setState({language: lang})}>
				  <Picker.Item label="IDNtimes" value="IDN" />
				  <Picker.Item label="Kaskus Bandung" value="Kaskus" />
				  <Picker.Item label="Play99ers Bandung" value="99ers" />
				  <Picker.Item label="Keepo.me" value="keepo" />
				</Picker>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		color: 'red',
		textAlign: 'center',
		fontWeight: 'bold',
		margin: 30
	},
	picker: {
		margin: 20,
		backgroundColor: 'skyblue'
	}
})