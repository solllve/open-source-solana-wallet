import { StyleSheet } from 'react-native';

const colors = {
    darkGrey: '#322F38'
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.darkGrey,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: '80%'
    }
});

export default styles