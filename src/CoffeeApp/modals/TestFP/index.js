import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';

// Components
import TestFP from '../../components/TestFP';

// Stylesheets
import styles from './styles';

// Variables


export default class index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            background: '',
            number: 0,
            height: 0,
        };
    }

    onChangeText = (text) => {
        this.setState({ height: text });
    }

    onPress = () => {
        this.setState({ background: '#d63031' })
    }

    showHeight = (height) => {
        const arrHeight = [];
        return () => {
            if (height === 0) {
                Alert.alert(`${arrHeight}`);
            } else {
                arrHeight.push(height);
            }
        }
    }

    render = () => {
        const { background, number, height } = this.state;
        return (
            <View style={styles.container}>
                <View
                    style={{ backgroundColor: background, width: 100, height: 100 }}
                />
                <TestFP
                    color='#fff'
                    text='Đổi màu'
                    onPress={this.onPress}
                />

                <TextInput
                    placeholder='Enter your height'
                    placeholderTextColor='#b2bec3'
                    onChangeText={(text) => this.onChangeText(text)}
                    style={styles.input}
                    value={height}
                />

                <TestFP
                    text='Hiện chiều cao'
                    color='#dfe6e9'
                    onPress={() => this.showHeight(height)}
                />
            </View>
        );
    }
}
