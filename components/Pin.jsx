
import React from 'react';
import { Text, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import styles from '../styles';

const Pin = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Create a PIN</Text>
        <Input keyboardType={"number-pad"} placeholder="Password" secureTextEntry={true} style={styles.pinInput}></Input>
      </View>
    );
  };
  
export default Pin;