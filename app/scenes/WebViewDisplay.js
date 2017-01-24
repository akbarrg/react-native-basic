import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class WebViewDisplay extends Component {
  render() {
    return (
      <WebView
      	style={{margin: 5}}
        source={{uri: 'https://refactory.id/'}}
      />
    );
  }
}