import React, { FunctionComponent, Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { BrandedHeader } from 'components/headers';
import { SafeAreaView, View } from 'react-native';
import 'react-native-gesture-handler';
import Main from './Main/index';
import Sign from './Sign/index';

const Stack = createStackNavigator();
const { Screen, Navigator } = Stack;

const Home: FunctionComponent = () => {
    return (
        <Fragment>
            {/* <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} /> */}
            {/* <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }} /> */}
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <NavigationContainer>
                    <Navigator>
                        <Screen
                            name="Main"
                            component={Main}
                            options={{
                                header: (props) => <BrandedHeader {...props} />
                            }}
                        />
                        <Screen name="Sign" component={Sign} />
                        {/* <StatusBar style="auto" /> */}
                    </Navigator>
                </NavigationContainer>
            </View>
        </Fragment>
    );
}

export default Home;