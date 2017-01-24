import React, {Component} from 'react'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'

export default class ImageDisplay extends Component {
	render () {
		return(
			<ScrollView>
			<View style={styles.container}>
				<View style={styles.header}>
				<Text style={styles.title}>
				Image
				</Text>
				</View>
					<View style={{alignItems: 'center'}}>
						<Text style={styles.text}>
						This is an image
						</Text>
						<Image
							style={styles.image}
							source={{uri: 'https://yt3.ggpht.com/-2GDpq0RKAQo/AAAAAAAAAAI/AAAAAAAAAAA/6W22VWEroXY/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}}
						/>
						<Text style={styles.text}>
						This is an image with border
						</Text>
						<Image
							style={styles.imageBorder}
							source={{uri: 'http://rishabhbhardwaj.com/images/Musejam_shot_old.jpg'}}
						/>
						<Text style={styles.text}>
						This is a rounded image
						</Text>
						<Image
							style={styles.imageRounded}
							source={{uri: 'https://lh3.googleusercontent.com/_uSSCf6dI9DPpXas78tYkni4cVIpE2AGrDWiAk-T3QTdEKX9hTBqddVcTEH68ZSQKo2N=w300'}}
						/>
					</View>
			</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'skyblue',
	},

	header: {
		backgroundColor: 'red',
		marginBottom: 30
	},

	title: {
		margin: 10,
		fontSize: 35,
		textAlign: 'center',
		fontWeight: 'bold',
		color: 'white'
	},

	text: {
		fontSize: 35,
		fontWeight: 'bold',
		marginBottom: 50
	},

	image: {
		width: 300,
		height: 300,
		marginBottom: 150
	},

	imageBorder: {
		width: 300,
		height: 300,
		borderColor: 'white',
		borderRadius: 20,
		borderWidth: 5,
		marginBottom: 150
	},

	imageRounded: {
		width: 300,
		height: 300,
		borderColor: 'red',
		borderRadius: 300,
		borderWidth: 5,
		marginBottom: 150
	},
})
