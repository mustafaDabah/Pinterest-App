import {
  Text as DefaultText,
  View as DefaultView,
  ScrollView as DefaultScroll,
  TextInput as DefaultTextInput,
} from 'react-native';
import { useDarkMode } from './Theme';

export type TextProps = DefaultText['props'];
export type ViewProps = DefaultView['props'];
export type ScrollProps = DefaultScroll['props'];
export type TextInputProps = DefaultTextInput['props'];

export function Text(props: TextProps) {
  const { darkStyles } = useDarkMode();
  const { style, ...otherProps } = props;

  return <DefaultText style={[style, darkStyles.text]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  const { darkStyles } = useDarkMode();

  return <DefaultView style={[style, darkStyles.container]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, ...otherProps } = props;
  const { darkStyles } = useDarkMode();

  return <DefaultTextInput style={[style, darkStyles.text]} {...otherProps} />;
}
export function ScrollView(props: ScrollProps) {
  const { style, ...otherProps } = props;
  const { darkStyles } = useDarkMode();

  return (
    <DefaultScroll style={[style, darkStyles.container]} {...otherProps} />
  );
}
