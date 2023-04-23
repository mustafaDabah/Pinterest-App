import React, { useState } from 'react';
import { ScrollView, Text, View } from '../../../darkMode/ThemeComponents';
import { Modal, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

interface PopupProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const Popup = ({ modalVisible, closeModal }: PopupProps) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={closeModal}
        />

        <View style={styles.modalView}>
          <Text style={styles.title}>Choose Board</Text>
          <View style={styles.textContainer}>
            {/* <Text style={styles.textStyle}>
              Popup Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              nesciunt a quae vitae voluptatem. Mollitia molestiae, eum cumque
              sed aliquam ut tenetur cupiditate, nihil quisquam veritatis,
              similique expedita ab. Sunt!
            </Text> */}

            <ScrollView></ScrollView>

            <TouchableOpacity
              style={styles.btnCreateNewBoard}
              onPress={() => {
                console.log('first');
              }}>
              <Ionicons name="add-circle-outline" size={32} color="#b8001c" />
              <Text style={styles.buttonText}>create new board</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Popup;
