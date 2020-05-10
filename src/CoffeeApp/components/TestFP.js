import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0984e3',
        borderRadius: 4,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
        margin: 20,
    },
})

const defaultProps = {
    style: styles.button,
    text: 'Submit',
}

const propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.instanceOf(Object),
}

const TestFP = (props) => {
    const { style, text, onPress, color } = props;
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={{ color }}>{text}</Text>
        </TouchableOpacity>
    )
}

TestFP.defaultProps = defaultProps;
TestFP.propTypes = propTypes;

export default TestFP;
