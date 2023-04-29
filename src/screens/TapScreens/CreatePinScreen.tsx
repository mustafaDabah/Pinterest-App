import { View, Button, TextInput, Image } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';

const CreatePinScreen = () => {
  const [imageUri, setImageUri] = useState<null | string>(null);
  const [title, setTitle] = useState('');

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.root}>
      <Button title="Upload your Pin" onPress={pickImageAsync} />
      {imageUri && (
        <>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <TextInput
            placeholder="Title..."
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />
          <Button title="Submit Pin" onPress={() => null} />
        </>
      )}
    </View>
  );
};

export default CreatePinScreen;
