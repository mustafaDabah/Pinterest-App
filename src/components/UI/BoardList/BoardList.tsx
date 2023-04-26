import { Pressable } from 'react-native';
import React from 'react';
import { ScrollView, Text } from '../../../darkMode/ThemeComponents';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';

const BoardList = () => {
  return (
    <ScrollView style={styles.list}>
      <Pressable style={styles.containerList}>
        <Entypo name="pin" size={24} color="#b8001c" />
        <Text style={styles.title}>Name of board</Text>
      </Pressable>
    </ScrollView>
  );
};

export default BoardList;
