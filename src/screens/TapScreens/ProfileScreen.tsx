import { GalleryList } from '../../components/UI';
import pins from '../../../assets/data/pins';
import { ScrollView } from '../../darkMode/ThemeComponents';
import { ProfileIcon, UserDetails } from '../../components/ProfileScreen';
import { styles } from './styles';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileIcon />
      <UserDetails />
      <GalleryList pins={pins} />
    </ScrollView>
  );
};

export default ProfileScreen;
