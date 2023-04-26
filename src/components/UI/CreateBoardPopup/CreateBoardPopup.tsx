import { Text, TextInput, View } from '../../../darkMode/ThemeComponents';
import {
  Modal,
  TouchableOpacity,
  View as MainView,
  Text as MainText,
  Pressable,
} from 'react-native';
import { styles } from './styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

interface PopupProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const CreateBoardPopup = ({ modalVisible, closeModal }: PopupProps) => {
  const [text, onChangeText] = useState('');

  return (
    <>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <MainView style={styles.modalView}>
            <View style={styles.textContainer}>
              {/* --HEADER-- */}
              <View style={styles.closeContainer}>
                <Text style={styles.title}>Create New Board</Text>
                <Pressable onPress={closeModal}>
                  <AntDesign name="close" size={20} color="#b8001c" />
                </Pressable>
              </View>
              {/* --TEXT INPUT-- */}
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Add the name of New board"
                keyboardType="numeric"
                placeholderTextColor="#a3a3a3"
              />
              {/* --BTN SAVE-- */}
              <TouchableOpacity
                style={styles.btnCreateNewBoard}
                // onPress={openCreatePopup}
              >
                <Ionicons name="add-circle-outline" size={32} color="#fff" />
                <MainText style={styles.buttonText}>Create</MainText>
              </TouchableOpacity>
            </View>
          </MainView>
        </Modal>
      </View>
    </>
  );
};

export default CreateBoardPopup;
