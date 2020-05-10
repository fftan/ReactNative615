import React from 'react';
import { View, Text } from 'react-native';

// Components


// Stylesheets
// import styles from './styles';

// Variables


export default class TestOOP extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            hello: 'hello',
        }

        this.variable = [
            { name: 'tan' },
            { name: 'mon' },
        ];
    }
    render = () => {
        return (
            <View>
                <Text>TestOOP</Text>
            </View>
        );
    }
}
