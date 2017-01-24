import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, Image } from 'react-native'

import Toggle from './Toggle'

export default class ViewDisplay extends Component {
  //set state
  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  render() {
    const {flexDirection, alignItems, justifyContent} = this.state
    const layoutStyle = {flexDirection, justifyContent, alignItems}

    const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
    const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    return (
      <View style={styles.container}>
        <Toggle
          label={'Primary axis (flexDirection)'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle
          label={primaryAxis + ' distribution (justifyContent)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle
          label={secondaryAxis + ' alignment (alignItems)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <View style={[styles.layout, layoutStyle]}>
          <Image
            style={styles.box}
            source={{uri: 'http://bixboxapp.com/assets/images/BixBox.png'}} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    width: 200,
    height: 200,
    padding: 10,
    margin: 5
  },
})
