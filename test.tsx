import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';
// Next, create a state variable to store the current screen index:
const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
// Then, create an Animated.View component and attach a PanResponder object to it:

const panResponder = useRef(
  PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      const { dx } = gestureState;
      const screenWidth = Dimensions.get('window').width;

      Animated.event([null, { dx: pan }], {
        useNativeDriver: false,
      })(evt, gestureState);

      if (gestureState.dx > screenWidth / 2) {
        Animated.timing(pan, {
          toValue: screenWidth,
          duration: 250,
          useNativeDriver: false,
        }).start(() => {
          setCurrentScreenIndex(currentScreenIndex => currentScreenIndex - 1);
          pan.setValue(0);
        });
      } else if (gestureState.dx < -screenWidth / 2) {
        Animated.timing(pan, {
          toValue: -screenWidth,
          duration: 250,
          useNativeDriver: false,
        }).start(() => {
          setCurrentScreenIndex(currentScreenIndex => currentScreenIndex + 1);
          pan.setValue(0);
        });
      } else {
        Animated.spring(pan, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    },
  })
).current;

const pan = useRef(new Animated.Value(0)).current;

return (
  <View style={styles.container}>
    <Animated.View
      style={[
        styles.screen,
        {
          transform: [
            {
              translateX: pan,
            },
          ],
          backgroundColor: SCREEN_COLORS[currentScreenIndex],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <Text style={styles.screenText}>{SCREEN_NAMES[currentScreenIndex]}</Text>
    </Animated.View>
  </View>
);