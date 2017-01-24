import React, {Component} from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  ViewPagerAndroid,
} from 'react-native'

import type { ViewPagerScrollState } from 'ViewPagerAndroid';

var PAGES = 6;
var BGCOLOR = ['black', 'gray', 'skyblue', 'green', 'yellow', 'pink'];
var IMAGE_URIS = [
  'https://yt3.ggpht.com/-2GDpq0RKAQo/AAAAAAAAAAI/AAAAAAAAAAA/6W22VWEroXY/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
  'http://rishabhbhardwaj.com/images/Musejam_shot_old.jpg',
  'http://bixboxapp.com/assets/images/BixBox.png',
  'https://scontent.cdninstagram.com/t51.2885-19/s150x150/13704352_1044419309008384_678328446_a.jpg',
  'https://shopcoupons.co.id/files/tiket-logo-315x351.1439450570.jpg',
  'https://lh3.googleusercontent.com/_uSSCf6dI9DPpXas78tYkni4cVIpE2AGrDWiAk-T3QTdEKX9hTBqddVcTEH68ZSQKo2N=w300',
];

class Button extends Component {
  handlePress = () => {
    if (this.props.enabled && this.props.onPress) {
      this.props.onPress();
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <View style={[styles.button, this.props.enabled ? {} : styles.buttonDisabled]}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default class ViewPagerDisplay extends Component {
  state = {
    page: 0,
    animationsAreEnabled: true,
    scrollEnabled: true,
    progress: {
      position: 0,
      offset: 0,
    },
  };

  onPageSelected = (e) => {
    this.setState({page: e.nativeEvent.position});
  };

  onPageScroll = (e) => {
    this.setState({progress: e.nativeEvent});
  };

  onPageScrollStateChanged = (state : ViewPagerScrollState) => {
    this.setState({scrollState: state});
  };

  move = (delta) => {
    var page = this.state.page + delta;
    this.go(page);
  };

  go = (page) => {
    if (this.state.animationsAreEnabled) {
      this.viewPager.setPage(page);
    } else {
      this.viewPager.setPageWithoutAnimation(page);
    }

    this.setState({page});
  };

  render() {
    var pages = [];
    for (var i = 0; i < PAGES; i++) {
      var pageStyle = {
        backgroundColor: BGCOLOR[i % BGCOLOR.length],
        alignItems: 'center',
        padding: 20,
      };
      pages.push(
        <View key={i} style={pageStyle} collapsable={false}>
          <Text style={styles.text}>
          Partnership</Text>
          <Image
            style={styles.image}
            source={{uri: IMAGE_URIS[i % BGCOLOR.length]}}
          />
       </View>
      );
    }
    var { page, animationsAreEnabled } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Button
            enabled={true}
            text={this.state.scrollEnabled ? 'Scroll Enabled' : 'Scroll Disabled'}
            onPress={() => this.setState({scrollEnabled: !this.state.scrollEnabled})}
          />
        </View>
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}
          scrollEnabled={this.state.scrollEnabled}
          onPageScroll={this.onPageScroll}
          onPageSelected={this.onPageSelected}
          onPageScrollStateChanged={this.onPageScrollStateChanged}
          pageMargin={10}
          ref={viewPager => { this.viewPager = viewPager; }}>
          {pages}
        </ViewPagerAndroid>
        <View style={styles.buttons}>
          <Button text="Start" enabled={page > 0} onPress={() => this.go(0)}/>
          <Button text="Prev" enabled={page > 0} onPress={() => this.move(-1)}/>
          <Text style={styles.buttonText}>Page {page + 1} / {PAGES}</Text>
          <Button text="Next" enabled={page < PAGES - 1} onPress={() => this.move(1)}/>
          <Button text="Last" enabled={page < PAGES - 1} onPress={() => this.go(PAGES - 1)}/>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: 0,
    margin: 5,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'gray',
  },
  buttonDisabled: {
    backgroundColor: 'black',
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  scrollStateText: {
    color: '#99d1b7',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    padding: 20,
  },
  text: {
  	fontSize: 40,
  	fontWeight: 'bold',
  	textAlign: 'center',
  	marginBottom: 50,
  	color: 'white'
  },
  viewPager: {
    flex: 1,
  },
});