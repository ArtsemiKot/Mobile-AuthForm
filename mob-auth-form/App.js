import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/src/Home/Home';
import Auth from './screen/src/Auth/Auth';
import Reg from './screen/src/Reg/Reg';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Reg" component={Reg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
