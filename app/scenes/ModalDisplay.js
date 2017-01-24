import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';

export default class ModalDisplay extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Tap image to go back")}}
          >
         <View style={styles.modal}>
          <Text style={styles.text}>
            Welcome to
          </Text>
            <TouchableOpacity onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Image
                style={styles.image}
                source={{uri: 'https://refactory.id/images/Refactory--logo-9-white-2.png'}} />
            </TouchableOpacity>
         </View>
        </Modal>
        
        <TouchableOpacity onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={styles.text}>
        This is simple Modal example
        </Text>
        </TouchableOpacity>

      </View>
    );
  }y
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  modal: {
    flex: 1, 
    backgroundColor: 'skyblue', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  image: {
    width: 400, 
    height: 160
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 30,
    color: 'white'
  }
})