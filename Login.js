import React, { Component } from 'react';
import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet
} from 'react-native';

export default class ModalExample = (props) => {
   return (
      <View style = {styles.container}>

         <Modal
            animationType = {"slide"}
            transparent = {false}
            visible = {props.modalVisible}
            onRequestClose = {() => {alert("Modal has been closed.")}}
            >
            <View style = {styles.modal}>
               <TouchableHighlight onPress = {props.closeModal}>
                  <Text>Hide Modal</Text>
               </TouchableHighlight>
            </View>
         </Modal>

         <TouchableHighlight onPress = {props.openModal}>
            <Text>Show Modal</Text>
         </TouchableHighlight>

      </View>
   );
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'silver'
   }
});