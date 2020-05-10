import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
    container: { flex: 1 },
    input: {
        height: 50,
        width: '70%',
        borderRadius: 4,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        alignSelf: 'center'
    }
});

export default {
    ...common,
};
