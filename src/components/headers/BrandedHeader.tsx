import React, { FunctionComponent } from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';

type Props = StackHeaderProps;

const BrandedHeader: FunctionComponent<Props> = ({

}) => {

    return (
        <View
            style={{
                height: 80,
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 25,
                paddingRight: 25, 
                backgroundColor: '#AA1F1F'
            }}
        >
            <Text>
                Marcal
            </Text>
        </View>
    );
}

export default BrandedHeader;