import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: 80,
        // paddingTop: 40,
        // paddingBottom: 10,
        // paddingLeft: 25,
        // paddingRight: 25,
        paddingLeft: '5%',
        paddingRight: '5%',
        // backgroundColor: '#ff8900',
        backgroundColor: 'white',
    },
    inner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconLeft: {
        // marginRight: 25,
        color: 'black',
        flexDirection: 'row',
        marginRight: 'auto',
        width: '10%',
    },
    iconRight: {
        color: 'black',
        flexDirection: 'row',
        marginLeft: 'auto',
        width: '10%',
    },
    center: {
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default styles;