import React, {Component} from 'react';
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native';

export default class SliderDisplay extends Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} >
          This is simple slider example
        </Text>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          style={styles.slider}
          {...this.props}
          maximumValue={100}
          step={5}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
}

class SlidingCompleteExample extends React.Component {
  state = {
    slideCompletionValue: 0,
    slideCompletionCount: 0,
  };

  render() {
    return (
      <View>
        <SliderDisplay
          {...this.props}
          onSlidingComplete={(value) => this.setState({
              slideCompletionValue: value,
              slideCompletionCount: this.state.slideCompletionCount + 1})} />
        <Text>
          Completions: {this.state.slideCompletionCount} Value: {this.state.slideCompletionValue}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  slider: {
    width: 300,
    height: 30,
    margin: 30,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
});