import React from 'react';
import { View, Text } from 'react-native';

// Components
import OOP from '../../components/TestOOP';

// Stylesheets
import styles from './styles';

// Variables


export default class TestOOP extends OOP {
    constructor(props){
        super(props);
    }
    render = () => {
        return (
            <View style={styles.container}>
                <Text>index</Text>
            </View>
        );
    }
}
