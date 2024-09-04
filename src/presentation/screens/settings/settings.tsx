import { View, Text, Button, Pressable } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useCounterStore } from '../../store/counter-store';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  const counter = useCounterStore(state => state.counter);
  const incrementBy = useCounterStore(state => state.incrementBy);

  useEffect(() => {
    navigation.setOptions({
      title: `Counter ${counter}`,
    })
  })

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementBy(2)}
      >
        <Text>Incrementar</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementBy(-2)}
      >
        <Text>Decrementar</Text>
      </Pressable>
    </View>
  );
};
