
import * as solanaWeb3 from '@solana/web3.js';
import { AsyncStorage } from 'react-native';
const createConnection = () => {
    //return new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("devnet"));
    console.log(solanaWeb3)
};

const _storeData = async () => {
    try {
      await AsyncStorage.setItem(
        '@MySuperStore:key',
        'I like to save it.'
      );
    } catch (error) {
      // Error saving data
    }
    _getData()
};

const _getData = async () => {
    console.log('value')
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:key')
      if(value !== null) {
        // value previously stored
        console.log(value)
      }
    } catch(e) {
      // error reading value
    }
}

export {
    createConnection,
    _storeData,
    _getData
}