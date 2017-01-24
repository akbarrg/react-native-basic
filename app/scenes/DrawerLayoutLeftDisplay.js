import React, {Component} from 'react'
import { View, Text, DrawerLayoutAndroid, StyleSheet, Image } from 'react-native'

export default class DrawerLayoutLeftDisplay extends Component {
	render() {
	  var navigationView = (
	    <View style={styles.drawer}>
	      <Text style={styles.title}>Partnership</Text>
	      <Text style={styles.menu}>BixBox</Text>
	      <View style={{width:300, height:1, backgroundColor: 'white', opacity: 0.5}}></View>
	      <Text style={styles.menu}>KellerWilliams</Text>
	      <View style={{width:300, height:1, backgroundColor: 'white', opacity: 0.5}}></View>
	      <Text style={styles.menu}>MuseJam</Text>
	      <View style={{width:300, height:1, backgroundColor: 'white', opacity: 0.5}}></View>
	      <Text style={styles.menu}>AsiaCommerce.net</Text>
	      <View style={{width:300, height:1, backgroundColor: 'white', opacity: 0.5}}></View>
	      <Text style={styles.menu}>Tiket.com</Text>
	      <View style={{width:300, height:1, backgroundColor: 'white', opacity: 0.5}}></View>
	      <Text style={styles.menu}>kudo</Text>
	      <View style={{width:300, height:1, backgroundColor: 'white', opacity: 0.5}}></View>
	    </View>
	  );

	  return (
	    <DrawerLayoutAndroid
	      drawerBackgroundColor="rgba(0,0,0,0.5)"
	      drawerWidth={300}
	      drawerPosition={DrawerLayoutAndroid.positions.Left}
	      renderNavigationView={() => navigationView}>
	      <View style={{flex: 1, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}}>
	        <Image
	        	style={styles.image}
	        	source={{uri: 'https://refactory.id/images/Refactory--logo-9-white-2.png'}} />
	        	<Image
	        	style={styles.image}
	        	source={{uri: 'https://refactory.id/images/Refactory--logo-9-white-2.png'}} />
	      </View>
	    </DrawerLayoutAndroid>
	  );
	}
}

const styles = StyleSheet.create({
	drawer: {
		flex: 1, 
		backgroundColor: 'grey',
	},

	title: {
		margin: 10,
		fontSize: 40, 
		textAlign: 'left',
		fontWeight: 'bold',
		color: 'skyblue'
	},

	text: {
		margin: 20, 
		fontSize: 50, 
		textAlign: 'center', 
		color: 'white', 
		fontWeight: 'bold'
	},

	menu: {
		margin: 10,
		fontSize: 25,
		color: 'white'
	},

	image: {
		margin: 30,
		width: 400,
		height: 160,
	},
})