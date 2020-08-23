import React, { FunctionComponent } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import styles from './Index.style';

type Props = StackScreenProps<any, any>;

const Index: FunctionComponent<Props> = ({
    navigation,
    route,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Sign
            </Text>
        </View>
    );
}

export default Index;