import { StyleSheet, Text, View } from 'react-native';
import {createConnection} from './services';
import store from './store';
import { Provider } from 'react-redux'
import { Button } from 'react-native-elements';
import { Input, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Authenticate"
      onPress={() => {
        navigation.navigate('Profile', { name: 'Casey' })
      }}
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  createConnection();
  return (
    <Text>This is {route.params.name}'s profile</Text>
  )
  
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
