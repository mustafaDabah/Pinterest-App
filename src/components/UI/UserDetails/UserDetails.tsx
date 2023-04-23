import { Image } from 'react-native';
import { Text, View } from '../../../darkMode/ThemeComponents';
import { styles } from './styles';

const UserDetails = () => {
  return (
    <View style={styles.userDetails}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
        }}
      />
      <Text style={styles.title}>ProfileScreen</Text>
      <Text style={styles.subtitle}>123 followers | 435 followings </Text>
    </View>
  );
};

export default UserDetails;
