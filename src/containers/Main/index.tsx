import React, { FunctionComponent } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
    Button,
    Text,
    View,
} from 'react-native';
import styles from './index.style';

type Props = StackScreenProps<any, any>;

const Index: FunctionComponent<Props> = ({
    navigation,
    route,
}) => {
    const handlePress = () => {
        const to = 'Sign';
        const params = {
            name: 'jg'
        };

        navigation.navigate(to, params);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                메인
            </Text>
            <Button
                title="버튼"
                onPress={handlePress}
            />
        </View>
    );
}

export default Index;