import { GalleryList } from '../../components/UI';
import pins from '../../../assets/data/pins';
import { ScrollView } from '../../darkMode/ThemeComponents';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <GalleryList pins={pins} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
