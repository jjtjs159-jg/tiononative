import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    blank: {
        flex: 0.3,
        backgroundColor: 'white',
    },
    headlineArea: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        fontWeight: '700',
        color: 'black',
        fontSize: 25,
    },
    visual: {
        flex: 4,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    introArea: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 30,
    },
    title: {
        fontWeight: '700',
        fontSize: 25,
    },
    content: {
        fontSize: 15,
    },
    buttonArea: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    buttonWrap: {
        width: '50%',
        marginBottom: '2%'
    },
    textSmall: {
        textAlign: 'center',
    }
});

export default styles;