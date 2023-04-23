import { Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Pressable } from 'react-native';
import { Routes } from '../../../constants';
import { type SettingsScreenNavigationProp } from '../../../constants/Routes';
import { styles } from './styles';

const ProfileIcon = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  const goToSettingsPage = () => {
    navigation.navigate(Routes.SETTINGS_SCREEN);
  };

  return (
    <View style={styles.icons}>
      <Feather name="share" size={24} color="#595858" style={styles.icon} />
      <Pressable onPress={goToSettingsPage}>
        <Entypo
          name="dots-three-horizontal"
          size={24}
          color="#595858"
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export default ProfileIcon;
