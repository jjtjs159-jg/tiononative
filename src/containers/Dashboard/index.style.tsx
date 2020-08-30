import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    blank: {
        flex: 0.5,
        backgroundColor: 'white',
    },
    wrap: {
        flex: 7,
        backgroundColor: 'blue',
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    card: {
        width: '25%',
        height: 35,
        borderRadius: 35,
        backgroundColor: Colors.$colorBlueTint,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardSelected: {
        width: '25%',
        height: 35,
        borderRadius: 35,
        backgroundColor: Colors.$colorBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardInner: {
        color: 'white',
        fontSize: 12,
    },
    cardInnerSelected: {
        color: 'black',
        fontSize: 12,
    },
});

export default styles;