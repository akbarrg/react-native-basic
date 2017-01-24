import React, {Component} from 'react'
import {
	StyleSheet,
	ListView,
	Text, View,
	TouchableOpacity,
  Image
} from 'react-native'

//ListView items
const rows = {
	'BASIC REACT COMPONENT': [
	{id: 'view', name: 'View'},
	{id: 'text', name: 'Text'},
	{id: 'image', name: 'Image'},
	{id: 'button', name: 'Button'},
	{id: 'input', name: 'TextInput'},
	{id: 'opacity', name: 'TouchableOpacity'},
	{id: 'lvhorizontal', name: 'ListView horizontal'},
  {id: 'lvvertical', name: 'ListView vertical'},
  {id: 'slider', name: 'Slider'},
	{id: 'sv', name: 'ScrollView'},
	{id: 'switch', name: 'Switch'},
	{id: 'picker', name: 'Picker'},
  {id: 'modal', name: 'Modal'},
	{id: 'dlleft', name: 'DrawerLayout left'},
  {id: 'dlright', name: 'DrawerLayout right'},
	{id: 'vp', name: 'ViewPager'},
	{id: 'toolbar', name: 'Toolbar'},
  {id: 'toolbaricon', name: 'Toolbar Icon'},
	{id: 'wv', name: 'WebView'},
	{id: 'nav', name: 'Navigator'},
	],
}

const rowHasChanged = (r1, r2) => r1.id !== r2.id
const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

export default class MainActivity extends Component {
	state = {
    dataSource: ds.cloneWithRowsAndSections(rows)
  }

  _onPressItem(id) {
    this.props.navigator.push({
      name: id
    })
  }

  renderRow = (rowData, sectionId) => {
    return (
      <TouchableOpacity onPress={() => this._onPressItem(rowData.id)}>
        <Text style={styles.row}>
          {rowData.name}
        </Text>
      </TouchableOpacity>
    )
  }

  renderSectionHeader = (sectionRows, sectionId) => {
    return (
      <View style={styles.header}>
      <Text style={styles.title}>
        {sectionId} ({sectionRows.length})
      </Text>
      <Image
            style={styles.image}
            source={{uri: 'https://refactory.id/images/Refactory--logo-9-white-2.png'}} />
      </View>
    )
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  row: {
    padding: 15,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'skyblue',
  },
  title: {
    padding: 15,
    margin: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },

  image: {
    margin: 10,
    width: 130,
    height: 50,
  }
})
