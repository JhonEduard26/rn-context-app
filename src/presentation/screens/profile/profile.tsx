import { View, Text, Button, Pressable } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name} - {email}</Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ name: "Fernando" })}
      >
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({ email: "fer@google.com" })}
      >
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile("John Doe", "john.doe@mail.com")}
      >
        <Text>Regresar a John Doe</Text>
      </Pressable>
    </View>
  );
};
