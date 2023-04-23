import MasonryList from '@react-native-seoul/masonry-list';
import { useWindowDimensions } from 'react-native';
import Pin from '../Pin/Pin';
import { styles } from './styles';

interface GalleryListProps {
  pins: Pin[];
}

const GalleryList = ({ pins }: GalleryListProps) => {
  const width = useWindowDimensions().width;

  const numColumns = Math.ceil(width / 250);

  return (
    <MasonryList
      data={pins}
      renderItem={({ item }: Pin) => <Pin pin={item as Pin} />}
      keyExtractor={(item): string => item.id}
      numColumns={numColumns}
      style={styles.container}
      onEndReached={() => {
        console.log('ITEM_CNT');
      }}
      onRefresh={() => {
        console.log('hello world');
      }}
    />
  );
};

export default GalleryList;
