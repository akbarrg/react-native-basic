import React, { Component } from 'react'
import { AppRegistry, ListView, View, Text, StyleSheet } from 'react-native'

//ListView items
const rows = {
  'Partnership': [
    {id: 0, text: 'KellerWilliams'},
    {id: 1, text: 'MuseJam'},
    {id: 2, text: 'BixBox'},
    {id: 3, text: 'AsiaCommerce.net'},
    {id: 4, text: 'Tiket.com'},
    {id: 5, text: 'kudo'},
  ],
  'Media partner': [
    {id: 6, text: 'IDNtimes'},
    {id: 7, text: 'Kaskus Bandung'},
  ],
}

// Row and section comparison functions
const rowHasChanged = (r1, r2) => r1.id !== r2.id
const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

export default class ListViewVerticalDisplay extends Component {

  state = {
    dataSource: ds.cloneWithRowsAndSections(rows)
  }

  renderRow = (rowData, sectionId) => {
    return (
      <Text style={styles.row}>
        {rowData.text}
      </Text>
    )
  }

  renderSectionHeader = (sectionRows, sectionId) => {
    return (
      <Text style={styles.header}>
        {sectionId} ({sectionRows.length})
      </Text>
    )
  }

  render() {
    return (
      //default listview is vertical
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
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
    fontSize: 20,
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
