
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import styles from '../styles';

const Auth = ({ navigation }) => {
    return (
        <WebView  style={styles.container}
        source={{
          uri: 'https://my.spline.design/colorbox2copy-49af2b56b4f4f96891e7b2bbcf20f47b/'
        }}
      >
   
          <Text>Hello World</Text>

          <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
       
      </WebView>  
      
    )
}

export default Auth;