import { Image, Pressable, View } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import useRatio from '../../../Hooks/useRatio';
import { useNavigation } from '@react-navigation/native';
import Routes, {
  type PinScreenNavigationProp,
} from '../../../constants/Routes';
import { Text } from '../../../darkMode/ThemeComponents';
import Popup from '../Popup/Popup';
import { useState } from 'react';

interface PinProps {
  pin: Pin;
}

const Pin = ({ pin }: PinProps) => {
  const { image, title, id } = pin;
  const ratio = useRatio(image);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<PinScreenNavigationProp>();
  const goToPinPage = () => {
    navigation.navigate(Routes.PIN_SCREEN, { id });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onLike = () => {
    setModalVisible(true);
  };

  return (
    <>
      {modalVisible && (
        <Popup closeModal={closeModal} modalVisible={modalVisible} />
      )}
      <Pressable onPress={goToPinPage}>
        <View style={styles.pin}>
          <View>
            <Image
              source={{
                uri: image,
              }}
              style={[styles.image, { aspectRatio: ratio }]}
            />

            <Pressable onPress={onLike} style={styles.heartBtn}>
              <AntDesign name="hearto" size={24} color="black" />
            </Pressable>
          </View>

          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Pressable>
    </>
  );
};

export default Pin;
