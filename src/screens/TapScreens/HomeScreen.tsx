import { GalleryList } from '../../components/UI';
import pins from '../../../assets/data/pins';
import { ScrollView } from '../../darkMode/ThemeComponents';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreateBoardPopup from '../../components/UI/CreateBoardPopup/CreateBoardPopup';

function HomeScreen() {
  return (
    <SafeAreaView>
      {/* <CreateBoardPopup modalVisible={true} /> */}
      <ScrollView>
        <GalleryList pins={pins} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
