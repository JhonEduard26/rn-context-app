import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './presentation/navigators/bottom-tab-nav';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
