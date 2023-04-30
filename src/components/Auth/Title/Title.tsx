import React from 'react';
import { Text } from '../../../darkMode/ThemeComponents';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './styles';

interface TitleProps {
  title: string;
  subTitle: string;
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <>
      <EvilIcons name="sc-pinterest" size={84} color="#b8001c" />
      <Text style={styles.title}> {title}</Text>
      <Text style={styles.subTitle}> {subTitle}</Text>
    </>
  );
};

export default Title;
