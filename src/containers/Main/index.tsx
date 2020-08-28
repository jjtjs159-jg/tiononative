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
            <View style={styles.item1} />
            <View style={styles.item2}>
                <Text style={styles.headline}>
                    Marcal
                </Text>
            </View>
            <View style={styles.item3}>
                <Text style={styles.title}>
                    Frontend Projects
                </Text>
                <Text>
                    Let's start your frontend projects with us
                </Text>
            </View>
            <View style={styles.item4}>
                <View style={styles.item5}>
                    <Button
                        color="#ff8a00"
                        title="Let's Start"
                        onPress={handlePress}
                    />
                </View>
            </View>
        </View>
    );
}

export default Index;