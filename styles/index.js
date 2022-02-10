import { StyleSheet } from 'react-native';

const colors = {
    darkGrey: '#322F38',
    appBg: '#050505'
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.appBg,
      alignItems: 'center',
      justifyContent: 'center',
    },
    web_container: {
        height: '100pt',
        width: '100pt',
    },
    input: {
        height: 40,
        borderWidth: 0,
        margin: 10,
        padding: 10,
        width: '80%'
    },
    pinInput: {
        height: 40,
        borderWidth: 0,
        color: '#fff',
        margin: 10,
        padding: 10,
        width: '80%',
        textAlign: 'center'
    },
    label: {
        fontSize: 21,
        color: '#fff',
        opacity: 0.5,
    }
});

export default styles