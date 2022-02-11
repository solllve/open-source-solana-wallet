import { StyleSheet, Text, TextInput, View} from 'react-native';
import { AsyncStorage } from 'react-native';
import {createConnection, _storeData, _getData} from './services';
import React from "react";
import store from './store';
import { Provider } from 'react-redux'
import { Input, Icon, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import Auth from './routes/Auth';
import { WebView } from 'react-native-webview';
import Pin from './components/Pin';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
  const [number, onChangeNumber] = React.useState(null);
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen
              name="Home"
              component={Pin}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer> 
      </Provider>
    );
}


