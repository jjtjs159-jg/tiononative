import { StyleSheet } from 'react-native';

// #ff8a00

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item1: {
        flex: 0.5,
        backgroundColor: 'white',
    },
    headline: {
        fontWeight: '500',
        color: 'white',
        fontSize: 25,
    },
    item2: {
        flex: 4,
        backgroundColor: '#ff8a00',
        alignItems: 'center',
        paddingTop: 35,
    },
    item3: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 30,
    },
    item4: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    item5: {
        width: '50%',
    },

    title: {
        fontWeight: '700',
        fontSize: 25
    }
});

export default styles;