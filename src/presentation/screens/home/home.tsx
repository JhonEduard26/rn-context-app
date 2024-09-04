import { View, Text, Button } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profile-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name} - {email}</Text>
    </View>
  );
};
