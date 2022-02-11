
import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { getPin } from '../services/pin';
import { Input, Icon, Button } from 'react-native-elements';
import styles from '../styles';

const Pin = ({ navigation }) => {
    const [pin, setPin] = useState('');
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Create a PIN</Text>
        <Input keyboardType={"number-pad"} placeholder="Make a PIN" secureTextEntry={true} onChangeText={text => setPin(text)} style={styles.pinInput}></Input>
        <Button title='Submit' onPress={() => getPin(pin)}/>
      </View>
    );
  };
  
export default Pin;