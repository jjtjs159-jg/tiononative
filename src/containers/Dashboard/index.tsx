import React, { FunctionComponent } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
    Button,
    Text,
    View,
} from 'react-native';
import Colors from 'constants/Colors';
import styles from './index.style';

type Props = StackScreenProps<any, any>;

const Index: FunctionComponent<Props> = ({
    navigation,
    route,
}) => {

    return (
        <View style={styles.view}>
            <View style={styles.blank} />
            <View style={styles.wrap}>
                <View style={styles.list}>
                    <View style={styles.cardSelected}>
                        <Text style={styles.cardInner}>
                            React
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardInnerSelected}>
                            Typescript
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardInnerSelected}>
                            React Native
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Index;