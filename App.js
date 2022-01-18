import { StyleSheet, Text, View } from 'react-native';
import {createConnection} from './services';
import store from './store';
import { Provider } from 'react-redux'
import { Button } from 'react-native-elements';
import { Input, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './routes/Auth';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
      title="Authenticate"
      onPress={() => {
        navigation.navigate('Profile', { name: 'Casey' })
      }}
    />
    </View>
    
  );
};
const ProfileScreen = ({ navigation, route }) => {
  createConnection();
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  )
};

export default function App() {
  if (true) {
    return (
      <Provider store={store}>
         <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
              name="Authentication"
              component={Auth}
              options={{ title: 'Create a pin' }}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
  else {
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
  
}


