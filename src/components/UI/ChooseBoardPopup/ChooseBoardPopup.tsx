import { useState } from 'react';
import { Text, View } from '../../../darkMode/ThemeComponents';
import { Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import BoardList from '../BoardList/BoardList';
import CreateBoardPopup from '../CreateBoardPopup/CreateBoardPopup';

interface PopupProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const ChooseBoardPopup = ({ modalVisible, closeModal }: PopupProps) => {
  const [openPopup, setOpenPopup] = useState(false);

  const closeCreatePopup = () => {
    setOpenPopup(false);
  };

  const openCreatePopup = () => {
    setOpenPopup(true);
    // closeModal();
  };

  return (
    <>
      <CreateBoardPopup
        closeModal={closeCreatePopup}
        modalVisible={openPopup}
      />
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
            <Text style={styles.title}>Create New Board</Text>
            <View style={styles.textContainer}>
              {/* --LIST OF BOARD-- */}
              <BoardList />

              {/* --BTN CREATE NEW BOARD-- */}
              <View>
                <TouchableOpacity
                  style={styles.btnCreateNewBoard}
                  onPress={openCreatePopup}>
                  <Ionicons
                    name="add-circle-outline"
                    size={32}
                    color="#b8001c"
                  />
                  <Text style={styles.buttonText}>create new board</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default ChooseBoardPopup;
