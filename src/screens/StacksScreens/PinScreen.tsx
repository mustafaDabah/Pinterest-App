import { StyleSheet, Image, Pressable } from 'react-native';
import pins from '../../../assets/data/pins';
import useRatio from '../../Hooks/useRatio';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { type PinScreenRouteProp } from '../../constants/Routes';
import { Text, View } from '../../darkMode/ThemeComponents';

const PinScreen = () => {
  const route = useRoute<PinScreenRouteProp>();
  const navigation = useNavigation();

  const { id } = route.params;
  const pin = pins.find(item => item.id === id);

  const goBack = () => {
    navigation.goBack();
  };

  if (pin) {
    const ratio = useRatio(pin.image);

    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <StatusBar style="light" />
        <View style={styles.root}>
          <Image
            style={[styles.image, { aspectRatio: ratio }]}
            source={{ uri: pin.image }}
          />
          <Text style={styles.title}>{pin.title}</Text>
          <Pressable style={styles.backBtn} onPress={goBack}>
            <Ionicons name={'chevron-back'} size={35} color={'white'} />
          </Pressable>
        </View>
      </SafeAreaView>
    );
  } else {
    return <Text>not found </Text>;
  }
};

export default PinScreen;

const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: '#000',
  },
  root: {
    height: '100%',
    // backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 35,
  },
  backBtn: {
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: '#444',
    borderRadius: 50,
  },
});
