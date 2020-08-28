import React, { FunctionComponent } from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
// import { Ionicons, Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import styles from './BrandedHeader.style';

type Props = StackHeaderProps;

const BrandedHeader: FunctionComponent<Props> = ({

}) => {

    return (
        <View style={styles.header}>
            <View style={styles.inner}>
                {/* <Ionicons style={styles.iconLeft} name="md-menu" size={24} /> */}
                <SimpleLineIcons style={styles.iconLeft} name="menu" size={24} />
                <Text>
                    Marcal
                </Text>
                {/* <Entypo style={styles.iconRight} name="magnifying-glass" size={24} /> */}
                <Octicons style={styles.iconRight} name="search" size={24} color="black" />
            </View>
        </View>
    );
}

export default BrandedHeader;