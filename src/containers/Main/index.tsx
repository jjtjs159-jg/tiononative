import React, { FunctionComponent } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
    Button,
    Text,
    View,
} from 'react-native';
import Colors from 'constants/Colors';
import MainSVG from './main.svg';
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
        <View style={styles.view}>
            <View style={styles.blank} />
            <View style={styles.headlineArea}>
                <Text style={styles.headline}>
                    Marcal
                </Text>
            </View>
            <View style={styles.visual}>
                <MainSVG />
            </View>
            <View style={styles.introArea}>
                <Text style={styles.title}>
                    Frontend Projects
                </Text>
                <Text style={styles.content}>
                    Let's start your frontend projects with us
                </Text>
            </View>
            <View style={styles.buttonArea}>
                <View style={styles.buttonWrap}>
                    <Button
                        color={Colors.$colorOrange}
                        title="Let's Start"
                        onPress={handlePress}
                    />
                </View>
            </View>
        </View>
    );
}

export default Index;