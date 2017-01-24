import React, {Component} from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'

export default class ScrollViewDisplay extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{flex: 1, padding: 10}}>
					<ScrollView>
						<Text style={styles.partner}>
						Partnership</Text>
						<Image style={styles.portrait} source={{uri: 'https://yt3.ggpht.com/-2GDpq0RKAQo/AAAAAAAAAAI/AAAAAAAAAAA/6W22VWEroXY/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}} />
						<Image style={styles.portrait} source={{uri: 'http://rishabhbhardwaj.com/images/Musejam_shot_old.jpg'}} />
						<Image style={styles.portrait} source={{uri: 'http://bixboxapp.com/assets/images/BixBox.png'}} />
						<Image style={styles.portrait} source={{uri: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/13704352_1044419309008384_678328446_a.jpg'}} />
						<Image style={styles.portrait} source={{uri: 'https://shopcoupons.co.id/files/tiket-logo-315x351.1439450570.jpg'}} />
						<Image style={styles.portrait} source={{uri: 'https://lh3.googleusercontent.com/_uSSCf6dI9DPpXas78tYkni4cVIpE2AGrDWiAk-T3QTdEKX9hTBqddVcTEH68ZSQKo2N=w300'}} />
					</ScrollView>
				</View>
				<View style={{flex: 1}}>
					<Text style={styles.media}>
						Media partner</Text>
					<ScrollView horizontal>
					<Image style={styles.landscape} source={{uri: 'http://www.indoradiostreaming.com/wp-content/uploads/2014/03/99ers-Radio-Jakarta-Logo.jpg'}} />
						<Image style={styles.landscape} source={{uri: 'https://3.bp.blogspot.com/-DVlIN-WxFH8/VzIPu6gh9yI/AAAAAAAACLQ/juuLbP75-1QZPUQQApDhp2Yp3frW_2DPwCLcB/w1200-h630-p-nu/IDNtimes.com%2B1%2B%2528Black%2529.png'}} />
						<Image style={styles.landscape} source={{uri: 'https://s.kaskus.id/images/2016/06/25/1953138_20160625095645.png'}} />
						<Image style={styles.portrait} source={{uri: 'https://pbs.twimg.com/profile_images/793539534533255168/hgR9w_mD.jpg'}} />
					</ScrollView>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'skyblue'
	},
	partner: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	media: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
		marginTop: 30
	},
	portrait: {
		width: 200,
		height: 200,
		margin: 50,
		alignSelf: 'center'
	},
	landscape: {
		width: 400,
		height: 200,
		margin: 50,
		alignSelf: 'center'
	}
})
